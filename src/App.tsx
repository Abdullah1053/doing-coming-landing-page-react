import Header from "./components/Header";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import Generators from "./components/Generators";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import MarqueeSection from "./components/MarqueeSection";
import ToolsSection from "./components/ToolsSection";
import TemplatesSection from "./components/TemplatesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      <Header
        theme={darkMode}
        onChangeTheme={(theme) => toggleDarkMode(theme)}
      />
      <Banner theme={darkMode} />
      {/* <BannerImage /> */}
      <Generators />
      <Features />
      <HowItWorks />
      <MarqueeSection />
      <ToolsSection />
      {/* <TemplatesSection /> */}
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
      <Footer theme={darkMode} />
    </div>
  );
}

export default App;
