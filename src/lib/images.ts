/**
 * Real, royalty free photography (Pexels and Unsplash).
 * Each entry keeps its own alt text so pages stay accessible.
 */

type Provider = "pexels" | "unsplash";

export interface Photo {
  provider: Provider;
  id: string;
  alt: string;
}

export function photoSrc(photo: Photo, width: number) {
  if (photo.provider === "pexels") {
    return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
  }
  return `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&q=70&w=${width}`;
}

export const photos = {
  hero: {
    provider: "pexels",
    id: "7551664",
    alt: "A carer standing beside an older man in his living room, pointing towards the window as they chat",
  },
  personalCare: {
    provider: "pexels",
    id: "7551611",
    alt: "A carer gently supporting an older man as he stretches and moves around his home",
  },
  liveInCare: {
    provider: "unsplash",
    id: "1581579438747-1dc8d17bbce4",
    alt: "An older woman preparing food in her own kitchen at home",
  },
  companionship: {
    provider: "pexels",
    id: "3768131",
    alt: "An older woman laughing with a companion during a walk outdoors",
  },
  supportedLiving: {
    provider: "pexels",
    id: "7551617",
    alt: "Two support workers sitting with a man at a table, looking at a tablet together",
  },
  family: {
    provider: "pexels",
    id: "5637743",
    alt: "Grandparents, a parent and children standing together in a garden",
  },
  conversation: {
    provider: "pexels",
    id: "7176026",
    alt: "A family talking with a care professional who is taking notes",
  },
  livingRoom: {
    provider: "pexels",
    id: "4098152",
    alt: "Two visitors sitting and talking with an older person in a bright living room",
  },
  hands: {
    provider: "unsplash",
    id: "1584515933487-779824d29309",
    alt: "A younger person holding the hand of an older person",
  },
} satisfies Record<string, Photo>;
