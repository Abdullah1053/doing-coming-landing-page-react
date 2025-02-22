import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ToolsSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("tools-payment-gateways");

  const tabs = [
    {
      id: "tools-payment-gateways",
      label: "تجارة إلكترونية",
      image: "./assets/img/tools/payment-gateways.jpg",
      title: "تجارة إلكترونية",
      description:
        "Securely process credit card or other electronic payment methods.",
    },
    {
      id: "tools-multilingual",
      label: "اعمال",
      image: "./assets/img/tools/multilingual.jpg",
      title: "اعمال",
      description:
        "Ability to understand and generate content in different languages.",
    },
    {
      id: "tools-affiliate-system",
      label: "مطاعم",
      image: "./assets/img/tools/affiliate-system.jpg",
      title: "مطاعم",
      description:
        "Ability to invite friends, and earn commission from their first purchase.",
    },
    {
      id: "tools-easy-export",
      label: "مدونة",
      image: "./assets/img/tools/easy-export.jpg",
      title: "مدونة",
      description:
        "Export generated content as plain text, PDF, Word or HTML easily.",
    },
    {
      id: "tools-support-platform",
      label: "منظمات خيرية",
      image: "./assets/img/tools/support-platform.jpg",
      title: "منظمات خيرية",
      description: "Access and mage support tickets from your dashboard.",
    },
  ];

  const renderTabContent = (tab) => (
    <div
      key={tab.id}
      id={tab.id}
      className={activeTab === tab.id ? "" : "hidden"}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 gap-y-14">
        <figure className="w-full h-[400px]">
          <img
            className="w-full h-full object-cover rounded-3xl transition-all hover:scale-105"
            src={tab.image}
            alt={tab.label}
            width="696"
            height="426"
          />
        </figure>

      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`site-section py-20 transition-all duration-700 md:translate-y-8 opacity-0 lg:pb-24 lg:pt-16 ${
        isInView ? "translate-y-0 opacity-100" : ""
      }`}
    >
      <div className="container">
        <header className="mx-auto mb-20 w-full text-center lg:w-4/5">
          <h2 className="mb-7 text-gray-900 dark:text-white text-[3rem]">قيمة استثنائية لتجارتك</h2>
          <p className="m-0 mx-auto text-xl/12 text-gray-600 dark:text-white/60 lg:w-9/12">
            أدواتنا تدعمك في بناء تجربة مميزة تعزز ولاء العملاء ، تحقق لك مبيعات
            وتبنيّ لك مستقبل تجاري استثنائي.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="lqd-tabs flex flex-col gap-3 rounded-3xl p-2 lg:flex-nowrap lg:rounded-full md:w-1/4 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                data-target={`#${tab.id}`}
                className={`group/trigger flex text-base max-sm:w-full px-3 py-3.5 rounded-2xl max-mdbasis-1/3 max-md:grow text-center justify-center transition-all md:px-8  hover:scale-105 ${
                  activeTab === tab.id
                    ? "lqd-is-active bg-stone-100 dark:bg-white/20 text-gray-900 dark:text-white"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mb-14 md:w-3/4">{tabs.map((tab) => renderTabContent(tab))}</div>

        </div>

      </div>
    </section>
  );
};

export default ToolsSection;
