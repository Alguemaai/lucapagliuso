// UI strings (non-content) — labels, nav, buttons, section eyebrows.
// Project content lives in data/portfolio.ts and data/cases/*.ts as bilingual objects.

import type { Lang } from "./LanguageContext";

export const ui = {
  nav: {
    index: { pt: "Início", en: "Index" },
    work: { pt: "Projetos", en: "Work" },
    contact: { pt: "Contato", en: "Contact" },
  },
  home: {
    sideMeta: { pt: "Portfólio · Vol. 02 · MMXXV", en: "Portfolio · Vol. 02 · MMXXV" },
    indexLabel: { pt: "Índice № 01", en: "Index № 01" },
    intro: {
      pt: "Analista de growth com quatro anos escalando performance para AMBEV, JBS, Blizzard e estúdios independentes em toda a LATAM.",
      en: "Growth analyst with four years scaling performance for AMBEV, JBS, Blizzard and independent studios across LATAM.",
    },
    introBoldNames: {
      pt: "AMBEV, JBS, Blizzard",
      en: "AMBEV, JBS, Blizzard",
    },
    tagline: {
      pt: "Analista de Growth — planejamento de mídia, experimentação e analytics para marcas que precisam de números, não narrativas.",
      en: "Growth Analyst — media planning, experimentation & analytics for brands that need numbers, not narratives.",
    },
    seeWork: { pt: "Ver os projetos →", en: "See the work →" },

    manifestoEyebrow: { pt: "(01) Manifesto", en: "(01) Manifesto" },
    manifestoTitle: {
      pt: "Transformo dados brutos em decisões — não em dashboards que ninguém abre.",
      en: "I turn raw data into decisions — not dashboards that nobody opens.",
    },
    manifestoItalic: { pt: "decisões", en: "decisions" },
    manifestoP1: {
      pt: "Quatro anos escalando performance para AMBEV, JBS, GS1 Brasil e Blizzard — gerindo orçamentos anuais de R$1MM+ entre Google, Meta, LinkedIn e Amazon Ads.",
      en: "Four years scaling performance for AMBEV, JBS, GS1 Brasil and Blizzard — managing R$1MM+ annual budgets across Google, Meta, LinkedIn and Amazon Ads.",
    },
    manifestoP2: {
      pt: "Construo hipóteses, rodo testes e me obcecá com CAC e LTV. A diferença está em traduzir números em movimentos de negócio — MBA em Data Science & Analytics pela USP/Esalq.",
      en: "I build hypotheses, run tests, and obsess over CAC and LTV. The difference is in translating numbers into business moves — MBA in Data Science & Analytics from USP/Esalq.",
    },

    capabilitiesEyebrow: { pt: "(02) Capacidades", en: "(02) Capabilities" },
    capabilitiesTitle: { pt: "O que eu", en: "What I" },
    capabilitiesItalic: { pt: "faço", en: "do" },
    capabilitiesCount: { pt: "06 disciplinas", en: "06 disciplines" },

    workEyebrow: { pt: "(03) Trabalhos selecionados", en: "(03) Selected Work" },
    workTitle: { pt: "Cases", en: "Recent" },
    workItalic: { pt: "recentes", en: "cases" },
    allWork: { pt: "Todos os projetos →", en: "All work →" },
    viewAll: { pt: "Ver todos os projetos →", en: "View all projects →" },

    contactEyebrow: { pt: "(04) Vamos conversar", en: "(04) Let's talk" },
    contactTitle: { pt: "Vamos", en: "Let's" },
    contactItalic: { pt: "crescer", en: "grow" },
    contactSuffix: { pt: "algo juntos.", en: "something." },
  },
  projects: {
    eyebrow: { pt: "Índice de trabalhos · 2021 — 2025", en: "Index of work · 2021 — 2025" },
    title: { pt: "Projetos", en: "Selected" },
    italic: { pt: "selecionados", en: "projects" },
    intro: {
      pt: "Um arquivo vivo de campanhas, motores de growth e construções de analytics — de orçamentos de marca de R$1MM+ a loops escrappy de testes A/B. Clique em qualquer linha para expandir o case.",
      en: "A working archive of campaigns, growth engines and analytics builds — from R$1MM+ brand budgets to scrappy A/B testing loops. Click any line to expand the case.",
    },
    fullCase: { pt: "Case completo", en: "Full case" },
    noResults: { pt: "Sem resultados", en: "No results" },
    noResultsBody: { pt: "Nenhum case neste filtro — ainda.", en: "No cases under this filter — yet." },
    filterAll: { pt: "Todos", en: "All" },
    filterPaid: { pt: "Mídia Paga", en: "Paid Media" },
    filterGrowth: { pt: "Growth", en: "Growth" },
    filterAnalytics: { pt: "Analytics", en: "Analytics" },
    filterBrand: { pt: "Marca", en: "Brand" },
    modalCase: { pt: "Case", en: "Case" },
    modalClose: { pt: "Fechar ✕", en: "Close ✕" },
    modalWork: { pt: "O trabalho", en: "The work" },
    modalRole: { pt: "Função", en: "Role" },
    modalStack: { pt: "Stack", en: "Stack" },
    modalCta: { pt: "Quer resultados assim?", en: "Want results like this?" },
  },
  detail: {
    case: { pt: "Case", en: "Case" },
    notFound: { pt: "404 · Case não encontrado", en: "404 · Case not found" },
    notFoundTitle: { pt: "Este case está", en: "This case is" },
    notFoundItalic: { pt: "no cofre", en: "in the vault" },
    back: { pt: "← Voltar para todos os trabalhos", en: "← Back to all work" },
    challengeEyebrow: { pt: "O Desafio", en: "The Challenge" },
    challengeTitle: { pt: "Brief &", en: "Brief &" },
    challengeItalic: { pt: "contexto", en: "context" },
    audience: { pt: "Audiência", en: "Audience" },
    personas: { pt: "Personas", en: "Personas" },
    personasItalic: { pt: "mapeadas", en: "mapped" },
    channelMixEyebrow: { pt: "Mix de Canais", en: "Channel Mix" },
    channelMixTitle: { pt: "Plataformas", en: "Platforms" },
    channelMixItalic: { pt: "selecionadas", en: "selected" },
    allocation: { pt: "Alocação", en: "Allocation" },
    budgetOf: { pt: "Orçamento de", en: "Budget of" },
    nextCase: { pt: "Próximo case", en: "Next case" },
    allProjects: { pt: "← Todos os projetos", en: "← All projects" },
    campaignFilm: { pt: "Filme da Campanha", en: "Campaign Film" },
    launchSpot: { pt: "O", en: "The" },
    launchSpotItalic: { pt: "comercial de lançamento", en: "launch spot" },
    launchSpotSuffix: { pt: ".", en: "." },
  },
  bossa: {
    brief: { pt: "O Brief", en: "The Brief" },
    briefTitle: { pt: "Um sistema de assets nativo do scroll para uma marca de", en: "A scroll-native asset system for a" },
    briefItalic: { pt: "real estate de luxo", en: "luxury real-estate" },
    briefSuffix: { pt: ".", en: " brand." },
    selected: { pt: "Carrosséis Selecionados", en: "Selected Carousels" },
    reel: { pt: "Reel · Tour do Imóvel", en: "Reel · Listing Walkthrough" },
    reelTitle: { pt: "Um imóvel contado em", en: "A property told in" },
    reelItalic: { pt: "9:16", en: "9:16" },
    pillars: { pt: "Pilares de Design", en: "Design Pillars" },
    pillarsTitle: { pt: "Como o sistema", en: "How the system" },
    pillarsItalic: { pt: "se sustenta", en: "holds together" },
  },
  footer: {
    available: { pt: "Disponível para", en: "Available for" },
    availableTitle: { pt: "Novas", en: "New" },
    availableItalic: { pt: "colaborações", en: "collaborations" },
    availableSuffix: { pt: "a partir do Q3.", en: "from Q3." },
    elsewhere: { pt: "Outros lugares", en: "Elsewhere" },
    based: { pt: "Baseado em", en: "Based in" },
    basedLine: { pt: "São Paulo\nBrasil · UTC−3", en: "São Paulo\nBrazil · UTC−3" },
    rights: { pt: "Analista de Growth · Mídia · Dados", en: "Growth Analyst · Media · Data" },
  },
} as const;

export type UIKey = keyof typeof ui;

export const t = <S extends UIKey, K extends keyof (typeof ui)[S]>(
  section: S,
  key: K,
  lang: Lang
): string => {
  const entry = ui[section][key] as { pt: string; en: string };
  return entry[lang];
};
