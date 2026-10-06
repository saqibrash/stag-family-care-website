import "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { consumeLastCapturedError, describeError } from "./lib/error-capture";

function runtimeLabel(): string {
  return process.env.VERCEL ? "vercel" : "other";
}

function shortDetail(error: unknown): string {
  return `${runtimeLabel()} | ${describeError(error).split("\n").slice(0, 4).join(" / ")}`;
}

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;
  const captured = consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`);
  console.error(captured);
  return new Response(renderErrorPage(shortDetail(captured)), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(shortDetail(error)), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
