export type Bi = { pt: string; en: string };
export type BiArr = { pt: string[]; en: string[] };

export type Project = {
  slug: string;
  index: string;
  client: string;
  title: Bi;
  category: "Paid Media" | "Growth" | "Analytics" | "Brand";
  year: string;
  tags: Bi extends never ? never : { pt: string[]; en: string[] };
  metrics: { label: Bi; value: string }[];
  summary: Bi;
  description: BiArr;
  role: Bi;
  stack: string[];
  hasDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "diablo-ii-resurrected",
    index: "01",
    client: "Blizzard Entertainment",
    title: { pt: "Diablo II: Resurrected", en: "Diablo II: Resurrected" },
    category: "Paid Media",
    year: "2021",
    tags: {
      pt: ["Planejamento de Mídia", "Gaming", "LATAM"],
      en: ["Media Planning", "Gaming", "LATAM"],
    },
    metrics: [
      { label: { pt: "Impressões", en: "Impressions" }, value: "+15M" },
      { label: { pt: "Orçamento", en: "Budget" }, value: "$90K" },
      { label: { pt: "CPV", en: "CPV" }, value: "$0.02" },
    ],
    summary: {
      pt: "Plano de mídia regional que reintroduziu um ícone para uma nova geração de gamers latino-americanos.",
      en: "Regional media plan that re-introduced an icon to a new generation of LATAM gamers.",
    },
    description: {
      pt: [
        "Construí e executei uma estratégia de mídia paga multi-plataforma no YouTube, Meta e display programático para o relançamento da IP no LATAM.",
        "A modelagem de audiência combinou segmentos nostálgicos com novos fãs de ARPG, levando a um CPV bem abaixo do benchmark de gaming e a uma curva de engajamento sustentada na semana de lançamento.",
        "Trabalhei junto ao time global de marca para localizar criativos, rodar estudos incrementais de brand-lift e ajustar a alocação de orçamento em quase tempo real.",
      ],
      en: [
        "Built and executed a multi-platform paid media strategy across YouTube, Meta and programmatic display for the LATAM relaunch of a legacy IP.",
        "Audience modeling combined nostalgia segments with newer ARPG fans, leading to a CPV well below the gaming benchmark and a sustained engagement curve through launch week.",
        "Worked alongside the global brand team to localize creative assets, run incremental brand-lift studies, and adjust budget allocation in near real-time.",
      ],
    },
    role: { pt: "Lead Media Planner", en: "Lead Media Planner" },
    stack: ["Google Ads", "Meta Ads", "DV360", "Looker Studio"],
    hasDetail: true,
  },
  {
    slug: "pilar-imoveis",
    index: "02",
    client: "Pilar Imóveis",
    title: { pt: "Motor de Vendas 10×", en: "10× Sales Engine" },
    category: "Growth",
    year: "2023",
    tags: {
      pt: ["Growth", "GTM", "Imobiliário"],
      en: ["Growth", "GTM", "Real Estate"],
    },
    metrics: [
      { label: { pt: "Vendas/mês", en: "Sales/mo" }, value: "3 → 30" },
      { label: { pt: "Custo do Lead", en: "Lead Cost" }, value: "−42%" },
      { label: { pt: "Janela", en: "Window" }, value: "6 mo" },
    ],
    summary: {
      pt: "Reconstruí todo o funil de aquisição de uma imobiliária — do primeiro clique ao contrato assinado.",
      en: "Rebuilt the entire acquisition funnel for a real estate broker — from first click to signed contract.",
    },
    description: {
      pt: [
        "Desenhei e entreguei o GTM completo: aquisição paga em Meta e Google, tracking completo via GTM, lead scoring e dashboard end-to-end no Looker Studio para o time comercial.",
        "Introduzi ciclos semanais de experimentação em criativos, landing pages e fluxos de qualificação de leads — saindo de decisões por intuição para um pipeline estruturado de testes.",
        "Resultado: vendas mensais escalaram 10× em seis meses, com queda de 42% no custo por lead qualificado.",
      ],
      en: [
        "Designed and shipped the complete go-to-market: paid acquisition across Meta and Google, full event tracking via GTM, lead scoring, and an end-to-end Looker Studio dashboard for the sales team.",
        "Introduced weekly experimentation cycles around creative, landing pages and lead-qualification flows — moving from gut decisions to a structured pipeline of tests.",
        "Result: monthly closed sales scaled 10× in six months, with a 42% drop in cost per qualified lead.",
      ],
    },
    role: { pt: "Growth Lead", en: "Growth Lead" },
    stack: ["Meta Ads", "Google Ads", "GTM", "Looker Studio", "HubSpot"],
  },
  {
    slug: "mustela-from-birth",
    index: "03",
    client: "Mustela",
    title: { pt: "From Birth · +2.3 Brand Lift", en: "From Birth · +2.3 Brand Lift" },
    category: "Brand",
    year: "2024",
    tags: {
      pt: ["Full-Funnel", "BDI / CDI", "Brand Lift"],
      en: ["Full-Funnel", "BDI / CDI", "Brand Lift"],
    },
    metrics: [
      { label: { pt: "Orçamento", en: "Budget" }, value: "R$600K" },
      { label: { pt: "Brand Lift", en: "Brand Lift" }, value: "+2.3" },
      { label: { pt: "Canais", en: "Channels" }, value: "5" },
    ],
    summary: {
      pt: "Lançamento full-funnel de R$600K que entregou o maior brand-lift da história da Mustela.",
      en: "R$600K full-funnel launch that delivered Mustela's highest brand-lift study on record.",
    },
    description: {
      pt: [
        "Conduzi com o Google um estudo de BDI/CDI para mapear regiões brasileiras onde a categoria de skincare infantil era desenvolvida mas a Mustela não — concentrando peso de mídia nas geografias de maior oportunidade.",
        "Desenhei e executei um plano de mídia full-funnel em CTV, YouTube Ads, Meta Ads, TikTok Ads e Pinterest Ads, cada plataforma mapeada para um estágio do funil.",
        "Fui responsável pelo reporting semanal com o cliente e apresentei os resultados consolidados ao board da empresa. A campanha entregou um brand-lift de +2.3 — recorde histórico para a marca.",
      ],
      en: [
        "Co-conducted a BDI/CDI study with Google to map Brazilian regions where the baby-skincare category was developed but Mustela was not — concentrating media weight on the highest-opportunity geographies.",
        "Designed and ran a full-funnel media plan across CTV, YouTube Ads, Meta Ads, TikTok Ads and Pinterest Ads, each platform mapped to a specific funnel stage.",
        "Owned weekly client reporting and presented consolidated results to the company's board. The campaign returned a +2.3 brand-lift score — a historical record for the brand.",
      ],
    },
    role: { pt: "Senior Growth Analyst", en: "Senior Growth Analyst" },
    stack: ["CTV", "YouTube Ads", "Meta Ads", "TikTok Ads", "Pinterest Ads", "Google Brand Lift"],
    hasDetail: true,
  },
  {
    slug: "bossa-nova-sothebys",
    index: "04",
    client: "Bossa Nova Sotheby's",
    title: { pt: "Sistema Social de Luxo", en: "Luxury Social System" },
    category: "Brand",
    year: "2024",
    tags: {
      pt: ["Criação", "Social", "Imobiliário"],
      en: ["Creative", "Social", "Real Estate"],
    },
    metrics: [
      { label: { pt: "Imóveis", en: "Listings" }, value: "20+" },
      { label: { pt: "Formato", en: "Format" }, value: "IG · Reels" },
      { label: { pt: "Slides", en: "Slides" }, value: "6 / post" },
    ],
    summary: {
      pt: "Sistema editorial de assets sociais para uma das principais imobiliárias de luxo de São Paulo.",
      en: "Editorial social-asset system for one of São Paulo's leading luxury real-estate brokers.",
    },
    description: {
      pt: [
        "Desenhei e produzi o sistema de carrosséis e Reels do Instagram para a Bossa Nova Sotheby's International Realty — traduzindo imóveis de alto padrão em assets nativos do scroll e on-brand.",
        "Cada imóvel segue uma estrutura editorial de 6 slides (capa → herói → ambientes → detalhe assinatura → CTA do consultor), respeitando o lockup global e a paleta da Sotheby's.",
        "O output é sales-ready: cada carrossel termina com o consultor responsável, transformando conteúdo de marca em asset de resposta direta.",
      ],
      en: [
        "Designed and produced the Instagram carousel and Reels system for Bossa Nova Sotheby's International Realty — translating high-end listings into scroll-native, on-brand assets.",
        "Each listing follows a 6-slide editorial structure (cover → hero → key rooms → signature detail → consultant CTA), respecting the global Sotheby's lockup and palette.",
        "Output is sales-ready: every carousel closes with the assigned consultant, turning brand content into a direct-response asset.",
      ],
    },
    role: { pt: "Creative & Social Lead", en: "Creative & Social Lead" },
    stack: ["Figma", "Photoshop", "CapCut", "Premiere"],
    hasDetail: true,
  },
  {
    slug: "ambev-greenz",
    index: "05",
    client: "AMBEV · Greenz",
    title: { pt: "Maior Brand Lift Registrado", en: "Largest Brand Lift on Record" },
    category: "Brand",
    year: "2022",
    tags: {
      pt: ["Mídia Paga", "BDI / CDI", "Brand Lift"],
      en: ["Paid Media", "BDI / CDI", "Brand Lift"],
    },
    metrics: [
      { label: { pt: "Orçamento", en: "Budget" }, value: "R$1MM+" },
      { label: { pt: "CPL", en: "CPL" }, value: "−26%" },
      { label: { pt: "NPS", en: "NPS" }, value: "9.0" },
    ],
    summary: {
      pt: "Campanha full-funnel que entregou o maior resultado de brand-lift já registrado pelo cliente.",
      en: "Full-funnel campaign that delivered the highest brand-lift result the client had ever recorded.",
    },
    description: {
      pt: [
        "Planejei e gerenciei orçamento anual de R$1MM+ entre Google, Meta, LinkedIn e programático, equilibrando awareness com KPIs duros de performance.",
        "Desenhei o framework de medição — brand lift incremental, mapeamento BDI/CDI, reporting semanal por cohort — e conduzi a cadência da campanha de ponta a ponta.",
        "O brand-lift study final entregou o melhor resultado já medido pelo cliente, com CPL 26% abaixo do benchmark e NPS de 9.",
      ],
      en: [
        "Planned and managed a R$1MM+ annual budget across Google, Meta, LinkedIn and programmatic, balancing brand awareness with hard performance KPIs.",
        "Designed the measurement framework — incremental brand lift, BDI/CDI mapping, weekly cohort reporting — and ran the campaign cadence end to end.",
        "Final brand-lift study returned the strongest result the client had ever measured, with CPL 26% below benchmark and an NPS of 9.",
      ],
    },
    role: { pt: "Senior Growth Analyst", en: "Senior Growth Analyst" },
    stack: ["Google Ads", "Meta", "LinkedIn", "DV360", "Brand Lift Studies"],
  },
  {
    slug: "amazon-ads-roas",
    index: "06",
    client: { pt: "E-commerce Confidencial", en: "Confidential E-commerce" } as unknown as string,
    title: { pt: "Amazon Ads · +69% ROAS", en: "Amazon Ads · +69% ROAS" },
    category: "Paid Media",
    year: "2024",
    tags: {
      pt: ["Amazon Ads", "Testes A/B", "E-commerce"],
      en: ["Amazon Ads", "A/B Testing", "E-commerce"],
    },
    metrics: [
      { label: { pt: "ROAS", en: "ROAS" }, value: "13% → 22%" },
      { label: { pt: "Lift", en: "Lift" }, value: "+69%" },
      { label: { pt: "Janela", en: "Window" }, value: "90 days" },
    ],
    summary: {
      pt: "Reestruturei uma conta de Amazon Ads com baixa performance, elevando o ROAS em quase 70% em um trimestre.",
      en: "Restructured an underperforming Amazon Ads account, lifting ROAS by nearly 70% in one quarter.",
    },
    description: {
      pt: [
        "Auditei a arquitetura existente da conta e identifiquei desperdício estrutural em match-types, palavras negativas e lógica de bidding.",
        "Reconstruí a conta com estrutura de campanhas em camadas, rodei loop contínuo de A/B em criativos e targeting de ASIN, e introduzi modelo de bidding por daypart.",
        "ROAS subiu de 13% para 22% em 90 dias mantendo o ad-spend estável — uma melhoria relativa de 69%.",
      ],
      en: [
        "Audited the existing account architecture and identified structural waste in match-types, negative keywords and bidding logic.",
        "Rebuilt the account with a tiered campaign structure, ran a continuous A/B testing loop on creatives and ASIN targeting, and introduced a daypart bidding model.",
        "ROAS climbed from 13% to 22% in 90 days while keeping ad-spend flat — a 69% relative improvement.",
      ],
    },
    role: { pt: "Especialista em Mídia Paga", en: "Paid Media Specialist" },
    stack: ["Amazon Ads", "Helium 10", "Excel Modeling"],
  },
  {
    slug: "jbs-data-pipeline",
    index: "07",
    client: "JBS",
    title: { pt: "Pipeline de Dados de Marketing", en: "Marketing Data Pipeline" },
    category: "Analytics",
    year: "2023",
    tags: {
      pt: ["Analytics", "BI", "Dados"],
      en: ["Analytics", "BI", "Data"],
    },
    metrics: [
      { label: { pt: "Relatórios", en: "Reports" }, value: "12 → 1" },
      { label: { pt: "Tempo Salvo", en: "Time Saved" }, value: "20h/sem" },
      { label: { pt: "Stack", en: "Stack" }, value: "SQL · LkS" },
    ],
    summary: {
      pt: "Substituí 12 planilhas manuais por um pipeline unificado de dados de marketing e dashboard ao vivo.",
      en: "Replaced 12 manual spreadsheets with a unified marketing data pipeline and live dashboard.",
    },
    description: {
      pt: [
        "Mapeei o fluxo completo de reporting de marketing, identifiquei duplicação entre times e desenhei uma fonte única da verdade no BigQuery.",
        "Construí o ETL em SQL, plugando dados de Meta, Google, LinkedIn e CRM em um dashboard Looker Studio atualizado diariamente.",
        "Eliminei ~20 horas de trabalho manual por semana e destravei insights self-serve para a liderança de marketing.",
      ],
      en: [
        "Mapped the full marketing reporting flow, identified duplication across teams and designed a single source of truth in BigQuery.",
        "Built the ETL in SQL, plugged Meta, Google, LinkedIn and CRM data into a Looker Studio dashboard refreshed daily.",
        "Eliminated ~20 hours of manual work per week and unlocked self-serve insights for the marketing leadership team.",
      ],
    },
    role: { pt: "Analytics Lead", en: "Analytics Lead" },
    stack: ["SQL", "BigQuery", "Looker Studio", "Python"],
  },
  {
    slug: "gs1-linkedin",
    index: "08",
    client: "GS1 Brasil",
    title: { pt: "Motor B2B no LinkedIn", en: "B2B LinkedIn Engine" },
    category: "Growth",
    year: "2022",
    tags: {
      pt: ["LinkedIn Ads", "B2B", "Geração de Leads"],
      en: ["LinkedIn Ads", "B2B", "Lead Gen"],
    },
    metrics: [
      { label: { pt: "Custo MQL", en: "MQL Cost" }, value: "−38%" },
      { label: { pt: "Pipeline", en: "Pipeline" }, value: "+R$2.4M" },
      { label: { pt: "Janela", en: "Window" }, value: "8 mo" },
    ],
    summary: {
      pt: "Construí um motor B2B de demand generation no LinkedIn — leads qualificados, CAC menor e handoff sales-ready.",
      en: "Built a B2B demand generation engine on LinkedIn — qualified leads, lower CAC, sales-ready handoff.",
    },
    description: {
      pt: [
        "Desenho de audiência ancorado em dados firmográficos, com sequências de gating de conteúdo e remarketing para qualificar leads antes do touchpoint comercial.",
        "Trabalhei com sales ops para definir critérios de MQL/SQL, instrumentar o funil e reportar contribuição de pipeline atribuída ao paid.",
        "Custo de MQL caiu 38% enquanto contribuiu com R$2.4M em pipeline atribuído em oito meses.",
      ],
      en: [
        "Audience design grounded in firmographic data, layered with content gating and remarketing sequences to qualify leads before sales touchpoints.",
        "Worked with sales ops to define MQL/SQL criteria, instrument the funnel and report pipeline contribution attributed to paid.",
        "MQL cost dropped 38% while contributing R$2.4M in attributed pipeline over eight months.",
      ],
    },
    role: { pt: "Growth Analyst", en: "Growth Analyst" },
    stack: ["LinkedIn Ads", "HubSpot", "Sales Navigator"],
  },
];

export const capabilities: { title: Bi; body: Bi }[] = [
  {
    title: { pt: "Mídia Paga", en: "Paid Media" },
    body: {
      pt: "Estratégia, planejamento e gestão em Google, Meta, LinkedIn, Amazon e programático. Otimização para CAC, CPL, ROAS e contribuição de pipeline.",
      en: "Strategy, planning and management across Google, Meta, LinkedIn, Amazon and programmatic. Optimization for CAC, CPL, ROAS and contribution to pipeline.",
    },
  },
  {
    title: { pt: "Growth & Experimentação", en: "Growth & Experimentation" },
    body: {
      pt: "Programas de teste guiados por hipótese, diagnóstico de funil, frameworks de A/B e incrementalidade. Do insight à decisão, rápido.",
      en: "Hypothesis-led testing programs, funnel diagnostics, A/B and incrementality frameworks. From insight to decision, fast.",
    },
  },
  {
    title: { pt: "Analytics & BI", en: "Analytics & BI" },
    body: {
      pt: "SQL, Python e dashboards no Looker Studio que substituem planilhas manuais. Uma fonte única da verdade para performance de marketing.",
      en: "SQL, Python and Looker Studio dashboards that replace manual spreadsheets. A single source of truth for marketing performance.",
    },
  },
  {
    title: { pt: "Tracking & Tag Management", en: "Tracking & Tag Management" },
    body: {
      pt: "Setup de GTM end-to-end, eventos server-side, conversion APIs e integrações com CRM. Dado confiável é a base.",
      en: "End-to-end GTM setup, server-side events, conversion APIs and CRM integrations. Trustworthy data is the foundation.",
    },
  },
  {
    title: { pt: "Estratégia Criativa", en: "Creative Strategy" },
    body: {
      pt: "Briefing e direção para criativos de performance — vídeo, estático e experiências de landing engenheiradas para converter.",
      en: "Briefing and direction for performance creative — video ads, static and landing experiences engineered to convert.",
    },
  },
  {
    title: { pt: "Lifecycle & Automação", en: "Lifecycle & Automation" },
    body: {
      pt: "Programas de email, fluxos de nutrição e automação que transformam o lado frio do funil em receita.",
      en: "Email programs, nurture flows and marketing automation that turn the cold half of the funnel into revenue.",
    },
  },
];

export const numbers: { value: string; label: Bi }[] = [
  { value: "4+", label: { pt: "Anos escalando performance", en: "Years scaling performance" } },
  { value: "R$1MM+", label: { pt: "Orçamento anual gerido", en: "Annual budget managed" } },
  { value: "−26%", label: { pt: "CPL vs. benchmark", en: "CPL vs. benchmark" } },
  { value: "10×", label: { pt: "Lift de vendas, Pilar Imóveis", en: "Sales lift, Pilar Imóveis" } },
];
