// Rich case content for Bossa Nova Sotheby's · Social & Asset Creation
import img1 from "@/assets/bossa/01.png";
import img2 from "@/assets/bossa/02.png";
import img3 from "@/assets/bossa/03.png";
import img4 from "@/assets/bossa/04.png";
import img5 from "@/assets/bossa/05.png";
import img6 from "@/assets/bossa/06.png";

const bossaCase = {
  heroImage: img1,
  backdrop: "BNS",
  title: { line1: "Bossa Nova Sotheby's ·", line2: "Social Assets" },
  heroMeta: [
    { label: "Client", value: "Bossa Nova Sotheby's Int. Realty" },
    { label: "Format", value: "Instagram Carousels & Reels" },
    { label: "Role", value: "Creative Direction & Design" },
    { label: "Year", value: "2024" },
  ],
  bigNumbers: [
    { value: "20+", label: "Listings Produced" },
    { value: "6", label: "Carousel Slides / Listing" },
    { value: "1:1", label: "Brand Guidelines Adherence" },
    { value: "Reels", label: "Vertical Video Edits" },
  ],
  intro:
    "Crafted the social-first asset system for one of São Paulo's most established luxury real estate brokers — translating high-end property listings into editorial Instagram carousels and short-form video that respect Sotheby's global brand language while staying scroll-native.",
  gallery: [
    { src: img1, label: "Carousel · Cover", caption: "Apartamento · Higienópolis" },
    { src: img2, label: "Carousel · Living", caption: "Living room hero" },
    { src: img3, label: "Carousel · Dining", caption: "Dining detail" },
    { src: img4, label: "Carousel · Kitchen", caption: "Gourmet kitchen" },
    { src: img5, label: "Carousel · Suite", caption: "Master suite" },
    { src: img6, label: "Carousel · CTA", caption: "Closing slide · agent CTA" },
  ],
  videoSrc: "/bossa/video_imovel.mp4",
  pillars: [
    {
      label: "Brand Discipline",
      body: "Strict use of the Bossa Nova / Sotheby's lockup, navy + cream palette and editorial serif type — every asset reads as part of the same luxury family.",
    },
    {
      label: "Editorial Layout",
      body: "Each listing is structured as a 6-slide narrative: hook, hero shot, key rooms, signature detail, agent CTA. Designed to mirror a magazine spread inside a 4:5 frame.",
    },
    {
      label: "Sales-Ready Output",
      body: "Closing slide always features the assigned consultant — turning every listing into a direct-response asset, not just a brand piece.",
    },
  ],
};

export default bossaCase;
