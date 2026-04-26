// Rich case content for Bossa Nova Sotheby's · Social & Asset Creation (bilingual)
import img1 from "@/assets/bossa/01.png";
import img2 from "@/assets/bossa/02.png";
import img3 from "@/assets/bossa/03.png";
import img4 from "@/assets/bossa/04.png";
import img5 from "@/assets/bossa/05.png";
import img6 from "@/assets/bossa/06.png";

const bossaCase = {
  heroImage: img1,
  backdrop: "BNS",
  title: {
    line1: { pt: "Bossa Nova Sotheby's ·", en: "Bossa Nova Sotheby's ·" },
    line2: { pt: "Assets Sociais", en: "Social Assets" },
  },
  heroMeta: [
    { label: { pt: "Cliente", en: "Client" }, value: { pt: "Bossa Nova Sotheby's Int. Realty", en: "Bossa Nova Sotheby's Int. Realty" } },
    { label: { pt: "Formato", en: "Format" }, value: { pt: "Carrosséis e Reels do Instagram", en: "Instagram Carousels & Reels" } },
    { label: { pt: "Função", en: "Role" }, value: { pt: "Direção Criativa & Design", en: "Creative Direction & Design" } },
    { label: { pt: "Ano", en: "Year" }, value: { pt: "2024", en: "2024" } },
  ],
  bigNumbers: [
    { value: "20+", label: { pt: "Imóveis Produzidos", en: "Listings Produced" } },
    { value: "6", label: { pt: "Slides por Carrossel", en: "Carousel Slides / Listing" } },
    { value: "1:1", label: { pt: "Aderência ao Brand Guideline", en: "Brand Guidelines Adherence" } },
    { value: "Reels", label: { pt: "Edições em Vídeo Vertical", en: "Vertical Video Edits" } },
  ],
  intro: {
    pt: "Construí o sistema de assets social-first para uma das imobiliárias de luxo mais consolidadas de São Paulo — traduzindo imóveis de alto padrão em carrosséis editoriais e short-form video do Instagram que respeitam a linguagem global da Sotheby's e mantêm o tom nativo do scroll.",
    en: "Crafted the social-first asset system for one of São Paulo's most established luxury real estate brokers — translating high-end property listings into editorial Instagram carousels and short-form video that respect Sotheby's global brand language while staying scroll-native.",
  },
  gallery: [
    { src: img1, label: { pt: "Carrossel · Capa", en: "Carousel · Cover" }, caption: { pt: "Apartamento · Higienópolis", en: "Apartamento · Higienópolis" } },
    { src: img2, label: { pt: "Carrossel · Living", en: "Carousel · Living" }, caption: { pt: "Living principal", en: "Living room hero" } },
    { src: img3, label: { pt: "Carrossel · Sala de Jantar", en: "Carousel · Dining" }, caption: { pt: "Detalhe da sala de jantar", en: "Dining detail" } },
    { src: img4, label: { pt: "Carrossel · Cozinha", en: "Carousel · Kitchen" }, caption: { pt: "Cozinha gourmet", en: "Gourmet kitchen" } },
    { src: img5, label: { pt: "Carrossel · Suíte", en: "Carousel · Suite" }, caption: { pt: "Suíte master", en: "Master suite" } },
    { src: img6, label: { pt: "Carrossel · CTA", en: "Carousel · CTA" }, caption: { pt: "Slide final · CTA do consultor", en: "Closing slide · agent CTA" } },
  ],
  videoSrc: "/bossa/video_imovel.mp4",
  pillars: [
    {
      label: { pt: "Disciplina de Marca", en: "Brand Discipline" },
      body: {
        pt: "Uso estrito do lockup Bossa Nova / Sotheby's, paleta navy + creme e tipo serif editorial — cada asset se lê como parte da mesma família de luxo.",
        en: "Strict use of the Bossa Nova / Sotheby's lockup, navy + cream palette and editorial serif type — every asset reads as part of the same luxury family.",
      },
    },
    {
      label: { pt: "Layout Editorial", en: "Editorial Layout" },
      body: {
        pt: "Cada imóvel é estruturado como uma narrativa de 6 slides: hook, hero shot, ambientes-chave, detalhe assinatura, CTA do agente. Pensado para parecer um spread de revista dentro de um frame 4:5.",
        en: "Each listing is structured as a 6-slide narrative: hook, hero shot, key rooms, signature detail, agent CTA. Designed to mirror a magazine spread inside a 4:5 frame.",
      },
    },
    {
      label: { pt: "Output Sales-Ready", en: "Sales-Ready Output" },
      body: {
        pt: "O slide final sempre traz o consultor responsável — transformando cada listing em asset de resposta direta, não apenas peça de marca.",
        en: "Closing slide always features the assigned consultant — turning every listing into a direct-response asset, not just a brand piece.",
      },
    },
  ],
};

export default bossaCase;
