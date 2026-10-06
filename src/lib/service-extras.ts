import type { ServiceKey } from "@/lib/site";

export interface ServiceExtras {
  h1: string;
  benefits: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: ServiceKey[];
  posts: string[];
}

export const serviceExtras: Record<ServiceKey, ServiceExtras> = {
  "personal-care": {
    h1: "Personal care at home, given with dignity",
    benefits: [
      { title: "Stay in familiar surroundings", body: "Help with daily routines means many people can carry on living in the home they know, close to neighbours and the things they love." },
      { title: "Privacy protected", body: "Carers knock, explain and ask before helping. Personal tasks are done at the person's pace and in the way they prefer." },
      { title: "Independence kept where possible", body: "We support the parts of a task that have become difficult and encourage someone to keep doing the rest themselves." },
      { title: "Peace of mind for family", body: "Relatives know someone reliable is visiting at agreed times, and that any changes will be passed on with permission." },
    ],
    faqs: [
      { q: "What does personal care at home involve?", a: "It usually covers help with washing, bathing, dressing, grooming, continence and applying creams. Exactly what is included is agreed in the care plan after an assessment." },
      { q: "Can you help with medication?", a: "Medication prompts and support can be included where an assessment shows it is appropriate. The level of support is written into the care plan." },
      { q: "Can visits be short term, for example after a hospital stay?", a: "Short term support can often be arranged, subject to assessment and availability. Speak to our team about what is needed." },
    ],
    related: ["companionship", "person-centred-care"],
    posts: ["when-might-personal-care-at-home-be-helpful", "how-to-start-a-conversation-about-care"],
  },
  companionship: {
    h1: "Companionship care that keeps life connected",
    benefits: [
      { title: "Company to look forward to", body: "Regular visits give the week a shape, with a familiar face arriving at a time that suits." },
      { title: "Getting out and about", body: "A companion can make a trip to the shops, a café or a local walk feel easy again." },
      { title: "Hobbies kept going", body: "Whether it is gardening, puzzles, baking or a favourite programme, there is someone to share it with." },
      { title: "Someone who notices", body: "A regular companion is well placed to spot small changes and, with permission, let family know." },
    ],
    faqs: [
      { q: "What is companionship care?", a: "Companionship care is non medical support focused on company, conversation, outings and help with light everyday tasks. It suits people who are mostly independent but would value regular contact." },
      { q: "How often can companionship visits happen?", a: "Visits can be weekly, several times a week or arranged around particular days. Frequency is agreed after an initial conversation and assessment." },
      { q: "Can companionship be combined with personal care?", a: "Yes. Many people start with companionship and add personal care later if their needs change. The plan is reviewed so support can adapt." },
    ],
    related: ["personal-care", "person-centred-care"],
    posts: ["how-companionship-care-can-support-independence", "how-to-start-a-conversation-about-care"],
  },
  "supported-living": {
    h1: "Supported living services for adults living independently",
    benefits: [
      { title: "Choice and control", body: "The person decides how their home runs and what support they want. We help them carry out those choices." },
      { title: "New skills, at their own pace", body: "Cooking, budgeting and travelling independently are broken into manageable steps that build confidence." },
      { title: "Part of the community", body: "Support can include volunteering, college, work, clubs and seeing friends, not just tasks at home." },
      { title: "Support that can step back", body: "As confidence grows, support can reduce. If things become harder, it can increase again." },
    ],
    faqs: [
      { q: "Who is supported living for?", a: "Supported living is for adults who want to live in their own home or tenancy with support. This may include people with a learning disability, autism, a physical disability or mental health needs." },
      { q: "Is supported living the same as residential care?", a: "No. In supported living the person usually holds their own tenancy or owns their home, and support is arranged separately around their goals." },
      { q: "Can families be involved?", a: "Yes, where the person agrees. We are happy to work alongside families and other professionals involved in someone's support." },
    ],
    related: ["person-centred-care", "companionship"],
    posts: ["what-is-supported-living", "what-is-person-centred-care"],
  },
  "person-centred-care": {
    h1: "Person centred care, planned around you",
    benefits: [
      { title: "Your routine, not ours", body: "Visit times and tasks fit around how the person likes their day to run." },
      { title: "A plan in your own words", body: "Care plans record preferences, history and goals, so carers understand the person as well as the tasks." },
      { title: "Flexible as needs change", body: "Regular reviews mean support can increase, reduce or change focus when life changes." },
      { title: "A familiar team", body: "We aim to keep the team small, so the people visiting get to know what matters." },
    ],
    faqs: [
      { q: "What does person centred care mean in practice?", a: "It means support is shaped by the person's own wishes, routines and goals. They are involved in every decision about their care and their plan is reviewed with them." },
      { q: "How is a person centred care plan written?", a: "We visit, listen and agree the plan together after an assessment. The person receiving care, and family if they wish, are involved throughout." },
      { q: "Can I change my plan later?", a: "Yes. Plans are reviewed regularly and you can ask for a review at any time if something is not working." },
    ],
    related: ["personal-care", "supported-living"],
    posts: ["what-is-person-centred-care", "what-to-look-for-when-choosing-a-care-provider"],
  },
};
