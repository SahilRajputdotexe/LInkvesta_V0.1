// import Link from 'next/link';

import FlipCardComponent from "@/components/FlipCardComponent";

// // type Service = {
//   title: string;
//   slug: string;
// };

const services = [
  {
    step: "01",
    name: "Positioning Strategy",
    imageUrl: "/target-market.png",
    description:
      "We start with your brand's culture and values, then position your brand around that. We ignite excitement in your brand story, building social ecosystems and engaging with your audience to achieve your goals.",
  },
  {
    step: "02",
    name: "Brand Management",
    imageUrl: "/brand-asset-management.png",
    description:
      "We take charge of your brand’s online presence and accounts, optimizing them for you, so you can focus on what matters most.",
  },
  {
    step: "03",
    name: "Ghostwriting & Copywriting",
    imageUrl: "/copywriting.png",
    description:
      "We craft great content that boosts visibility, transforming your brand into a fast, accessible, and revenue-driving machine.",
  },
  {
    step: "04",
    name: "Lead Generation",
    imageUrl: "/user-engagement.png",
    description:
      "We turn brand into a lead-generating magnet, connecting you with the right people, at the right time.",
  },
  {
    step: "05",
    name: "Public Relation",
    imageUrl: "/public-relations.png",
    description:
      "Get seen on the biggest publications, with a guarantee on hits and industry-leading ideas that will put your brand in the headlines.",
  },
  {
    step: "06",
    name: "Podcast Bookings",
    imageUrl: "/podcast.png",
    description:
      "We ensure your brand connects with your audience where they’re most engaged, which is why we get you featured on the most popular podcasts.",
  },
  {
    step: "07",
    name: "UGC Marketing",
    imageUrl: "/seo.png",
    description:
      "Any time you feel like you need a bigger megaphone, we’ll get your brand a voice that’s sonorous.",
  },
  {
    step: "08",
    name: "Consulting Work",
    imageUrl: "/consult.png",
    description:
      "We provide the roadmap, tools, and knowledge to help you manage your brand independently. We’ve already helped teams from KPMG, BCG, and more.",
  },
];

export default function Services() {
  return (
    <div className="p-5">
    <FlipCardComponent services={services} />
  </div>
  );
}
