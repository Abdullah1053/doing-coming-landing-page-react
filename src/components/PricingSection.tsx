import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const PricingSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("pricing-monthly");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderCheckIcon = () => (
    <svg
      className="size-5"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );

  const renderPricingCard = (plan) => (
    <div
      className={`relative flex flex-col items-start rounded-3xl px-10 py-10 text-start transition-all md:hover:-translate-y-1 md:hover:scale-[1.025] lg:py-12 ${
        plan.featured ? "bg-[#0d0d0d]" : "bg-black"
      }`}
    >
      <h5 className="gradient-text relative mb-6 inline-block text-xs font-medium uppercase">
        {plan.name}
      </h5>

      <p className="mb-7 text-sm text-white">
        <small className="font-heading text-[24px] font-bold leading-none text-white">
          $
        </small>
        <span className="align-sub font-heading text-[50px] font-bold leading-none text-white">
          {plan.price}
        </span>
        <span className="text-white/70">/ mo</span>
      </p>

      <hr className="w-full opacity-10" />

      <ul className="mb-12 mt-8 flex flex-col gap-6 text-base text-white/80">
        {plan.features.map((feature, index) => (
          <li key={index} className="group flex items-center">
            <span className="size-7 me-5 inline-grid shrink-0 place-content-center rounded-full bg-white/10 text-white transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              {renderCheckIcon()}
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        className="relative mx-auto inline-flex w-full max-w-[400px] gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r   from-blue-300 to-blue-500 to-50% py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20
            
            "
        href={plan.link}
      >
        <span className="flex w-full justify-center text-center">
          Select {plan.name}
        </span>
      </a>

      {plan.featured && (
        <div className="pointer-events-none absolute inset-[1px] overflow-hidden rounded-[inherit]">
          <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 inset-0">
            <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
          </span>
          <figure
            className="pointer-events-none absolute bottom-0 end-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <img
              width="920"
              height="1250"
              src="./assets/img/glow-4.png"
              alt="Glowing blob"
            />
          </figure>
        </div>
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`site-section py-20 transition-all duration-700 md:translate-y-8 ${
        isInView ? "translate-y-0 opacity-100" : "md:opacity-0"
      } lg:pb-24 lg:pt-16`}
      id="pricing"
    >
      <div className="container">
        <header className="mx-auto mb-14 w-full text-center lg:w-4/5">
          <h2 className="mb-7 text-white">باقات المنصة</h2>
          <p className="mx-auto mb-4 text-xl/7 text-white/70 lg:w-9/12">
            تقدم منصة دوينج الأدوات التي تحتاجها لإنشاء وإدارة متجرك الإلكتروني
            بكل سهولة. سواء كنت مبتدئًا أو محترفًا، نحن هنا لمساعدتك على تحقيق
            أهدافك التجارية."
          </p>
        </header>

        <div className="lqd-tabs flex flex-wrap justify-center">
          <div className="lqd-tabs-triggers mx-auto mb-24 inline-flex flex-wrap justify-between gap-3 rounded-2xl border border-white/5 p-2 max-sm:w-full md:rounded-full">
            <button
              onClick={() => handleTabClick("pricing-monthly")}
              className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 text-white/60 hover:text-white hover:scale-105 ${
                activeTab === "pricing-monthly" ? "bg-white/10 !text-white" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleTabClick("pricing-annual")}
              className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 text-white/60 hover:text-white hover:scale-105 ${
                activeTab === "pricing-annual" ? "bg-white/10 !text-white" : ""
              }`}
            >
              Annual
              <span className="inline-block whitespace-nowrap sm:absolute sm:start-full sm:top-full sm:-ms-8 sm:-mt-3">
                <svg
                  className="hidden sm:block"
                  width="47"
                  height="46"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.8997 35.5451C38.6779 30.8257 39.7313 22.2844 35.7741 15.4534C31.7445 8.50007 23.5368 3.74357 15.6021 3.18595C13.9493 3.07156 13.9201 5.46425 15.4908 5.70592C22.3526 6.76467 28.9555 10.3708 32.8756 16.1974C34.5922 18.7174 35.472 21.7138 35.3903 24.7619C35.3023 28.7603 33.1058 31.5792 30.786 34.578C30.2272 35.2991 31.2777 35.973 31.8997 35.5451Z"
                    fill="#7A7A82"
                  />
                  <path
                    d="M26.3384 41.8928C29.7673 40.4384 33.6864 39.0622 36.2755 36.255C36.3726 36.1596 36.4293 36.0304 36.4337 35.8942C36.4382 35.7581 36.3901 35.6255 36.2994 35.5239C36.2087 35.4223 36.0824 35.3595 35.9466 35.3485C35.8109 35.3375 35.6761 35.3792 35.5703 35.465C32.8124 37.4495 29.8117 38.7152 26.671 39.8905C26.4539 37.7175 26.5834 35.4544 26.0356 33.3528C25.9875 33.1644 25.8741 32.9993 25.7157 32.8867C25.5572 32.7741 25.364 32.7214 25.1703 32.738C24.9766 32.7545 24.7951 32.8393 24.6581 32.9771C24.521 33.1149 24.4373 33.2969 24.4219 33.4907C24.2762 36.1049 24.4961 38.7267 25.0754 41.2801C25.1068 41.4106 25.1668 41.5325 25.251 41.637C25.3351 41.7416 25.4414 41.8262 25.5622 41.8847C25.6829 41.9433 25.8152 41.9744 25.9494 41.9758C26.0836 41.9772 26.2164 41.9489 26.3384 41.8928Z"
                    fill="#7A7A82"
                  />
                </svg>
                <span className="gradient-text inline-block">Save 30%</span>
              </span>
            </button>
            <button
              onClick={() => handleTabClick("pricing-lifetime")}
              className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 text-white/60 hover:text-white hover:scale-105 ${
                activeTab === "pricing-lifetime"
                  ? "bg-white/10 !text-white"
                  : ""
              }`}
            >
              Lifetime
            </button>
            <button
              onClick={() => handleTabClick("pricing-prepaid")}
              className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 text-white/60 hover:text-white hover:scale-105 ${
                activeTab === "pricing-prepaid" ? "bg-white/10 !text-white" : ""
              }`}
            >
              Pre-Paid
            </button>
          </div>

          <div className="lqd-tabs-content-wrap w-full px-10 max-xl:px-0">
            <div className="lqd-tabs-content">
              <div
                id="pricing-monthly"
                className={activeTab === "pricing-monthly" ? "" : "hidden"}
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {renderPricingCard({
                    name: "Free",
                    price: "0",
                    features: [
                      "ChatGPT 3.5",
                      "Basic Support",
                      "10,000 Word Tokens",
                      "5,000 Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=3",
                  })}
                  {renderPricingCard({
                    name: "Teams",
                    price: "19",
                    features: [
                      "ChatGPT 4",
                      "5 Seats Available",
                      "VIP Support",
                      "Access to premium templates",
                      "30,000 Word Tokens",
                      "10,000 Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=4",
                  })}
                  {renderPricingCard({
                    name: "Premium",
                    price: "29",
                    featured: true,
                    features: [
                      "2 Days of free trial.",
                      "All features in previous plans",
                      "VIP Support",
                      "Unlimited Word Tokens",
                      "Unlimited Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=2",
                  })}
                </div>
              </div>
              <div
                id="pricing-annual"
                className={activeTab === "pricing-annual" ? "" : "hidden"}
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {renderPricingCard({
                    name: "Basic",
                    price: "399",
                    featured: true,
                    features: [
                      "ChatGPT 3.5",
                      "Basic Support",
                      "100,000 Word Tokens",
                      "50,000 Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=5",
                  })}
                </div>
              </div>
              <div
                id="pricing-prepaid"
                className={activeTab === "pricing-prepaid" ? "" : "hidden"}
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {renderPricingCard({
                    name: "Standard",
                    price: "199",
                    featured: true,
                    features: [
                      "ChatGPT 4",
                      "VIP Support",
                      "Access to premium templates",
                      "300,000 Word Tokens",
                      "100,000 Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=6",
                  })}
                  {renderPricingCard({
                    name: "Premium",
                    price: "299",
                    features: [
                      "All features in previous plans",
                      "VIP Support",
                      "Unlimited Word Tokens",
                      "200 Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=1",
                  })}
                </div>
              </div>
              <div
                id="pricing-lifetime"
                className={activeTab === "pricing-lifetime" ? "" : "hidden"}
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {renderPricingCard({
                    name: "Lifetime Premium",
                    price: "960",
                    featured: true,
                    features: [
                      "Access All Templates",
                      "Generate Images",
                      "Generate Text",
                      "AI Chat",
                      "Access AI Chat Templates",
                      "VIP Support",
                      "Unlimited Word Tokens",
                      "Unlimited Image Tokens",
                    ],
                    link: "https://dark.projecthub.ai/register?plan=7",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
