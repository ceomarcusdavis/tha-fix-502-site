import ep1 from "@/assets/ep-1.jpg";
import ep2 from "@/assets/ep-2.jpg";
import ep3 from "@/assets/ep-3.jpg";
import ep4 from "@/assets/ep-4.jpg";
import ep5 from "@/assets/ep-5.jpg";
import ep6 from "@/assets/ep-6.jpg";
import guest1 from "@/assets/guest-1.jpg";
import guest2 from "@/assets/guest-2.jpg";
import guest3 from "@/assets/guest-3.jpg";
import guest4 from "@/assets/guest-4.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchTee from "@/assets/merch-tee.jpg";
import merchCap from "@/assets/merch-cap.jpg";
import merchMug from "@/assets/merch-mug.jpg";

export type Episode = {
  slug: string;
  number: number;
  season: number;
  title: string;
  guest: string;
  host: string;
  duration: string;
  category: string;
  releasedAt: string;
  views: string;
  image: string;
  description: string;
  youtubeId: string;
  kind: "full" | "quick";
};

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const episodes: Episode[] = [
  {
    slug: "arrest-the-parents-p-newzs-on-youth-crime",
    number: 8, season: 0,
    title: "Arrest the Parents? P Newzs on Youth Crime | Full Tha Fix Interview",
    guest: "P Newzs",
    host: "Marcus Davis",
    duration: "15:09",
    category: "Politics",
    releasedAt: "Jul 26, 2026",
    views: "New",
    image: yt("JZmmMSrHT7s"),
    youtubeId: "JZmmMSrHT7s",
    kind: "full",
    description: "P Newzs sits down with Tha Fix for a full-length conversation on youth crime, parental accountability, and what real intervention looks like.",
  },
  {
    slug: "putting-you-in-the-barn-chess-and-game-changers",
    number: 7, season: 0,
    title: "What Does \u201CPutting You in the Barn\u201D Mean? | Chess & Game Changers",
    guest: "Tha Fix",
    host: "Jon Mic",
    duration: "5:15",
    category: "Faith",
    releasedAt: "Jul 26, 2026",
    views: "New",
    image: yt("UIRKaZMdIwY"),
    youtubeId: "UIRKaZMdIwY",
    kind: "full",
    description: "Chess, strategy, and the game changers who move different. The hosts break down what it really means to put someone \u201Cin the barn.\u201D",
  },
  {
    slug: "dead-or-alive-top-5-artists-with-sug",
    number: 6, season: 0,
    title: "Dead or Alive: Who Makes Our Top 5 Artists? | Tha Fix with Sug",
    guest: "Sug",
    host: "Marcus Davis",
    duration: "10:28",
    category: "Culture",
    releasedAt: "Jul 26, 2026",
    views: "New",
    image: yt("gzkb6LzYUQg"),
    youtubeId: "gzkb6LzYUQg",
    kind: "full",
    description: "Sug joins Tha Fix to run down top 5 artists — dead or alive — and defend every pick.",
  },
  {
    slug: "why-do-so-many-people-go-back-to-prison",
    number: 5, season: 0,
    title: "Why Do So Many People Go Back to Prison? | Tha Fix Show Preview",
    guest: "Tha Fix",
    host: "Jon Mic",
    duration: "14:59",
    category: "Community",
    releasedAt: "Jul 26, 2026",
    views: "1",
    image: yt("I8kBTdfrs5g"),
    youtubeId: "I8kBTdfrs5g",
    kind: "full",
    description: "A preview episode digging into recidivism — why so many people return to prison, and what it takes to actually break the cycle.",
  },
  {
    slug: "p-newzs-names-her-dream-collaboration",
    number: 4, season: 0,
    title: "P Newzs Names Her Dream Collaboration, and We\u2019re Completely Lost",
    guest: "P Newzs",
    host: "Marcus Davis",
    duration: "1:01",
    category: "Culture",
    releasedAt: "Jul 25, 2026",
    views: "2",
    image: yt("rhjzBE_Wv5Y"),
    youtubeId: "rhjzBE_Wv5Y",
    kind: "quick",
    description: "P Newzs drops her dream collab and leaves the hosts speechless in the best way.",
  },
  {
    slug: "p-newzs-shows-love-to-tha-fix",
    number: 3, season: 0,
    title: "P Newzs Shows Love to Tha Fix",
    guest: "P Newzs",
    host: "Jon Mic",
    duration: "0:24",
    category: "Community",
    releasedAt: "Jul 25, 2026",
    views: "2",
    image: yt("5ggl3DNgLuA"),
    youtubeId: "5ggl3DNgLuA",
    kind: "quick",
    description: "A quick moment of love and appreciation from P Newzs to the Tha Fix family.",
  },
  {
    slug: "what-is-the-barn",
    number: 2, season: 0,
    title: "What is The Barn?",
    guest: "Tha Fix",
    host: "Marcus Davis",
    duration: "1:15",
    category: "Business",
    releasedAt: "Dec 10, 2025",
    views: "1",
    image: yt("ADZpXc7OodE"),
    youtubeId: "ADZpXc7OodE",
    kind: "quick",
    description: "Ninety seconds on \u201CThe Barn\u201D — what it is, where the phrase came from, and why it keeps coming up on the show.",
  },
  {
    slug: "top-5-rapperz-dead-or-alive-sug",
    number: 1, season: 0,
    title: "Top 5 Rapperz Dead or Alive - Sug",
    guest: "Sug",
    host: "Jon Mic",
    duration: "0:34",
    category: "Sports",
    releasedAt: "Nov 14, 2025",
    views: "2",
    image: yt("kAxilPGN_cM"),
    youtubeId: "kAxilPGN_cM",
    kind: "quick",
    description: "Sug fires off his top 5 rappers dead or alive in under a minute.",
  },
];

export type Host = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const hosts: Host[] = [
  {
    slug: "jon-mic",
    name: "Jon Mic",
    role: "Co-Host & Founder",
    image: "/images/jon-mic-profile.png",
    bio: "Jon Mic is a co-host and Founder of Tha Fix whose authenticity, resilience, and real-life perspective make him a powerful voice on the show. A Louisville native and Ballard High School graduate, Jon is known for being genuine, loyal, and unapologetically straightforward.\n\nAfter overcoming more than 20 years of incarceration, he has spent the last eight years rebuilding his life with purpose, earning a leadership role as a Lead Safety Ambassador while remaining devoted to his family.\n\nJon is the proud father of two sons, grandfather of six, and fiancé to Breeda Dillard. On Tha Fix, he brings honest conversations, lived experience, and a passion for uplifting the community through discussions about music, culture, life, and personal growth.",
  },
  {
    slug: "marcus-davis",
    name: "Marcus Davis",
    role: "Co-Host, Founder & Producer",
    image: "/images/marcus-davis-profile.png",
    bio: "Marcus Davis is the Co-Host, Founder, and Producer of Tha Fix, a platform built on real conversations, lived experience, and honest perspectives. After rebuilding his life following incarceration, Marcus transformed his journey into one of purpose, leadership, and service. Today, he is an accomplished communications professional, digital marketer, and community advocate dedicated to creating opportunities for young people and strengthening communities.\n\nDrawing from both personal experience and professional expertise, Marcus brings authenticity, insight, and accountability to every conversation. Whether discussing sports, politics, violence, culture, or the challenges facing today's communities, he speaks from a place few can—having lived the struggles and worked to create solutions.\n\nThrough Tha Fix, Marcus and his co-host challenge assumptions, spark meaningful dialogue, and prove that your past doesn't have to define your future.",
  },
];

export type Guest = {
  slug: string;
  name: string;
  title: string;
  image: string;
};

export const guests: Guest[] = [
  { slug: "andrea-lewis", name: "Andrea Lewis", title: "Founder, Origin Capital", image: guest1 },
  { slug: "marcus-ghost-reed", name: "Marcus 'Ghost' Reed", title: "Author & Advocate", image: guest2 },
  { slug: "pastor-d-holloway", name: "Pastor D. Holloway", title: "Community Leader", image: guest3 },
  { slug: "tre-walker", name: "Tre Walker", title: "Athlete & Investor", image: guest4 },
];

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  { slug: "signature-hoodie", name: "Signature Hoodie", price: 85, category: "Apparel", image: merchHoodie },
  { slug: "lived-it-tee", name: '"Lived It" Graphic Tee', price: 42, category: "Apparel", image: merchTee },
  { slug: "network-cap", name: "Network Cap", price: 35, category: "Headwear", image: merchCap },
  { slug: "studio-mug", name: "Studio Ceramic Mug", price: 28, category: "Essentials", image: merchMug },
];

export const memberships = [
  {
    name: "The Audience",
    price: 7,
    period: "/mo",
    tagline: "Watch. Listen. Engage.",
    features: [
      "Early access to new episodes (24–48 hrs before public)",
      "Members-only bonus clips",
      "Access to members-only discussions (community feed)",
      "Submit questions & topics for episodes",
      "Ability to comment on blog posts",
    ],
    cta: "Join the Audience",
    featured: false,
  },
  {
    name: "The Network",
    price: 19,
    period: "/mo",
    tagline: "Connect. Collaborate. Participate.",
    features: [
      "Everything in The Audience",
      "Full access to Tha Fix After Hours (unfiltered)",
      "Behind-the-scenes + raw discussions",
      "Voting power on episode topics",
      "10% off all merch purchases",
      "Monthly live webinar / networking session",
      "Private community access",
      "Ability to submit blog posts for review and possible publication",
    ],
    cta: "Join the Network",
    featured: true,
  },
  {
    name: "The Founder",
    price: 297,
    period: " one-time",
    tagline: "Influence. Access. Priority.",
    features: [
      "Everything in The Network",
      "Access for as long as Tha Fix continues operating as a business",
      "Free exclusive Tha Fix T-shirt",
      "Name listed as Founding Member on website",
      "Quarterly private strategy & networking session",
      "15% off all merch purchases",
      "Exclusive members-only documentary content",
      "Priority consideration for collaborations and guest opportunities",
      "Opportunity to receive a featured member or brand spotlight",
      "Early access to future events, monetization & platform features",
      "Opportunity drops: guest slots, brand collabs, event features",
      "Priority question submission for eligible member sessions",
    ],
    cta: "Become a Founder",
    featured: false,
  },
] as const;

export const sponsors = [
  "ORIGIN CAPITAL", "BLOCKWORK", "THE 8TH FLOOR", "LEGACY FM", "NORTHSTAR APPAREL", "RUNTABLE", "GROUNDED CO.", "META MUTUAL",
];

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  category: string;
  read: string;
  views: string;
  publishedAt: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "community-conversation-outlasts-news-cycle",
    title: "Why community conversation outlasts the news cycle",
    author: "Jon Mic",
    category: "Community",
    read: "6 min",
    views: "48K",
    publishedAt: "May 30, 2026",
    image: ep1,
    excerpt: "Hot takes fade in a week. The conversations that matter happen at the kitchen table.",
    body: [
      "The news cycle moves fast. By Friday, nobody remembers what Monday's outrage was about. But the conversations that actually shape a neighborhood happen slower — at cookouts, at barbershops, at the kitchen table.",
      "On Tha Fix, we've learned that the loudest voices online aren't the ones people actually listen to. Trust is built face to face, over years, by showing up when it counts.",
      "This post breaks down three habits that keep community dialogue alive long after the headlines move on: showing up in person, telling the truth about your own story, and making room for the next voice at the table.",
    ],
  },
  {
    slug: "five-episodes-changed-how-we-see-leadership",
    title: "Five episodes that changed how we see leadership",
    author: "Marcus Davis",
    category: "Culture",
    read: "8 min",
    views: "62K",
    publishedAt: "May 22, 2026",
    image: ep2,
    excerpt: "A retrospective on the moments that reframed what real leadership looks like.",
    body: [
      "Four seasons in, a handful of conversations still sit differently with us. These aren't the biggest names or the loudest episodes — they're the ones that quietly changed how we think about leading anything.",
      "From a pastor who runs toward the hard rooms to an athlete who had to redefine himself after the whistle blew, each guest showed us a version of leadership that doesn't fit on a LinkedIn bio.",
      "Here are the five episodes we go back to — and what each one taught us about doing the work when nobody is watching.",
    ],
  },
  {
    slug: "notes-from-the-road-atlanta-kickoff",
    title: "Notes from the road: Atlanta kickoff",
    author: "Jon Mic",
    category: "Culture",
    read: "5 min",
    views: "31K",
    publishedAt: "May 15, 2026",
    image: ep3,
    excerpt: "The first night of the summer tour, in the hosts' own words.",
    body: [
      "Atlanta showed up. Doors opened at seven, and by six-thirty the line stretched around the block. We knew this tour was going to be different, but we didn't expect the room to feel like a family reunion.",
      "This is the raw, unedited recap of night one — what worked, what didn't, and the moments we'll be replaying for weeks.",
    ],
  },
  {
    slug: "money-mission-and-the-second-act",
    title: "Money, mission, and the second act",
    author: "Marcus Davis",
    category: "Business",
    read: "7 min",
    views: "54K",
    publishedAt: "May 8, 2026",
    image: ep5,
    excerpt: "Rebuilding a financial life is one thing. Rebuilding a mission is another.",
    body: [
      "Coming home is only half the work. The other half is figuring out how to make a living that matches the person you've become — not the person you used to be.",
      "In this piece, we get honest about the money mistakes, the credit rebuild, and the slow shift from chasing a check to chasing a calling.",
    ],
  },
  {
    slug: "faith-fatherhood-and-the-work-in-between",
    title: "Faith, fatherhood, and the work in between",
    author: "Jon Mic",
    category: "Faith",
    read: "6 min",
    views: "39K",
    publishedAt: "Apr 29, 2026",
    image: ep3,
    excerpt: "Being a father is the loudest sermon you'll ever preach.",
    body: [
      "My kids don't need me to be perfect. They need me to be present, honest, and consistent. That's the whole thing.",
      "This is a letter to every man trying to be a better father than the one he had — and the small daily choices that make it possible.",
    ],
  },
  {
    slug: "the-real-cost-of-showing-up",
    title: "The real cost of showing up",
    author: "Marcus Davis",
    category: "Politics",
    read: "9 min",
    views: "72K",
    publishedAt: "Apr 21, 2026",
    image: ep6,
    excerpt: "Advocacy isn't a hashtag. It's the receipts of everywhere you showed up when it was inconvenient.",
    body: [
      "You can't tweet your way into a community's trust. You show up to the school board meeting. You show up to the funeral. You show up when the cameras aren't there.",
      "This piece is a breakdown of what real, sustained civic work looks like — and why the flash-in-the-pan advocates get burnt out first.",
    ],
  },
  {
    slug: "athletes-second-half",
    title: "The athlete's second half",
    author: "Jon Mic",
    category: "Sports",
    read: "5 min",
    views: "45K",
    publishedAt: "Apr 14, 2026",
    image: ep2,
    excerpt: "The scoreboard turns off. Then what?",
    body: [
      "Most players don't retire — they get retired. The gap between the last game and the next chapter is where identity either breaks or rebuilds.",
      "We talked to former pros about what actually helped them cross that gap, and what they wish someone had told them at twenty-two.",
    ],
  },
  {
    slug: "the-block-and-the-boardroom",
    title: "The block and the boardroom speak the same language",
    author: "Marcus Davis",
    category: "Business",
    read: "6 min",
    views: "58K",
    publishedAt: "Apr 7, 2026",
    image: ep4,
    excerpt: "Negotiation, loyalty, timing — the fundamentals don't change with the zip code.",
    body: [
      "The skills that keep you alive on the block are the same ones that close deals in a boardroom. Reading the room. Knowing when to speak. Knowing when not to.",
      "This is a piece about pattern recognition — and why the guys who make it out often make it further than the ones who never had to fight for anything.",
    ],
  },
];