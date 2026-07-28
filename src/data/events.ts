export type EventCategory =
  | "Live Recording"
  | "Tha Fix On Location"
  | "Member Meetup"
  | "Community Appearance"
  | "Special Event";

export type EventAccess = "Public" | "Members Only" | "Invitation Only";

export type Event = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string; // ISO
  displayDate: string;
  displayDay: string; // e.g., "OCT 17"
  time: string; // e.g., "6:00–8:30 p.m. EST"
  category: EventCategory;
  venue: string;
  city: string;
  state: string;
  capacity: string;
  access: EventAccess;
  price: number; // 0 = Free
  status: "Confirmed" | "Tentative";
  liveAudience?: boolean;
  description: string;
  program?: string[];
  accessRules?: string[];
  cta: string;
};

export const events: Event[] = [
  {
    slug: "tha-fix-premiere-night",
    shortTitle: "Tha Fix Premiere Night",
    title: "Tha Fix Premiere Night: We Lived It. Now We Talk It.",
    date: "2026-10-17",
    displayDate: "Saturday, October 17, 2026",
    displayDay: "OCT 17",
    time: "6:00–8:30 p.m. EST",
    category: "Special Event",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "50–75 people",
    access: "Public",
    price: 0,
    status: "Tentative",
    liveAudience: true,
    description:
      "Join Marcus Davis and Jon Mic for the official launch celebration of Tha Fix Media Network. Experience a special episode screening, hear the story behind Tha Fix, meet the hosts, and participate in a live conversation about where the platform is going next.",
    program: [
      "Guest arrival and networking",
      "Welcome from Marcus and Jon Mic",
      "Short \u201CThe Story Behind Tha Fix\u201D conversation",
      "Screening of a featured episode or selected clips",
      "Live audience discussion",
      "Membership and community introduction",
      "Sponsor and partner recognition",
      "Photos, interviews, and social-media content",
    ],
    cta: "Reserve Your Free Seat",
  },
  {
    slug: "louisville-we-need-to-talk",
    shortTitle: "Louisville, We Need to Talk",
    title: "Louisville, We Need to Talk: Violence, Responsibility and Real Solutions",
    date: "2026-11-07",
    displayDate: "Saturday, November 7, 2026",
    displayDay: "NOV 07",
    time: "2:00–4:00 p.m. EST",
    category: "Community Appearance",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–35 people",
    access: "Public",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix joins Louisville residents, community leaders, parents, mentors, and advocates for an honest conversation about violence, accountability, prevention, and what adults must do differently to protect the next generation.",
    cta: "Join the Conversation",
  },
  {
    slug: "who-failed-louisvilles-youth",
    shortTitle: "Who Failed Louisville’s Youth?",
    title: "Live Recording: Who Failed Louisville’s Youth?",
    date: "2026-11-21",
    displayDate: "Saturday, November 21, 2026",
    displayDay: "NOV 21",
    time: "6:00–8:00 p.m. EST",
    category: "Live Recording",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–30 people",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    liveAudience: true,
    description:
      "Be in the room as Jon Mic and Marcus Davis examine the forces shaping youth violence in Louisville. The conversation will explore parenting, schools, the justice system, neighborhood influence, economic opportunity, personal accountability, and competing ideas about what should happen next.",
    cta: "Apply to Join the Audience",
  },
  {
    slug: "street-meets-strategy",
    shortTitle: "Street Meets Strategy",
    title: "Tha Fix On Location: Street Meets Strategy",
    date: "2026-12-05",
    displayDate: "Saturday, December 5, 2026",
    displayDay: "DEC 05",
    time: "1:00–3:00 p.m. EST",
    category: "Tha Fix On Location",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "25–50 people",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix pulls up at a Louisville business for a live conversation about turning talent, experience, influence, and hustle into legitimate business ownership and long-term opportunity. Recorded live-to-tape.",
    cta: "Pull Up With Tha Fix",
  },
  {
    slug: "tha-fix-family-meetup",
    shortTitle: "Tha Fix Family Meetup",
    title: "Tha Fix Family Meetup: Connect Before the New Year",
    date: "2026-12-19",
    displayDate: "Saturday, December 19, 2026",
    displayDay: "DEC 19",
    time: "5:00–7:00 p.m. EST",
    category: "Member Meetup",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "25–40 members",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix members are invited to meet Marcus, Jon Mic, and one another during an informal evening of conversation, connection, and reflection. We’ll discuss what Tha Fix accomplished in 2026, what members want next, and how the community can grow together in 2027.",
    accessRules: [
      "All active membership levels may RSVP.",
      "Founders receive early RSVP access.",
      "Capacity remains limited.",
      "Membership does not guarantee admission after capacity is reached.",
    ],
    cta: "Member RSVP",
  },
  {
    slug: "from-prison-to-purpose",
    shortTitle: "From Prison to Purpose",
    title: "Live Recording: From Prison to Purpose",
    date: "2027-01-16",
    displayDate: "Saturday, January 16, 2027",
    displayDay: "JAN 16",
    time: "6:00–8:00 p.m. EST",
    category: "Live Recording",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–30 people",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    liveAudience: true,
    description:
      "Marcus Davis and Jon Mic share more of the story behind Tha Fix and sit down with guests who have rebuilt their lives after incarceration, addiction, violence, loss, or other life-changing consequences.",
    cta: "Apply to Join the Audience",
  },
  {
    slug: "second-chances-in-louisville",
    shortTitle: "Second Chances in Louisville",
    title: "Second Chances in Louisville: What Happens After the Sentence?",
    date: "2027-02-06",
    displayDate: "Saturday, February 6, 2027",
    displayDay: "FEB 06",
    time: "2:00–4:00 p.m. EST",
    category: "Community Appearance",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–30 people",
    access: "Public",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix joins a Louisville community partner for a conversation about reentry, employment, housing, family reunification, mentorship, and the barriers people face after incarceration.",
    cta: "Attend the Community Conversation",
  },
  {
    slug: "love-loyalty-relationships",
    shortTitle: "Love, Loyalty & Relationships",
    title: "Tha Fix On Location: Love, Loyalty & Relationships",
    date: "2027-02-20",
    displayDate: "Saturday, February 20, 2027",
    displayDay: "FEB 20",
    time: "6:00–8:00 p.m. EST",
    category: "Tha Fix On Location",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–30 people",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix takes the conversation on location for an unfiltered discussion about love, loyalty, trust, expectations, dating, marriage, communication, and how relationships have changed across generations. Recorded live-to-tape.",
    cta: "Join the Live Conversation",
  },
  {
    slug: "politics-power-and-the-people",
    shortTitle: "Politics, Power & the People",
    title: "Live Recording: Politics, Power & the People",
    date: "2027-03-20",
    displayDate: "Saturday, March 20, 2027",
    displayDay: "MAR 20",
    time: "6:00–8:00 p.m. EST",
    category: "Live Recording",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "20–30 people",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    liveAudience: true,
    description:
      "Who really has power in Louisville—and how should residents use theirs? Marcus Davis, Jon Mic, local voices, and a live audience examine political influence, public accountability, neighborhood leadership, voting, media, and the gap between campaign promises and community results.",
    cta: "Apply to Join the Audience",
  },
  {
    slug: "the-network-connection",
    shortTitle: "The Network Connection",
    title: "The Network Connection: Creators, Entrepreneurs and Community Builders",
    date: "2027-04-10",
    displayDate: "Saturday, April 10, 2027",
    displayDay: "APR 10",
    time: "4:00–7:00 p.m. EST",
    category: "Member Meetup",
    venue: "TBD",
    city: "Louisville",
    state: "KY",
    capacity: "35–60 members",
    access: "Members Only",
    price: 0,
    status: "Tentative",
    description:
      "Tha Fix members come together to build relationships, introduce their businesses and projects, exchange resources, and discover opportunities to collaborate.",
    cta: "Member RSVP",
  },
];

export const eventCategories: EventCategory[] = [
  "Live Recording",
  "Tha Fix On Location",
  "Member Meetup",
  "Community Appearance",
  "Special Event",
];