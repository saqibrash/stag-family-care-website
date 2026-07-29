/**
 * ============================================================
 * EDITABLE SITE DETAILS — update everything in this file first.
 * Placeholders are marked with [ ] so they are easy to spot.
 * ============================================================
 */

export const site = {
  name: "STAG Family Care",
  strapline: "From our family to yours",
  // TODO: replace with the real business phone number
  phone: "[01234 567 890]",
  phoneHref: "tel:+441234567890",
  // TODO: replace with the real business email
  email: "[hello@stagfamilycare.co.uk]",
  careersEmail: "[careers@stagfamilycare.co.uk]",
  // TODO: replace with the real office address
  address: "[Office address line 1], [Town], [Postcode]",
  openingHours: "[Monday to Friday, 9am – 5pm]",
  outOfHours:
    "[Out-of-hours guidance placeholder — add the number or process families should use outside office hours. In an emergency always call 999.]",
  // TODO: confirm and update registration wording once available
  registrationNote:
    "[Registration placeholder — regulatory registration details will be added here once confirmed. We do not currently make any claims about registration status.]",
  launchNote: "[Launch date placeholder — e.g. accepting enquiries from Spring 2026]",
  announcement:
    "[Editable launch message] STAG Family Care is a new family-led care service — we're now taking enquiries.",
  // TODO: confirm the areas the service will cover
  serviceAreas: [
    "[Primary town]",
    "[Neighbouring town]",
    "[Village / area]",
    "[District]",
    "[County area]",
  ],
  founders: [
    {
      name: "[Founder name]",
      role: "[Role, e.g. Care Director]",
      bio: "[Short biography placeholder — care experience, qualifications and what led them to start STAG Family Care.]",
    },
    {
      name: "[Founder name]",
      role: "[Role, e.g. Operations Director]",
      bio: "[Short biography placeholder — background, family connection and approach to care.]",
    },
  ],
  sisterCompany: {
    name: "STAG Cleaning Services",
    url: "https://www.stagcleaningservices.co.uk/",
  },
} as const;

export type ServiceKey = "personal-care" | "live-in-care" | "companionship" | "supported-living";

export interface ServiceContent {
  key: ServiceKey;
  title: string;
  short: string;
  intro: string;
  suits: string[];
  includes: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceContent[] = [
  {
    key: "personal-care",
    title: "Personal Care",
    short:
      "Respectful help with daily routines — washing, dressing, medication prompts and mobility support.",
    intro:
      "Personal care is practical, dignified support with the everyday things that keep life comfortable at home. Our aim is always to help someone do as much for themselves as they can, with a familiar carer alongside them.",
    suits: [
      "Someone who finds washing, dressing or grooming harder than it used to be",
      "People returning home after a hospital stay who may need short-term support",
      "Families sharing care who would like reliable, planned visits",
      "Anyone who would prefer to stay at home rather than move into residential care",
    ],
    includes: [
      "Support with bathing, showering, washing and grooming",
      "Help with dressing and personal presentation",
      "Medication prompts and support, subject to assessment",
      "Continence support delivered discreetly and respectfully",
      "Mobility assistance and safe transfers where appropriate",
      "Light meal preparation and hydration reminders",
    ],
    metaTitle: "Personal Care at Home | STAG Family Care",
    metaDescription:
      "Respectful personal care at home from STAG Family Care — support with washing, dressing, medication prompts and mobility, planned around each person.",
  },
  {
    key: "live-in-care",
    title: "24/7 Live-in Care",
    short:
      "A carer living in the home, offering round-the-clock reassurance and a familiar daily routine.",
    intro:
      "Live-in care means a carer stays in the home, so support is close at hand throughout the day and reassurance is there at night. It can be a considered alternative to moving into a care home, keeping familiar surroundings, pets and neighbours.",
    suits: [
      "People who would find a move away from home unsettling",
      "Couples who would like to stay together at home",
      "Someone living with a long-term condition who may need frequent support",
      "Families looking for continuity rather than many different visitors",
    ],
    includes: [
      "Day-to-day personal care and practical household help",
      "Company, conversation and support with hobbies and routines",
      "Meal planning, cooking and shopping",
      "Support to attend appointments and social activities",
      "Overnight reassurance, with arrangements agreed in the care plan",
      "Regular reviews and planned cover so the arrangement stays sustainable",
    ],
    metaTitle: "24/7 Live-in Care | STAG Family Care",
    metaDescription:
      "Live-in care from STAG Family Care — a carer in the home offering round-the-clock reassurance, familiar routines and continuity, subject to assessment.",
  },
  {
    key: "companionship",
    title: "Companionship",
    short:
      "Time, conversation and company — from a weekly cuppa and a chat to trips out and hobbies.",
    intro:
      "Companionship care is about the parts of life that are easy to overlook: someone to talk to, a lift to the shops, a walk in good weather. It can make a real difference to how connected and confident someone feels at home.",
    suits: [
      "Someone living alone who would value regular company",
      "People who have stopped driving and miss getting out",
      "Families living further away who would like a friendly check-in",
      "Anyone rebuilding confidence after a bereavement or illness",
    ],
    includes: [
      "Regular visits for conversation and company",
      "Support with hobbies, reading, games and correspondence",
      "Accompanied walks, shopping trips and appointments",
      "Help staying in touch with family by phone or video call",
      "Light household tasks that keep the home comfortable",
      "A friendly point of contact who notices when something changes",
    ],
    metaTitle: "Companionship Care | STAG Family Care",
    metaDescription:
      "Companionship care from STAG Family Care — regular visits, conversation, trips out and friendly support that helps people stay connected at home.",
  },
  {
    key: "supported-living",
    title: "Supported Living",
    short:
      "Flexible support for adults living independently, built around goals, routines and confidence.",
    intro:
      "Supported living helps adults live in their own home with the level of support they choose. The focus is independence: building skills, keeping routines and being part of the local community, with support that can flex as things change.",
    suits: [
      "Adults with a learning disability living in their own tenancy",
      "People with a physical disability who want support on their terms",
      "Someone moving towards greater independence from family or residential care",
      "Anyone whose support needs may change over time",
    ],
    includes: [
      "Support with daily living skills such as cooking, budgeting and laundry",
      "Help managing appointments, correspondence and household admin",
      "Encouragement with education, volunteering, work and social plans",
      "Community access and travel confidence",
      "Person-centred goal setting reviewed with the people who matter",
      "Coordination with families and professionals, with consent",
    ],
    metaTitle: "Supported Living | STAG Family Care",
    metaDescription:
      "Supported living from STAG Family Care — flexible, person-centred support that helps adults live independently and build confidence in their own home.",
  },
];

export const steps = [
  {
    title: "Tell us what you need",
    body: "Send an enquiry or give us a ring. There's no pressure and no obligation — just a chance to explain what's going on.",
  },
  {
    title: "Initial conversation",
    body: "We talk things through properly: routines, preferences, health needs and what would make the biggest difference day to day.",
  },
  {
    title: "Personal care plan",
    body: "Following an assessment, we write a clear plan together and agree who will visit, when and what support may include.",
  },
  {
    title: "Ongoing support",
    body: "Care begins with a familiar team, and we review regularly so the plan keeps pace with how things change.",
  },
];

export const faqs = [
  {
    q: "How quickly can support start?",
    a: "It depends on the level of support needed and our availability at the time. After your first conversation and an assessment, we'll be honest about realistic timescales rather than promising something we can't deliver.",
  },
  {
    q: "Will the same carers visit each time?",
    a: "Consistency matters to us, so we aim to introduce a small, familiar team rather than a different face each visit. Holidays and sickness happen, and we'll always tell you in advance when we can.",
  },
  {
    q: "Do you offer short-term or trial support?",
    a: "Yes — short-term arrangements such as support after a hospital stay or while a family carer takes a break can often be arranged, subject to assessment and availability.",
  },
  {
    q: "How is a care plan agreed?",
    a: "We visit, listen, and put together a written plan with the person receiving care and, where they'd like, their family. Nothing starts until everyone is happy with it.",
  },
  {
    q: "Are you registered with a regulator?",
    a: site.registrationNote,
  },
  {
    q: "Are you connected to STAG Cleaning Services?",
    a: "The two businesses share a family and a name, but they are separate. STAG Family Care is a distinct care business with its own team, and STAG Cleaning Services continues to operate as a cleaning company.",
  },
];
