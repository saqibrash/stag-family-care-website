import heroCareAtHome from "@/assets/photos/hero-care-at-home.webp.asset.json";
import personalCareHome from "@/assets/photos/personal-care-home.webp.asset.json";
import companionshipCare from "@/assets/photos/companionship-care.webp.asset.json";
import supportedLiving from "@/assets/photos/supported-living.webp.asset.json";
import familyCareConversation from "@/assets/photos/family-care-conversation.webp.asset.json";

/** Real professional care photography hosted with the project for stable live delivery. */

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const photos = {
  hero: {
    src: heroCareAtHome.url,
    width: 1400,
    height: 934,
    alt: "A carer standing beside an older man in his living room, pointing towards the window as they chat",
  },
  personalCare: {
    src: personalCareHome.url,
    width: 1200,
    height: 800,
    alt: "A carer gently supporting an older man as he stretches and moves around his home",
  },
  liveInCare: {
    src: familyCareConversation.url,
    width: 1200,
    height: 800,
    alt: "A family talking with a care professional at home",
  },
  companionship: {
    src: companionshipCare.url,
    width: 1200,
    height: 800,
    alt: "An older woman laughing with a companion during a walk outdoors",
  },
  supportedLiving: {
    src: supportedLiving.url,
    width: 1200,
    height: 800,
    alt: "Two support workers sitting with a man at a table, looking at a tablet together",
  },
  family: {
    src: familyCareConversation.url,
    width: 1200,
    height: 800,
    alt: "A family talking with a care professional at home",
  },
  conversation: {
    src: familyCareConversation.url,
    width: 1200,
    height: 800,
    alt: "A family talking with a care professional who is taking notes",
  },
  livingRoom: {
    src: heroCareAtHome.url,
    width: 1400,
    height: 934,
    alt: "A carer talking with an older person at home",
  },
  hands: {
    src: personalCareHome.url,
    width: 1200,
    height: 800,
    alt: "A carer supporting an older person at home",
  },
} satisfies Record<string, Photo>;
