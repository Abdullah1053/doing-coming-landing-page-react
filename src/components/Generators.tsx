import { useState } from "react";

import useScrollAnimation from "../hooks/useScrollAnimation";

const Generators = () => {
  const [activeTab, setActiveTab] = useState("ai-text-generator");
  const [sectionRef, isInView] = useScrollAnimation();

  const tabsData = [
    {
      id: "ai-text-generator",
      title: "انضم إلى منصة التُجار الأولى في اليمن ",
      description:
        "قصة نجاحك في تجارتك تبدأ اليوم أنشئ متجرك الخاص بدقائق واحصل على استضافة مجانية وابدأ انطلاقتك التجارية بمرونة.",
      iconClass: "fa-regular fa-bag-shopping",
      image:
        "./assets/img/generatorlist/R5dw-intelligent-writing-assistant-image.png",
      alt: "Generate, edit, export.",
    },
    {
      id: "ai-image-generator",
      title: "مـنصـات دفـع آمـنـة",
      description:
        "نوفر لك جميع وسائل الدفع بدءاً من التحويل البنكي والدفع عند الاستلام والدفع بالبطاقات الائتمانية (فيزا وماستر كارد) والدفع بواسطة المحافظ الإلكترونية",
      iconClass: "fa-regular fa-credit-card",
      image:
        "./assets/img/generatorlist/X6tD-create-eye-catching-images-and-graphics-image.png",
      alt: "Imagine, Genearate, Publish.",
    },
    {
      id: "ai-code-generator",
      title: "خيارات شحن متنوعة",
      description:
        "استخدم خيارات شحن مُتنوعة مع عملائك وبسعر مخفص خاص بمتجرك واشحن بكل بساطة",
      iconClass: "fa-light fa-cart-flatbed",
      image:
        "./assets/img/generatorlist/jO70-generate-high-quality-code-in-no-time-image.png",
      alt: "Fix. Improve. Generate.",
    },
    {
      id: "ai-chat-bot",
      title: "إدارة مخزون باحترافية",
      description:
        "ستتمكن من إدارة منتجاتك، مهما كان نوع هذه المنتجات سواءً منتجات جاهزة أو حسب الطلب أو منتجات رقمية وغيرها بكل سهولة",
      iconClass: "fa-light fa-boxes-stacked",
      image:
        "./assets/img/generatorlist/OSlG-meet-your-next-virtual-assistant-image.png",
      alt: "Chat, Solve, Repeat.",
    },
    {
      id: "ai-speech-to-text",
      title: "تقاريـر مبيعات فورية",
      description:
        "من خلال التقارير ستتمكن من الحصول على جميع المعلومات التي تحتاج إليها لمعرفة أداء المتجر واتخاذ أفضل القرارا",
      iconClass: "fa-light fa-chart-pie",
      image:
        "./assets/img/generatorlist/gHfo-transcribe-your-speech-into-text-image.png",
      alt: "Upload, Analyze, Generate.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`site-section transition-all duration-700 md:translate-y-8 opacity-0 ${
        isInView ? "translate-y-0 opacity-100" : ""
      }`}
      id="generators"
    >
      <div className="container relative w-full max-w-[1680px]">
        <header className="mx-auto mb-24 w-full text-center lg:w-4/5">
          <h2 className="mt-7 mb-7 text-gray-900 dark:text-white text-[2.5rem]">
            دوينج تفهمك وتلبي كل متطلباتك
          </h2>
          <p className="mt-10 mx-auto text-xl text-gray-600 dark:text-white/60">
            مهما كان مجال تجارتك صغير أو كبير ! معنا تقدر تبني متجرك الإلكتروني
            وتطلقه بكل ثقة
          </p>
        </header>

        <div className="relative w-full overflow-hidden rounded-3xl bg-stone-200 dark:bg-neutral-800 py-16 lg:pe-0">
          <figure
            className="pointer-events-none absolute start-1/2 top-0 z-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <img
              width="3110"
              height="1142"
              src="./assets/img/glow-1.png"
              alt="Glowing blob"
            />
          </figure>

          <div className="container lqd-tabs flex flex-wrap items-center justify-between gap-y-20">
            <div className="lqd-tabs-triggers flex flex-col gap-12 lg:w-4/12">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group/trigger text-start ${
                    activeTab === tab.id ? "lqd-is-active" : ""
                  }`}
                >
                  <span className="flex items-center gap-6 text-[24px] font-normal text-gray-900 dark:text-white/90 group-[&.lqd-is-active]/trigger:text-sky-500 dark:group-[&.lqd-is-active]/trigger:text-sky-500 md:text-[24px]">
                    <span className="w-8 text-gray-900 dark:text-white/90 group-[&.lqd-is-active]/trigger:text-sky-500 [&_i]:h-auto [&_i]:w-full">
                      <i className={tab.iconClass} ></i>
                    </span>
                    {tab.title}
                  </span>
                  <span className="mt-7 hidden leading-8 text-gray-600 dark:text-white/60 group-[&.lqd-is-active]/trigger:text-gray-600 dark:group-[&.lqd-is-active]/trigger:text-white/60 group-[&.lqd-is-active]/trigger:block lg:ps-14">
                    {tab.description}
                  </span>
                  <img
                    className="mt-10 hidden w-full max-lg:group-[&.lqd-is-active]/trigger:block"
                    width="878"
                    height="748"
                    src={tab.image}
                    alt={tab.alt}
                  />
                </button>
              ))}
            </div>
            <div className="lqd-tabs-content-wrap max-lg:hidden lg:w-7/12">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`lqd-tabs-content ${
                    activeTab === tab.id ? "" : "hidden"
                  }`}
                  id={tab.id}
                >
                  <figure className="w-full lg:flex lg:justify-end">
                    <img
                      className="w-full"
                      width="878"
                      height="748"
                      src={tab.image}
                      alt={tab.alt}
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generators;
