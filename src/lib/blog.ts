import { photos, type Photo } from "@/lib/images";

/**
 * Blog content. Paragraph text supports simple links written as [text](/path).
 * External links (https://) open in a new tab.
 */
export type Block = { h2: string } | { h3: string } | { p: string } | { ul: string[] };

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  category: string;
  published: string;
  updated: string;
  author: string;
  photo: Photo;
  body: Block[];
}

const author = "The STAG Family Care team";

export const categories = [
  "Care Advice",
  "Independent Living",
  "Family Support",
  "Companionship",
  "Personal Care",
  "Supported Living",
  "Care Planning",
] as const;

export const posts: Post[] = [
  {
    slug: "what-is-person-centred-care",
    title: "What Is Person Centred Care and Why Does It Matter?",
    metaTitle: "What Is Person Centred Care? A Plain English Guide",
    metaDescription:
      "A clear guide to person centred care: what it means, how individual care plans work, and why choice, dignity and independence matter at home.",
    summary:
      "Person centred care is a phrase you will hear often. Here is what it actually means for someone receiving support, and how to tell if it is really happening.",
    category: "Care Planning",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.personCentredCare,
    body: [
      { p: "If you have started looking into care, you have probably seen the phrase person centred care on almost every provider's website. It can start to sound like a slogan. In fact it describes a very practical way of working, and it is worth understanding so you know what to expect and what to ask." },
      { h2: "Person centred care in simple terms" },
      { p: "Person centred care means the support is built around the individual rather than around a standard routine or a list of tasks. The person receiving care is treated as the expert on their own life. Their wishes, habits, history and goals shape what happens, when it happens and how." },
      { p: "Compare two morning visits. In one, the carer arrives, works through washing, dressing and breakfast in the same order as every other visit that day, and leaves. In the other, the carer knows that this person likes a cup of tea before anything else, prefers a wash at the sink to a shower on weekdays, and always chooses their own clothes. The tasks are similar. The experience is completely different." },
      { p: "The NHS describes personalised care as giving people choice and control over the way their care is planned and delivered, based on what matters to them. The Care Quality Commission also looks at whether care is person centred when it inspects registered services. It is a recognised standard, not just a nice phrase." },
      { h2: "What a person centred care plan looks like" },
      { p: "A care plan is the written agreement that sets out what support someone receives. In a person centred plan you would expect to see far more than tasks and times. It should also record:" },
      { ul: [
        "How the person likes to be addressed",
        "Their daily routine and the times that matter to them",
        "What they can do for themselves and want to keep doing",
        "Likes, dislikes, food preferences and interests",
        "Important people in their life and how involved they should be",
        "What they hope to achieve, such as getting out more or staying at home safely",
      ] },
      { p: "The plan should be written with the person, ideally in their own words, and with family involved only if the person agrees. It should be reviewed regularly, and whenever something changes, rather than filed away after the first week." },
      { h2: "Why independence sits at the centre" },
      { p: "One of the most important parts of person centred care is protecting independence. It can be quicker for a carer to do everything, but that can slowly take away skills and confidence. A person centred approach asks which parts of a task have become difficult, helps with those, and encourages the person to carry on with the rest." },
      { p: "That might mean laying out clothes so someone can dress themselves, or preparing ingredients so they can still make their own lunch. Small choices like these add up to a sense of control over daily life." },
      { h2: "Dignity and personal choice" },
      { p: "Dignity runs through every part of good care. In practice it means knocking before entering a room, explaining what is happening, offering choices and protecting privacy during personal tasks. It also means respecting decisions, even when they are not the ones a carer or relative would make, as long as the person has the capacity to make them." },
      { p: "Personal choice covers big and small things: what time to get up, what to eat, whether to go out today. When people feel listened to about the small things, they are more likely to trust their carers with the bigger ones." },
      { h2: "How to tell if care is truly person centred" },
      { p: "When you speak to a care provider, a few questions can help you judge whether their approach is genuinely person centred:" },
      { ul: [
        "Who writes the care plan, and will the person receiving care be involved?",
        "How do you find out about someone's routine and preferences?",
        "How often are plans reviewed, and can we ask for a review?",
        "Will the same small group of carers visit?",
        "What happens if the person wants to change something?",
      ] },
      { p: "Good answers will be specific. Be cautious of replies that only talk about tasks, timings and rotas without mentioning the person at all. Our guide on [what to look for when choosing a care provider](/blog/what-to-look-for-when-choosing-a-care-provider) covers more questions worth asking." },
      { h2: "Person centred care across different services" },
      { p: "Person centred care is not a separate service so much as a way of delivering every service. It applies just as much to [personal care](/services/personal-care) as it does to [companionship](/services/companionship) or [supported living](/services/supported-living). Whatever the level of support, the starting point is the same: what matters to this person?" },
      { h2: "How we approach it at STAG Family Care" },
      { p: "Every arrangement with us starts with a conversation and an assessment at home. We write the plan together, agree visit times and preferences before anything begins, and review it as things change. You can read more about our [person centred care service](/services/person-centred-care)." },
      { p: "If you would like to talk through what person centred support could look like for you or a relative, [get in touch with our team](/contact). There is no cost and no obligation." },
    ],
  },
  {
    slug: "how-companionship-care-can-support-independence",
    title: "How Companionship Care Can Support Independence at Home",
    metaTitle: "Companionship Care: Supporting Independence at Home",
    metaDescription:
      "How companionship care helps people stay connected and independent at home, with practical everyday benefits for routines, outings and confidence.",
    summary:
      "Companionship care is about more than a chat. It can help people keep routines, get out and about, and feel confident living independently.",
    category: "Companionship",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.companionship,
    body: [
      { p: "When people think about care at home, they often picture help with washing, dressing or medication. But many people who live alone do not need that kind of support yet. What they miss is company, conversation and a reason to get out of the house. That is where companionship care comes in." },
      { h2: "What is companionship care?" },
      { p: "Companionship care is non medical support that focuses on social contact and everyday life. A companion visits regularly, spends time with the person and helps with the things that make a week feel full. That might be a walk, a trip to the shops, help writing a letter or simply a cup of tea and a catch up." },
      { p: "It suits people who are largely independent but who would benefit from regular contact, encouragement and a helping hand with getting about." },
      { h2: "Why loneliness matters" },
      { p: "Loneliness is not just about being alone. Many people live alone happily. It is the feeling of not having the contact you want. The NHS recognises that loneliness can affect wellbeing and suggests staying connected with others as one of the ways to look after your mental health." },
      { p: "Life changes such as bereavement, retirement, giving up driving or family moving away can all reduce contact. Even confident, active people can find their world gradually getting smaller. A regular companion can help reverse that." },
      { h2: "Everyday benefits of companionship care" },
      { h3: "Keeping a routine" },
      { p: "Regular visits give the week a shape. Knowing someone is coming on Tuesday morning can be a reason to get dressed, plan a trip or tidy up. Routines like this help many people feel more settled." },
      { h3: "Getting out and about" },
      { p: "For someone who no longer drives or feels less steady on their feet, a companion can make outings possible again. A visit to the market, a café, the library or a local garden can make a real difference to how someone feels." },
      { h3: "Hobbies and interests" },
      { p: "A companion can share hobbies such as gardening, crosswords, baking, music or old films. Some people enjoy help with photographs, family history or staying in touch with relatives through video calls." },
      { h3: "Help around the home" },
      { p: "Companionship visits often include light household tasks: changing the bed, putting a wash on, or preparing a simple meal together. Doing these alongside someone, rather than for them, helps keep skills and confidence." },
      { h3: "Someone who notices" },
      { p: "Because a companion sees someone regularly, they are well placed to notice small changes, such as missed meals or a loss of interest in usual activities. With the person's permission, these observations can be shared with family." },
      { h2: "How companionship supports independence" },
      { p: "It might seem surprising that having someone visit can make a person more independent, but it often does. Companionship builds confidence. Someone who has been nervous about going out alone may, after a few accompanied trips, start doing some on their own. Someone who has stopped cooking may enjoy it again with a little encouragement." },
      { p: "Good companionship care always aims to support, not replace, what a person can do. The companion follows the person's lead and respects their choices about how to spend their time." },
      { h2: "Who might benefit?" },
      { ul: [
        "People living alone who would value regular company",
        "Those who have stopped driving and miss getting out",
        "Anyone rebuilding confidence after an illness or bereavement",
        "Families living at a distance who want reassurance that a parent has regular contact",
        "Family carers who would like someone to spend time with their relative while they take a break",
      ] },
      { h2: "Combining companionship with other support" },
      { p: "Companionship can stand on its own or sit alongside other services. Many people start with companionship and add [personal care at home](/services/personal-care) later if their needs change. Because the plan is [person centred](/blog/what-is-person-centred-care), it can grow with the person." },
      { h2: "Starting companionship care" },
      { p: "If you are thinking about companionship for yourself or a relative, a good first step is to talk about what a good week looks like. Which days feel long? What would they like to do more of? Our article on [starting a conversation about care](/blog/how-to-start-a-conversation-about-care) has practical tips if a relative is unsure." },
      { p: "You can read more about our [companionship care service](/services/companionship), or [speak to our team](/contact) to talk it through with no obligation." },
    ],
  },
  {
    slug: "when-might-personal-care-at-home-be-helpful",
    title: "When Might Personal Care at Home Be Helpful?",
    metaTitle: "When Might Personal Care at Home Be Helpful?",
    metaDescription:
      "Signs that personal care at home could help, from washing and dressing support to recovery after hospital, and how to keep dignity and independence.",
    summary:
      "It is not always obvious when extra help would make life easier. These gentle signs may suggest that personal care at home is worth considering.",
    category: "Personal Care",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.personalCare,
    body: [
      { p: "Deciding to accept help with personal tasks is a big step. Washing, dressing and using the bathroom are among the most private parts of life, and many people understandably want to manage on their own for as long as possible. Knowing the signs that support might help can make the decision feel less sudden." },
      { h2: "What is personal care?" },
      { p: "Personal care is practical support with the everyday tasks that keep someone clean, comfortable and well presented. It commonly includes help with:" },
      { ul: [
        "Washing, bathing or showering",
        "Dressing and undressing",
        "Grooming, such as shaving, hair care and applying creams",
        "Using the toilet and continence care",
        "Moving safely around the home",
        "Medication prompts, where agreed after assessment",
      ] },
      { p: "Good personal care is about helping with the parts that have become difficult while encouraging the person to do everything else themselves." },
      { h2: "Signs that personal care may help" },
      { p: "Every situation is different, and none of the signs below automatically mean care is needed. But if several sound familiar, it may be time to talk about it." },
      { h3: "Changes in personal appearance" },
      { p: "Someone who has always taken pride in how they look may start wearing the same clothes for several days, or skipping shaving or hair washing. This is often because the task has become tiring or uncomfortable, not because they no longer care." },
      { h3: "Worries about the bath or shower" },
      { p: "Getting in and out of a bath can become hard with reduced strength or balance. People sometimes avoid washing properly because they are anxious about slipping. Equipment and a little support can make bathing safe and pleasant again." },
      { h3: "Struggling after a hospital stay" },
      { p: "Coming home after an illness, fall or operation can be harder than expected. Short term personal care can bridge the gap while strength returns. The NHS can sometimes arrange support after discharge, and private support can work alongside this." },
      { h3: "A family carer under pressure" },
      { p: "Often a partner or adult child gradually takes on personal tasks. That can work well for a time, but it can also become exhausting and change the relationship. Bringing in a carer for some visits can give everyone a better balance." },
      { h3: "Missed medication or meals" },
      { p: "Forgetting tablets or not eating properly can be an early sign that someone needs more structure in their day. Regular visits with prompts can help." },
      { h2: "Keeping dignity at the centre" },
      { p: "The biggest worry people have about personal care is loss of dignity. A good carer will always explain what they are doing, ask before helping, offer choices and protect privacy, for example by covering someone with a towel during a wash. Visits should never feel rushed." },
      { p: "It is also reasonable to have preferences about who provides personal care, such as a carer of the same gender. These should be discussed openly and recorded in the care plan." },
      { h2: "Protecting independence" },
      { p: "Accepting help with one task does not mean giving up on others. In fact, support with something tiring, such as a shower, can leave someone with more energy for the rest of their day. The aim is to keep people doing as much as they can for themselves, safely." },
      { h2: "How to start the conversation" },
      { p: "If you are worried about a relative, try to talk openly and gently, and focus on what would make life easier rather than what they can no longer do. Our guide on [how to start a conversation about care](/blog/how-to-start-a-conversation-about-care) has practical suggestions." },
      { h2: "Getting an assessment" },
      { p: "Anyone who appears to need care and support can ask their local council for a free needs assessment. GOV.UK has information on how to apply. You can also speak directly to a private care provider who will carry out their own assessment before agreeing a plan." },
      { p: "At STAG Family Care, [personal care](/services/personal-care) is always planned with the person, reviewed regularly and delivered in a [person centred](/services/person-centred-care) way. If you would like to discuss whether it could help, [contact our team](/contact) for a no obligation chat." },
    ],
  },
  {
    slug: "what-is-supported-living",
    title: "What Is Supported Living?",
    metaTitle: "What Is Supported Living? Who It Suits and How It Works",
    metaDescription:
      "A clear explanation of supported living: how it differs from residential care, who it may suit, and how choice and control shape daily support.",
    summary:
      "Supported living helps adults live in their own home with the support they choose. Here is how it works and who it may suit.",
    category: "Supported Living",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.supportedLiving,
    body: [
      { p: "Supported living is one of the most flexible ways to arrange care, but it is also one of the least understood. Families often hear the term from social workers or schools and are not sure how it differs from other options. This guide explains the basics in plain English." },
      { h2: "Supported living explained" },
      { p: "Supported living means an adult lives in their own home, often with their own tenancy, and receives support to live as independently as possible. The home might be a flat, a house or a shared property with other people. The key point is that the housing and the support are separate. The person is a tenant or homeowner, not a resident of a care home." },
      { p: "Support is built around what the person wants to achieve. It can range from a few hours a week to support around the clock, and it can change over time." },
      { h2: "How it differs from residential care" },
      { p: "In residential care, accommodation and care come together as one package, and daily routines are often shaped by the home. In supported living, the person has more say over their home, who they live with, how they spend their day and who supports them. If they want to change their support provider, they can usually do so without having to move house." },
      { h2: "Who might supported living suit?" },
      { p: "Supported living is used by adults with a wide range of needs, including:" },
      { ul: [
        "People with a learning disability",
        "Autistic adults",
        "People with a physical disability",
        "People living with mental health conditions",
        "Young adults moving on from the family home or from a college placement",
      ] },
      { p: "It suits people who want more independence and control, with the reassurance of support when they need it." },
      { h2: "What does daily support look like?" },
      { p: "Support is different for everyone. It might include help with:" },
      { ul: [
        "Cooking, shopping and planning meals",
        "Budgeting, paying bills and managing post",
        "Keeping the home clean and organised",
        "Attending appointments and managing health",
        "Using public transport and building travel confidence",
        "College, volunteering, work or social activities",
        "Personal care, where needed",
      ] },
      { p: "Good support workers encourage people to learn and practise skills rather than doing things for them. Over time, many people need less help with tasks they once found difficult." },
      { h2: "Choice and control" },
      { p: "Choice and control are the foundation of supported living. The person decides how they want to live and the support helps make that happen. That includes everyday decisions, such as what to eat or when to go out, as well as bigger ones like where to live or what job to look for." },
      { p: "Where someone needs help to make certain decisions, the Mental Capacity Act 2005 sets out how this should be done in a way that respects their rights and wishes. Families, advocates and professionals may all be involved." },
      { h2: "Being part of the community" },
      { p: "Supported living is not only about life inside the home. It is also about being part of the local community: knowing neighbours, using local shops and services, joining clubs and building friendships. Support often focuses as much on these connections as on practical tasks." },
      { h2: "How is supported living funded?" },
      { p: "Housing costs are usually paid through rent, which may be covered in part by housing benefit. Support costs may be funded by the local council after a needs assessment, through a personal budget or direct payment, or privately. Funding arrangements vary, so it is worth speaking to your local council or a social worker for advice specific to your situation." },
      { h2: "Questions to ask a supported living provider" },
      { ul: [
        "How will you get to know the person and what they want from life?",
        "How are support plans written and reviewed?",
        "How do you encourage independence and new skills?",
        "Will the person have a consistent team?",
        "How do you work with families and other professionals?",
      ] },
      { p: "For a broader checklist, see [what to look for when choosing a care provider](/blog/what-to-look-for-when-choosing-a-care-provider)." },
      { h2: "Supported living with STAG Family Care" },
      { p: "Our [supported living service](/services/supported-living) is built on a [person centred](/blog/what-is-person-centred-care) approach, with plans written alongside the person and reviewed as confidence grows. If you would like to talk about whether it could be right for you or someone you support, [contact STAG Family Care](/contact)." },
    ],
  },
  {
    slug: "how-to-start-a-conversation-about-care",
    title: "How to Start a Conversation About Care With a Family Member",
    metaTitle: "How to Talk to a Family Member About Care at Home",
    metaDescription:
      "Practical, gentle tips for talking to a parent or relative about care and support at home, including timing, what to say and how to plan together.",
    summary:
      "Raising the subject of care with someone you love can feel daunting. These practical tips can help the conversation go more smoothly.",
    category: "Family Support",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.conversation,
    body: [
      { p: "Many families put off talking about care because they are worried about upsetting someone, or because they are not sure where to start. It is completely normal to feel uneasy. With a little preparation, though, the conversation can be calmer and more positive than you expect." },
      { h2: "Start early if you can" },
      { p: "The best time to talk about care is before it is urgently needed. A relaxed conversation about what someone would want in the future is much easier than a rushed decision after a fall or a hospital stay. If a crisis has already happened, it is still worth taking time to involve the person as fully as possible." },
      { h2: "Prepare before you talk" },
      { p: "Think about what you have noticed and why you are concerned. Be specific: perhaps the fridge is often empty, or they have mentioned struggling with the stairs. It can also help to read a little about the options, such as [companionship care](/services/companionship) or [personal care at home](/services/personal-care), so you can answer questions." },
      { p: "If other relatives are involved, try to agree a shared approach beforehand. Several people raising concerns at once can feel overwhelming." },
      { h2: "Choose the right moment" },
      { p: "Pick a quiet, comfortable time when nobody is rushed or tired. Avoid busy family occasions or moments of stress. A cup of tea at the kitchen table often works better than a formal meeting." },
      { h2: "Listen more than you speak" },
      { p: "Open questions can help someone share how they feel. You might try:" },
      { ul: [
        "\"How are you finding things at the moment?\"",
        "\"Is there anything that has become harder lately?\"",
        "\"What would make day to day life easier?\"",
        "\"If you needed a bit of help, what would you want it to look like?\"",
      ] },
      { p: "Let them answer in their own time. You may learn about worries you had not considered, or find they have already been thinking about it." },
      { h2: "Focus on independence, not loss" },
      { p: "People often resist care because they fear losing control. Framing support as a way to stay independent and remain at home can make a big difference. For example, help with a shower a few times a week might mean more energy for the things they enjoy." },
      { p: "Good care is [person centred](/blog/what-is-person-centred-care), which means the person stays in charge of decisions about their own life. Reassure them that they would be involved in choosing what support looks like." },
      { h2: "Expect more than one conversation" },
      { p: "It is rare for everything to be decided in one sitting. Your relative may need time to think. Leave the door open and come back to it in a few days. Small steps, such as agreeing to a single visit or an assessment, can be a good start." },
      { h2: "Respect their right to decide" },
      { p: "Adults who have the mental capacity to make a decision have the right to make it, even if others disagree. It can be hard to accept, but pushing too hard can damage trust. If you are worried someone may lack capacity to make a particular decision, the Mental Capacity Act 2005 sets out how decisions should be made in their best interests. GOV.UK and the NHS both have guidance on this." },
      { h2: "Think about your own wellbeing" },
      { p: "If you are already providing care, it is worth being honest about how you are coping. Family carers can ask their local council for a carer's assessment. Accepting outside help can protect your health and allow you to enjoy time with your relative as family, not just as a carer." },
      { h2: "Practical next steps" },
      { ul: [
        "Write down what support might help and what your relative wants to keep doing themselves",
        "Ask the local council about a needs assessment",
        "Speak to one or two providers and ask how they plan care",
        "Invite your relative to be part of any conversations with providers",
      ] },
      { p: "Our guide to [choosing a care provider](/blog/what-to-look-for-when-choosing-a-care-provider) has a list of useful questions." },
      { h2: "We are happy to help" },
      { p: "Sometimes it helps to talk things through with someone outside the family. If you would like an informal chat about the options, [speak to our team](/contact). We will listen and answer questions honestly, with no pressure." },
    ],
  },
  {
    slug: "what-to-look-for-when-choosing-a-care-provider",
    title: "What Should You Look for When Choosing a Care Provider?",
    metaTitle: "Choosing a Care Provider: What to Look For",
    metaDescription:
      "A practical checklist for choosing a home care provider in England, covering registration checks, care planning, communication, consistency and dignity.",
    summary:
      "Choosing who will care for you or a relative is a big decision. This checklist covers the questions worth asking and the checks worth making.",
    category: "Care Advice",
    published: "2026-10-06",
    updated: "2026-10-06",
    author,
    photo: photos.livingRoom,
    body: [
      { p: "When you start looking for care at home, it can be hard to compare providers. Websites often sound similar and everyone promises good care. This guide sets out what to check, what to ask and what to look out for, so you can make a confident choice." },
      { h2: "Check registration and inspection reports" },
      { p: "In England, organisations that provide regulated activities such as personal care must be registered with the Care Quality Commission (CQC). You can search for a provider on the CQC website to see whether they are registered and read any inspection reports and ratings." },
      { p: "Newer services may not have been inspected yet, so they will not have a rating. That is not necessarily a concern, but it is reasonable to ask a provider directly about their registration status and what stage they are at. A trustworthy provider will be open about this." },
      { p: "If you live in Scotland, Wales or Northern Ireland, care is regulated by different bodies, so check the relevant regulator." },
      { h2: "Ask how care plans are created" },
      { p: "A good provider will want to meet the person, carry out an assessment and write a care plan with them. Ask:" },
      { ul: [
        "Who carries out the assessment?",
        "Will the person receiving care be involved in writing the plan?",
        "How are preferences, routines and goals recorded?",
        "How often is the plan reviewed?",
      ] },
      { p: "Look for an approach that is genuinely [person centred](/blog/what-is-person-centred-care), focused on the individual rather than a standard set of tasks." },
      { h2: "Consistency of carers" },
      { p: "Seeing a familiar face makes a big difference, especially for personal care. Ask how many different carers are likely to visit, how new carers are introduced and what happens during holidays or sickness. A provider that aims for a small, consistent team is often a good sign." },
      { h2: "Communication" },
      { p: "Clear, honest communication is one of the most important things to look for. Ask:" },
      { ul: [
        "Who will be our main point of contact?",
        "How will we be told if a carer is running late or a visit changes?",
        "How are concerns or complaints handled?",
        "How do you share updates with family, with permission?",
      ] },
      { p: "Pay attention to how the provider communicates during your first contact. Are they responsive, clear and patient with your questions?" },
      { h2: "Dignity and respect" },
      { p: "Ask how carers protect privacy and dignity, particularly during personal care. Do they explain what they are doing and offer choices? Can you request a carer of a particular gender? Do they encourage people to do as much as they can for themselves?" },
      { h2: "Training and recruitment" },
      { p: "It is reasonable to ask how carers are recruited and trained. Care workers in England are expected to complete induction training, and many providers use the Care Certificate, developed with Skills for Care. Ask whether staff have Disclosure and Barring Service (DBS) checks and how they are supervised." },
      { h2: "Visit times and flexibility" },
      { p: "Make sure visit times can fit around the person's routine. Ask about minimum visit lengths, how much notice is needed for changes, and whether support can increase or reduce if needs change." },
      { h2: "Costs and contracts" },
      { p: "Ask for clear information about costs, what is included and how invoices work. Check the notice period and what happens if you want to pause or end the service. Everything should be agreed in writing before care begins." },
      { h2: "Trust your instincts" },
      { p: "Alongside the practical checks, notice how you feel after speaking to a provider. Did they listen? Did they ask about the person, or only about tasks and times? Did they make promises that seemed too good to be true? Honest answers, including about what they cannot offer, are a good sign." },
      { h2: "A quick checklist" },
      { ul: [
        "Registration status confirmed and inspection reports checked where available",
        "Assessment and care plan written with the person",
        "Small, consistent team of carers",
        "Clear point of contact and communication",
        "Approach that protects dignity and independence",
        "Clear costs and written agreement",
      ] },
      { h2: "Talking to STAG Family Care" },
      { p: "We are a new, family run service and we are happy to answer any of these questions openly, including about our registration status. You can read about [why families take a closer look at us](/why-choose-us), see our [care services](/services), or [contact STAG Family Care](/contact) for a no obligation conversation." },
    ],
  },
];

export function readingTime(post: Post) {
  const words = post.body
    .map((b) => ("p" in b ? b.p : "ul" in b ? b.ul.join(" ") : "h2" in b ? b.h2 : b.h3))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
