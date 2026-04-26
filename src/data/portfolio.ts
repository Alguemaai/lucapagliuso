export type Project = {
  slug: string;
  index: string;
  client: string;
  title: string;
  category: "Paid Media" | "Growth" | "Analytics" | "Brand";
  year: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  description: string[];
  role: string;
  stack: string[];
  hasDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "diablo-ii-resurrected",
    index: "01",
    client: "Blizzard Entertainment",
    title: "Diablo II: Resurrected",
    category: "Paid Media",
    year: "2021",
    tags: ["Media Planning", "Gaming", "LATAM"],
    metrics: [
      { label: "Impressions", value: "+15M" },
      { label: "Budget", value: "$90K" },
      { label: "CPV", value: "$0.02" },
    ],
    summary: "Regional media plan that re-introduced an icon to a new generation of LATAM gamers.",
    description: [
      "Built and executed a multi-platform paid media strategy across YouTube, Meta and programmatic display for the LATAM relaunch of a legacy IP.",
      "Audience modeling combined nostalgia segments with newer ARPG fans, leading to a CPV well below the gaming benchmark and a sustained engagement curve through launch week.",
      "Worked alongside the global brand team to localize creative assets, run incremental brand-lift studies, and adjust budget allocation in near real-time.",
    ],
    role: "Lead Media Planner",
    stack: ["Google Ads", "Meta Ads", "DV360", "Looker Studio"],
    hasDetail: true,
  },
  {
    slug: "pilar-imoveis",
    index: "02",
    client: "Pilar Imóveis",
    title: "10× Sales Engine",
    category: "Growth",
    year: "2023",
    tags: ["Growth", "GTM", "Real Estate"],
    metrics: [
      { label: "Sales/mo", value: "3 → 30" },
      { label: "Lead Cost", value: "−42%" },
      { label: "Window", value: "6 mo" },
    ],
    summary: "Rebuilt the entire acquisition funnel for a real estate broker — from first click to signed contract.",
    description: [
      "Designed and shipped the complete go-to-market: paid acquisition across Meta and Google, full event tracking via GTM, lead scoring, and an end-to-end Looker Studio dashboard for the sales team.",
      "Introduced weekly experimentation cycles around creative, landing pages and lead-qualification flows — moving from gut decisions to a structured pipeline of tests.",
      "Result: monthly closed sales scaled 10× in six months, with a 42% drop in cost per qualified lead.",
    ],
    role: "Growth Lead",
    stack: ["Meta Ads", "Google Ads", "GTM", "Looker Studio", "HubSpot"],
  },
  {
    slug: "ambev-greenz",
    index: "03",
    client: "AMBEV · Greenz",
    title: "Largest Brand Lift on Record",
    category: "Brand",
    year: "2022",
    tags: ["Paid Media", "BDI / CDI", "Brand Lift"],
    metrics: [
      { label: "Budget", value: "R$1MM+" },
      { label: "CPL", value: "−26%" },
      { label: "NPS", value: "9.0" },
    ],
    summary: "Full-funnel campaign that delivered the highest brand-lift result the client had ever recorded.",
    description: [
      "Planned and managed a R$1MM+ annual budget across Google, Meta, LinkedIn and programmatic, balancing brand awareness with hard performance KPIs.",
      "Designed the measurement framework — incremental brand lift, BDI/CDI mapping, weekly cohort reporting — and ran the campaign cadence end to end.",
      "Final brand-lift study returned the strongest result the client had ever measured, with CPL 26% below benchmark and an NPS of 9.",
    ],
    role: "Senior Growth Analyst",
    stack: ["Google Ads", "Meta", "LinkedIn", "DV360", "Brand Lift Studies"],
  },
  {
    slug: "amazon-ads-roas",
    index: "04",
    client: "Confidential E-commerce",
    title: "Amazon Ads · +69% ROAS",
    category: "Paid Media",
    year: "2024",
    tags: ["Amazon Ads", "A/B Testing", "E-commerce"],
    metrics: [
      { label: "ROAS", value: "13% → 22%" },
      { label: "Lift", value: "+69%" },
      { label: "Window", value: "90 days" },
    ],
    summary: "Restructured an underperforming Amazon Ads account, lifting ROAS by nearly 70% in one quarter.",
    description: [
      "Audited the existing account architecture and identified structural waste in match-types, negative keywords and bidding logic.",
      "Rebuilt the account with a tiered campaign structure, ran a continuous A/B testing loop on creatives and ASIN targeting, and introduced a daypart bidding model.",
      "ROAS climbed from 13% to 22% in 90 days while keeping ad-spend flat — a 69% relative improvement.",
    ],
    role: "Paid Media Specialist",
    stack: ["Amazon Ads", "Helium 10", "Excel Modeling"],
  },
  {
    slug: "jbs-data-pipeline",
    index: "05",
    client: "JBS",
    title: "Marketing Data Pipeline",
    category: "Analytics",
    year: "2023",
    tags: ["Analytics", "BI", "Data"],
    metrics: [
      { label: "Reports", value: "12 → 1" },
      { label: "Time Saved", value: "20h/wk" },
      { label: "Stack", value: "SQL · LkS" },
    ],
    summary: "Replaced 12 manual spreadsheets with a unified marketing data pipeline and live dashboard.",
    description: [
      "Mapped the full marketing reporting flow, identified duplication across teams and designed a single source of truth in BigQuery.",
      "Built the ETL in SQL, plugged Meta, Google, LinkedIn and CRM data into a Looker Studio dashboard refreshed daily.",
      "Eliminated ~20 hours of manual work per week and unlocked self-serve insights for the marketing leadership team.",
    ],
    role: "Analytics Lead",
    stack: ["SQL", "BigQuery", "Looker Studio", "Python"],
  },
  {
    slug: "gs1-linkedin",
    index: "06",
    client: "GS1 Brasil",
    title: "B2B LinkedIn Engine",
    category: "Growth",
    year: "2022",
    tags: ["LinkedIn Ads", "B2B", "Lead Gen"],
    metrics: [
      { label: "MQL Cost", value: "−38%" },
      { label: "Pipeline", value: "+R$2.4M" },
      { label: "Window", value: "8 mo" },
    ],
    summary: "Built a B2B demand generation engine on LinkedIn — qualified leads, lower CAC, sales-ready handoff.",
    description: [
      "Audience design grounded in firmographic data, layered with content gating and remarketing sequences to qualify leads before sales touchpoints.",
      "Worked with sales ops to define MQL/SQL criteria, instrument the funnel and report pipeline contribution attributed to paid.",
      "MQL cost dropped 38% while contributing R$2.4M in attributed pipeline over eight months.",
    ],
    role: "Growth Analyst",
    stack: ["LinkedIn Ads", "HubSpot", "Sales Navigator"],
  },
];

export const capabilities = [
  {
    title: "Paid Media",
    body: "Strategy, planning and management across Google, Meta, LinkedIn, Amazon and programmatic. Optimization for CAC, CPL, ROAS and contribution to pipeline.",
  },
  {
    title: "Growth & Experimentation",
    body: "Hypothesis-led testing programs, funnel diagnostics, A/B and incrementality frameworks. From insight to decision, fast.",
  },
  {
    title: "Analytics & BI",
    body: "SQL, Python and Looker Studio dashboards that replace manual spreadsheets. A single source of truth for marketing performance.",
  },
  {
    title: "Tracking & Tag Management",
    body: "End-to-end GTM setup, server-side events, conversion APIs and CRM integrations. Trustworthy data is the foundation.",
  },
  {
    title: "Creative Strategy",
    body: "Briefing and direction for performance creative — video ads, static and landing experiences engineered to convert.",
  },
  {
    title: "Lifecycle & Automation",
    body: "Email programs, nurture flows and marketing automation that turn the cold half of the funnel into revenue.",
  },
];

export const numbers = [
  { value: "4+", label: "Years scaling performance" },
  { value: "R$1MM+", label: "Annual budget managed" },
  { value: "−26%", label: "CPL vs. benchmark" },
  { value: "10×", label: "Sales lift, Pilar Imóveis" },
];
