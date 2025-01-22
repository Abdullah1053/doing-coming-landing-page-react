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
        <figure className="w-full lg:w-6/12">
          <img
            className="w-full rounded-3xl transition-all hover:scale-105"
            src={tab.image}
            alt={tab.label}
            width="696"
            height="426"
          />
        </figure>

        <div className="w-full lg:w-5/12">
          <h3 className="mb-10 text-white">{tab.title}</h3>
          <p className="mb-10 text-white/80">{tab.description}</p>

          <div className="flex flex-wrap items-center gap-8 text-sm">
            <a
              className="relative inline-flex w-56 gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 to-50% py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              href="https://codecanyon.net/item/magicai-openai-content-text-image-chat-code-generator-as-saas/45408109"
            >
              <span
                className="flex animate-marquee justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]"
                data-txt="Start Making Money"
              >
                Start Making Money
              </span>
              <span
                className="absolute start-3 top-5 flex animate-marquee-2 justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]"
                data-txt="Start Making Money"
              >
                Start Making Money
              </span>
            </a>
            <a
              className="group/btn flex items-center gap-2 text-white/80 transition-colors hover:text-primary"
              href="index.html#templates"
            >
              Discover MagicAI
              <i className="fa-solid fa-chevron-left"></i>
            </a>
          </div>
        </div>
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
          <h2 className="mb-7 text-white">Magic Tools.</h2>
          <p className="m-0 mx-auto text-xl/7 text-white/80 lg:w-9/12">
            Glide gives you the powers of a developer and a code — for designer
            to create remarkable tools that solve your most challenging business
            problems.
          </p>
        </header>

        <div className="mb-14">{tabs.map((tab) => renderTabContent(tab))}</div>

        <div className="lqd-tabs flex flex-wrap justify-between gap-3 rounded-3xl border border-white/5 p-2 lg:flex-nowrap lg:rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-target={`#${tab.id}`}
              className={`group/trigger flex text-base max-sm:w-full px-3 py-3.5 rounded-full max-mdbasis-1/3 max-md:grow text-center justify-center transition-all md:px-8 text-white/60 hover:text-white hover:scale-105 ${
                activeTab === tab.id
                  ? "lqd-is-active bg-heading-foreground/10 !text-white"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
