/**
 * ================================================================
 * EDITABLE SITE DETAILS
 * This is the single place to update business information.
 * Leave a value as an empty string until it is confirmed. Empty values
 * are hidden on the public website so fake details are never shown.
 * ================================================================
 */

export const site = {
  name: "STAG Family Care",
  strapline: "From our family to yours",

  /** Add the STAG Family Care phone number here once it is live. */
  phone: "",

  /** Add the STAG Family Care email address here once it is live. */
  email: "",

  /** Add the careers email here once it is live. */
  careersEmail: "",

  /** Add the office address here once it is confirmed. */
  address: "",

  /** Add opening hours here once they are confirmed. */
  openingHours: "",

  outOfHours:
    "Out of hours arrangements will be confirmed and added here. In an emergency always call 999.",

  registrationNote:
    "Regulatory registration details will be published here once confirmed. We do not make any claims about registration status until that point.",

  launchNote: "We are a new service and are happy to answer early enquiries.",

  announcement: "STAG Family Care is a new family run care service.",

  /** Replace with the confirmed towns and areas STAG Family Care will cover. */
  serviceAreas: [] as string[],
  serviceAreasLabel: "Service area will be confirmed before care begins",
  serviceAreaNote:
    "STAG Cleaning Services, the family business already trading, covers the Cotswolds, Cirencester, Swindon and surrounding areas. The care service area will be confirmed separately before launch.",

  founders: [] as { name: string; role: string; bio: string }[],

  sisterCompany: {
    name: "STAG Cleaning Services",
    url: "https://www.stagcleaningservices.co.uk/",
    phone: "07745 967573",
    phoneHref: "tel:+447745967573",
    email: "info@stagcleaningservices.co.uk",
    areas: "The Cotswolds, Cirencester, Swindon and surrounding areas",
  },
} as const;

export const hasPhone = site.phone.trim().length > 0;
export const hasEmail = site.email.trim().length > 0;
export const hasAddress = site.address.trim().length > 0;
export const hasAreas = site.serviceAreas.length > 0;

export type ServiceKey = "personal-care" | "live-in-care" | "companionship" | "supported-living";

export interface ServiceContent {
  key: ServiceKey;
  title: string;
  short: string;
  intro: string;
  suits: string[];
  includes: string[];
  planning: string;
  dignity: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceContent[] = [
  {
    key: "personal-care",
    title: "Personal Care",
    short: "Respectful help with washing, dressing, medication prompts and moving safely at home.",
    intro:
      "Personal care is practical, dignified help with the everyday things that keep life comfortable at home. The aim is always to help someone do as much for themselves as they can, with a familiar carer alongside them.",
    suits: [
      "Someone who finds washing, dressing or grooming harder than it used to be",
      "People coming home after a hospital stay who may need support for a short while",
      "Families sharing care who would like planned, reliable visits",
      "Anyone who would prefer to stay at home rather than move into residential care",
    ],
    includes: [
      "Support with bathing, showering, washing and grooming",
      "Help with dressing and personal presentation",
      "Medication prompts and support, subject to individual assessment",
      "Continence support given discreetly and respectfully",
      "Help with moving safely around the home where appropriate",
      "Light meal preparation and reminders to drink enough",
    ],
    planning:
      "Support begins with a conversation and an assessment at home. We write the plan with the person receiving care and, if they wish, their family. Visit times, tasks and preferences are all agreed before anything starts, and the plan is reviewed as things change.",
    dignity:
      "Personal care should never feel rushed or impersonal. Carers explain what they are doing, offer choices and protect privacy at every step. If someone wants to do part of a task themselves, that is exactly what we encourage.",
    metaTitle: "Personal Care at Home in the UK | STAG Family Care",
    metaDescription:
      "Respectful personal care at home from STAG Family Care. Support with washing, dressing, medication prompts and moving safely, planned around each person.",
  },
  {
    key: "live-in-care",
    title: "Live in Care",
    short: "A carer living in the home, offering reassurance day and night and a familiar routine.",
    intro:
      "Live in care means a carer stays in the home, so help is close at hand through the day and there is reassurance at night. For many families it is a considered alternative to moving into a care home, keeping familiar surroundings, pets and neighbours.",
    suits: [
      "People who would find a move away from home unsettling",
      "Couples who would like to stay together in their own home",
      "Someone living with a long term condition who may need frequent support",
      "Families looking for continuity rather than many different visitors",
    ],
    includes: [
      "Daily personal care and practical help around the house",
      "Company, conversation and support with hobbies and routines",
      "Meal planning, cooking and shopping",
      "Support to attend appointments and social activities",
      "Reassurance overnight, with arrangements agreed in the care plan",
      "Regular reviews and planned cover so the arrangement stays sustainable",
    ],
    planning:
      "Live in care needs careful planning. We talk through routines, the home itself, sleeping arrangements and the level of support needed, then agree everything in writing after an assessment. Cover for breaks and holidays is planned in from the start.",
    dignity:
      "A carer living in the home is a guest in someone else's space. We are clear about boundaries, respect house rules and make sure the person receiving care stays in charge of their own day.",
    metaTitle: "Live in Care at Home | STAG Family Care",
    metaDescription:
      "Live in care from STAG Family Care. A carer in the home offering reassurance day and night, familiar routines and continuity, subject to assessment.",
  },
  {
    key: "companionship",
    title: "Companionship",
    short: "Time, conversation and company, from a weekly cuppa and a chat to trips out and hobbies.",
    intro:
      "Companionship care is about the parts of life that are easy to overlook. Someone to talk to, a lift to the shops, a walk in good weather. It can make a real difference to how connected and confident someone feels at home.",
    suits: [
      "Someone living alone who would value regular company",
      "People who have stopped driving and miss getting out",
      "Families living further away who would like a friendly check in",
      "Anyone rebuilding confidence after a bereavement or illness",
    ],
    includes: [
      "Regular visits for conversation and company",
      "Support with hobbies, reading, games and letters",
      "Walks, shopping trips and appointments with someone alongside",
      "Help staying in touch with family by phone or video call",
      "Light household tasks that keep the home comfortable",
      "A friendly point of contact who notices when something changes",
    ],
    planning:
      "We start by asking what a good week looks like. Visits are then arranged around the things that matter, whether that is a regular morning coffee, a trip to the market or simply company at a quieter time of day.",
    dignity:
      "Companionship works when people genuinely get on, so we think about interests and personality when we suggest a carer, not just who happens to be free.",
    metaTitle: "Companionship Care at Home | STAG Family Care",
    metaDescription:
      "Companionship care from STAG Family Care. Regular visits, conversation, trips out and friendly support that helps people stay connected at home.",
  },
  {
    key: "supported-living",
    title: "Supported Living",
    short: "Flexible support for adults living independently, built around goals and confidence.",
    intro:
      "Supported living helps adults live in their own home with the level of support they choose. The focus is independence: building skills, keeping routines and being part of the local community, with support that can flex as things change.",
    suits: [
      "Adults with a learning disability living in their own tenancy",
      "People with a physical disability who want support on their own terms",
      "Someone moving towards greater independence from family or residential care",
      "Anyone whose support needs may change over time",
    ],
    includes: [
      "Support with daily living skills such as cooking, budgeting and laundry",
      "Help managing appointments, post and household admin",
      "Encouragement with education, volunteering, work and social plans",
      "Getting out and about, and building travel confidence",
      "Goal setting agreed with the people who matter",
      "Working alongside families and professionals, with consent",
    ],
    planning:
      "Plans are written with the person, in their words, and set out what they want to achieve as well as what help they need. Everything is reviewed regularly so support can step back as confidence grows.",
    dignity:
      "Choice sits at the centre of supported living. We support decisions rather than make them, and we are led by what the person wants their week to look like.",
    metaTitle: "Supported Living Services | STAG Family Care",
    metaDescription:
      "Supported living from STAG Family Care. Flexible support that helps adults live independently and build confidence in their own home.",
  },
];

export const steps = [
  {
    title: "Tell us what you need",
    body: "Send a short enquiry. There is no pressure and no obligation.",
  },
  {
    title: "Initial conversation",
    body: "We talk through routines, preferences and what would help most.",
  },
  {
    title: "Personal care plan",
    body: "We write a clear plan together after an assessment.",
  },
  {
    title: "Ongoing support",
    body: "Care begins with a familiar team and regular reviews.",
  },
];

export const homeFaqs = [
  {
    q: "How quickly can support start?",
    a: "It depends on the level of support needed and our availability at the time. After a first conversation and an assessment we will be honest about realistic timescales rather than promise something we cannot deliver.",
  },
  {
    q: "Will the same carers visit each time?",
    a: "Consistency matters to us, so we aim to introduce a small, familiar team rather than a different face every visit. Holidays and sickness happen, and we will tell you in advance whenever we can.",
  },
  {
    q: "How is a care plan agreed?",
    a: "We visit, listen and put together a written plan with the person receiving care and, where they would like, their family. Nothing starts until everyone is happy with it.",
  },
  {
    q: "Are you connected to STAG Cleaning Services?",
    a: "The two businesses share a family and a name, but they are separate. STAG Family Care is its own care business with its own team, and STAG Cleaning Services continues as a cleaning company.",
  },
];

export const faqs = [
  ...homeFaqs,
  {
    q: "Do you offer short term or trial support?",
    a: "Short term arrangements such as support after a hospital stay, or while a family carer takes a break, can often be arranged. This is always subject to assessment and availability.",
  },
  {
    q: "Are you registered with a regulator?",
    a: site.registrationNote,
  },
  {
    q: "Which areas will you cover?",
    a: "The care service area is being confirmed and will be published here before launch. If you are unsure whether we can reach you, please ask.",
  },
];
