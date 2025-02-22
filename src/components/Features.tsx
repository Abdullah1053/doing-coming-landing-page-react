import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Features = () => {
  const [sectionRef, isInView] = useScrollAnimation();

  const features = [
    {
      icon: (
        <i className="fa-regular fa-chart-line"></i>
      ),
      title: "تجارتك تنمو بدون توقف",
      description: "مع أدواتنا الذكية استهدف عملاءك بناءً على اهتماماتهم وسلوكهم، وأطلق حملاتك التسويقية.",
    },
    {
      icon: (
        <i className="fa-regular fa-truck"></i>
      ),
      title: "توصيل طلباتك أسرع",
      description: " بضغطة زر خلي عملاءك يستلموا طلباتهم بدون تأخير ، خيارات الشحن تحت إدارتك مع إمكانية تتبع الطلبات.",
    },
    {
      icon: (
        <i className="fa-regular fa-chart-line"></i>
      ),
      title: "القرارات الصعبة صارت سهلة",
      description:
        "تقارير تفصيلية ، تمكنك من تحليل أداء متجرك، تحديد نقاط القوة، لتحسين أداء تجارتك اعتمادًا على معلومات دقيقة.",
    },
    {
      icon: (
        <i className="fa-regular fa-chart-line"></i>
      ),
      title: "تجربة تصميم على مقاس طموحك",
      description:
        "متجرك لوحتك، وأنت الفنان! مع ثيمات قابلة للتخصيص أضف لمساتك الخاصة بتصميم يُبرز هويتك التجارية.",
    },
    {
      icon: (
        <i className="fa-regular fa-credit-card"></i>
      ),
      title: "وسائل الدفع بدون تعقيد",
      description:
        "من التحويل إلى الدفع عند الاستلام، إلى المحافظ الإلكترونية، نوفر لك كل طرق الدفع التي تلبي احتياجات عملائك.",
    },
    {
      icon: (
        <i className="fa-regular fa-boxes-stacked"></i>
      ),
      title: "تحكم ذكي في مخزونك",
      description:
        "ابقَى على اطلاع دائم بكل تفاصيل منتجاتك، تتبع كميات المنتجات، اعدّ تنبيهات للنقص في المخزون، وقم بتصنيف منتجاتك.",
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
                <p className="m-0 lg:ps-12 leading-8 text-gray-500 dark:text-white/50">
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
