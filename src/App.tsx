import React from "react";

import Banner from "./components/Banner";
import Generators from "./components/Generators";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import MarqueeSection from "./components/MarqueeSection";
import ToolsSection from "./components/ToolsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { useOutletContext } from "react-router-dom";

function App() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div
      dir="rtl"
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      <Banner theme={darkMode} />
      <Generators />
      <Features />
      <HowItWorks />
      <MarqueeSection />
      <ToolsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
