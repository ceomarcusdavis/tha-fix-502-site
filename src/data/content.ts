import ep1 from "@/assets/ep-1.jpg";
import ep2 from "@/assets/ep-2.jpg";
import ep3 from "@/assets/ep-3.jpg";
import ep4 from "@/assets/ep-4.jpg";
import ep5 from "@/assets/ep-5.jpg";
import ep6 from "@/assets/ep-6.jpg";
import hostA from "@/assets/host-1.jpg";
import hostB from "@/assets/host-2.jpg";
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
    image: hostA,
    bio: "Author, organizer, and community advocate. Two decades on the ground in his city, Jon Mic brings lived experience to every conversation.",
  },
  {
    slug: "marcus-davis",
    name: "Marcus Davis",
    role: "Co-Host, Founder & Producer",
    image: hostB,
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
    tagline: "Tap in.",
    features: [
      "Early access to new episodes (24–48 hrs before public)",
      "Members-only bonus clips",
      "Access to members-only discussions (community feed)",
      "Submit questions & topics for episodes",
    ],
    cta: "Join the Audience",
    featured: false,
  },
  {
    name: "The Network",
    price: 19,
    period: "/mo",
    tagline: "Join the conversation.",
    features: [
      "Everything in The Audience",
      "Full access to Tha Fix After Hours (unfiltered)",
      "Behind-the-scenes + raw discussions",
      "Voting power on episode topics",
      "10% off all merch purchases",
      "Monthly live webinar / networking session",
      "Private community access",
    ],
    cta: "Join the Network",
    featured: true,
  },
  {
    name: "The Founder",
    price: 297,
    period: " one-time",
    tagline: "Lifetime. Built different.",
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