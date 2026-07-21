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
};

export const episodes: Episode[] = [
  {
    slug: "street-diplomacy-new-currency",
    number: 142, season: 4,
    title: "Street Diplomacy: The New Currency",
    guest: "Marcus 'Ghost' Reed",
    host: "Jon Mic",
    duration: "58 min",
    category: "Community",
    releasedAt: "May 28, 2026",
    views: "2.4M",
    image: ep1,
    description: "We lived the hustle, now we break down the mechanics. A deep dive into community leadership and the true cost of credibility in the modern landscape.",
  },
  {
    slug: "from-the-court-to-the-boardroom",
    number: 141, season: 4,
    title: "From the Court to the Boardroom",
    guest: "Tre Walker",
    host: "Marcus Davis",
    duration: "52 min",
    category: "Sports",
    releasedAt: "May 21, 2026",
    views: "1.8M",
    image: ep2,
    description: "Former pro athlete on rebuilding identity, money management, and the next chapter after the spotlight fades.",
  },
  {
    slug: "the-microphone-and-the-mission",
    number: 140, season: 4,
    title: "The Microphone & The Mission",
    guest: "Pastor D. Holloway",
    host: "Jon Mic",
    duration: "61 min",
    category: "Faith",
    releasedAt: "May 14, 2026",
    views: "940K",
    image: ep3,
    description: "A frank conversation about leadership, faith, and using your voice when no one else will say it.",
  },
  {
    slug: "after-dark-rules-of-the-block",
    number: 139, season: 4,
    title: "After Dark: Rules of the Block",
    guest: "Anonymous",
    host: "Marcus Davis",
    duration: "44 min",
    category: "Culture",
    releasedAt: "May 7, 2026",
    views: "3.1M",
    image: ep4,
    description: "An unfiltered breakdown of the unwritten code — and why understanding it matters for everyone.",
  },
  {
    slug: "the-deal-we-shook-on",
    number: 138, season: 4,
    title: "The Deal We Shook On",
    guest: "Andrea Lewis",
    host: "Jon Mic",
    duration: "49 min",
    category: "Business",
    releasedAt: "Apr 30, 2026",
    views: "1.2M",
    image: ep5,
    description: "Trust, partnership, and what happens when handshakes mean more than contracts.",
  },
  {
    slug: "speak-while-they-listen",
    number: 137, season: 4,
    title: "Speak While They Listen",
    guest: "Dr. Amari Cole",
    host: "Marcus Davis",
    duration: "68 min",
    category: "Politics",
    releasedAt: "Apr 23, 2026",
    views: "2.0M",
    image: ep6,
    description: "From classroom to capitol — the urgency of community-led policy work right now.",
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
      "Ability to create & publish blog posts",
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
      "Lifetime access to all content",
      "Free exclusive Tha Fix T-shirt",
      "Name listed as Founding Member on website",
      "Quarterly private strategy & networking session",
      "15% off all merch purchases",
      "Exclusive members-only documentary content",
      "Priority placement in collaborations & guest opportunities",
      "Featured spotlight of your brand, product, or service",
      "Early access to future events, monetization & platform features",
      "Opportunity drops: guest slots, brand collabs, event features",
      "Priority Q&A submission (guaranteed response)",
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