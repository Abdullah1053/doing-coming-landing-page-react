import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Features = () => {
  const [sectionRef, isInView] = useScrollAnimation();

  const features = [
    {
      icon: (
        <i className="fa-solid fa-bullseye-arrow"></i>
      ),
      title: "عملاؤك أقرب مما تتخيل",
      description: "لا تفوّت أي فرصة ! استهدف عملاءك برسائل تسويقية ذكية.",
    },
    {
      icon: (
        <i className="fa-regular fa-cart-shopping"></i>
      ),
      title: "سلات متروكة؟ أرباح مسترجعة",
      description: "ذكّر عملاءك بمنتجاتهم المفضلة، وأعدهم لإكمال مشترياتهم.",
    },
    {
      icon: (
        <i className="fa-regular fa-paintbrush"></i>
      ),
      title: "متجرك... بأسلوبك!",
      description:
        "حرية التصميم بين يديك، خصص متجرك ليناسب هوية علامتك التجارية.",
    },
    {
      icon: (
        <i className="fa-regular fa-megaphone"></i>
      ),
      title: "إعلاناتك حيث يجب أن تكون",
      description:
        "تكامل سلس مع Google وFacebook Ads، ليصل إعلانك إلى جمهورك المستهدف.",
    },
    {
      icon: (
        <i className="fa-regular fa-users-gear"></i>
      ),
      title: "إدارة متقدمة، تجربة سلسة",
      description:
        "نظّم طلباتك، صنّف عملاءك، واضبط الإعدادات بسهولة لمتجر أكثر كفاءة.",
    },
    {
      icon: (
        <i className="fa-regular fa-link-horizontal"></i>
      ),
      title: "متجرك بهويتك الخاصة",
      description:
        "احجز دومينك الخاص واجعل علامتك التجارية أكثر احترافية بين المنافسين.",
    },
  ];

  // Create a state array where only one feature can be active at a time (initially, all are inactive)
  const [activeStates, setActiveStates] = useState<boolean[]>(
    features.map(() => false)
  );

  /**
   * Activate the selected feature and deactivate all others.
   * If the selected feature is already active, do nothing.
   */
  const activateFeature = (index: number) => {
    setActiveStates((prev) => {
      if (prev[index]) return prev; // already active
      // Create an array where only the clicked index is true and the rest are false.
      return features.map((_, idx) => idx === index);
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`site-section py-40 transition-all duration-700 md:translate-y-8 opacity-0 ${
        isInView ? "translate-y-0 opacity-100" : ""
      }`}
      id="features"
    >
      <div className="container">
        <div className="grid grid-cols-3 justify-between gap-x-20 gap-y-14 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => activateFeature(index)}
              className={`transition-all p-3 h-[200px] rounded-lg overflow-hidden focus:outline-none ${
                activeStates[index]
                  ? "bg-[linear-gradient(146deg,rgba(48,120,175,1)_0%,rgba(24,59,91,1)_52%,rgba(10,162,242,1)_100%)] scale-105"
                  : "bg-stone-200 dark:bg-neutral-800 hover:scale-105"
              }`}
            >
              <div className="relative z-10 rounded-lg h-full overflow-hidden p-3">
                <h5 className="mb-4 flex items-center gap-6 font-semibold text-gray-900 dark:text-white">
                  <span className="w-7 [&_svg]:h-auto [&_svg]:w-full">
                    {feature.icon}
                  </span>
                  {feature.title}
                </h5>
                <p className="m-0 lg:ps-1 leading-8 text-gray-500 dark:text-white/50">
                  {feature.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
