import "./i18n";
import "./index.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Stats, Features } from "./components/Sections";
import {
  WhatsAppSpotlight,
  SyntheticSpotlight,
  CLISpotlight,
  SubscribeSpotlight,
} from "./components/Spotlights";
import {
  HowItWorks,
  Testimonial,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "./components/BottomSections";

export default function App() {
  const { i18n } = useTranslation();
  useReveal();

  const lang = i18n.language?.startsWith("en") ? "en" : "pt";

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.title =
      lang === "en"
        ? "UpStat — Status pages for devs who take their systems seriously"
        : "UpStat — Monitoramento de Uptime com Alertas no WhatsApp";
  }, [lang]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <WhatsAppSpotlight />
        <SyntheticSpotlight />
        <CLISpotlight />
        <SubscribeSpotlight />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
