// Rich case content for Diablo II: Resurrected
import heroImage from "@/assets/case-diablo-hero.jpg";

const diabloCase = {
  heroImage,
  backdrop: "D2R",
  title: { line1: "Diablo II:", line2: "Resurrected" },
  heroMeta: [
    { label: "Budget", value: "$90,000 USD" },
    { label: "Market", value: "Brazil + LATAM" },
    { label: "Window", value: "Sep – Oct 2021" },
    { label: "Goal", value: "Awareness & Consideration" },
  ],
  bigNumbers: [
    { value: "+15M", label: "Impressions" },
    { value: "+3.9M", label: "Views" },
    { value: "+121K", label: "Clicks" },
    { value: "$6.01", label: "CPM" },
    { value: "$0.74", label: "CPC" },
    { value: "$0.02", label: "CPV" },
  ],
  brief: [
    {
      label: "Challenge",
      body:
        "Media campaign for the launch of <strong>Diablo II: Resurrected</strong> in Brazil and Latin America (LATAM), with a budget of <strong>$90,000 USD</strong> — split evenly between Brazil (50%) and SSA — Spanish-Speaking Americas (50%).",
    },
    {
      label: "Targets",
      body:
        "<strong>Primary:</strong> Long-time fans who played the original Diablo 2 or other franchise titles — typically older players with a strong emotional bond to the IP.<br/><br/><strong>Secondary:</strong> New players interested in Action-RPG, drawn by the modern visuals and the franchise's reputation.",
    },
    {
      label: "Key Dates",
      body:
        "<strong>Launch:</strong> September 23<br/><strong>Campaign:</strong> September 23 → October 23<br/><strong>Duration:</strong> 30 days of active flighting",
    },
    {
      label: "Core KPIs",
      body:
        "<strong>Awareness:</strong> Impressions, Reach, VTR<br/><strong>Consideration:</strong> Views, CPV, Engagement<br/><strong>Efficiency:</strong> CPM, CPC, Budget delivery",
    },
  ],
  personas: [
    {
      tag: "Primary Audience",
      name: "João, 35",
      role: "Software Engineer · Nostalgic gamer",
      quote:
        "I can't wait to play Diablo 2 again — happy to see Blizzard pushing it for everyone.",
      channels: [
        "Retro-gaming forums and Reddit communities",
        "Twitch and YouTube — Diablo 2 streamers",
        "Facebook & nostalgia gamer groups",
      ],
    },
    {
      tag: "Secondary Audience",
      name: "Pedro, 22",
      role: "University student · Newcomer",
      quote:
        "Never played the original, but Diablo II Resurrected looks incredible. I've heard so much — I want in.",
      channels: [
        "TikTok & Instagram — discovering new games",
        "YouTube — gameplays and reviews",
        "Discord — Action-RPG communities",
      ],
    },
  ],
  market: [
    {
      value: "81.9%",
      label: "of gamers use YouTube<br/>(PGB 2024 — platform #1)",
    },
    {
      value: "6",
      label: "platforms mapped<br/>for the channel mix",
    },
    {
      value: "2",
      label: "markets served<br/>Brazil + SSA LATAM",
    },
  ],
  channels: [
    {
      name: "YouTube",
      formats: "TrueView · Bumper Ads",
      desc: "Highest affinity with gamer audiences (81.9% PGB). Targeting via creators like Rakin and HadoukenMancer. Strong VTR and rentable CPV for awareness and consideration.",
    },
    {
      name: "Meta Ads",
      formats: "Feed · Stories · Reels · In-stream",
      desc: "Second most-used platform among gamers. Most rentable CPM in the mix. Sharp targeting with video creative for both audiences.",
    },
    {
      name: "TikTok",
      formats: "In-Feed · Top Feed",
      desc: "Deep penetration with younger audiences and rising affinity for gaming. Targeting via hashtags, creators and behavioral interests.",
    },
    {
      name: "Twitch",
      formats: "Video Ads · Sponsored Streams",
      desc: "100% gamer audience. Real-time communication via live. Ideal channel to activate dedicated fans with high engagement.",
    },
    {
      name: "Reddit",
      formats: "Promoted Posts · Video Ads",
      desc: "Essential for niche communities — r/Diablo, r/diablo2 and Action-RPG subs. Gained relevance in Brazil during the temporary X block.",
    },
    {
      name: "X (Twitter)",
      formats: "Promoted Tweets · Video Ads",
      desc: "Relevant for the SSA LATAM market — primary channel for creators and gamers across Latin America. SSA-only deployment.",
    },
  ],
  budget: [
    { platform: "YouTube", pct: 35, amount: "$31,500 USD" },
    { platform: "Meta Ads", pct: 25, amount: "$22,500 USD" },
    { platform: "TikTok", pct: 15, amount: "$13,500 USD" },
    { platform: "Twitch", pct: 12, amount: "$10,800 USD" },
    { platform: "Reddit", pct: 8, amount: "$7,200 USD" },
    { platform: "X · Twitter (SSA)", pct: 5, amount: "$4,500 USD" },
  ],
};

export default diabloCase;
