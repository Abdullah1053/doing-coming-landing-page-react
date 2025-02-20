import { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useOutletContext } from "react-router-dom";

// PricingCard is rendered as a controlled component.
// It receives whether it's activated and an onActivate handler from the parent.
const PricingCard = ({ plan, activated, onActivate }) => {
  // Get darkMode from the outlet context.
  const { darkMode } = useOutletContext() as { darkMode: boolean };
  // If darkMode is true, use the '-dark' variant; otherwise, use '-white'

  // Listen for window resize events to detect layout changes.
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // State to trigger bounce animation on the image.
  const [shouldBounce, setShouldBounce] = useState(false);

  // Clear the bounce animation class after it has run.
  useEffect(() => {
    if (shouldBounce) {
      const timer = setTimeout(() => {
        setShouldBounce(false);
      }, 500); // duration should match your animation (500ms here)
      return () => clearTimeout(timer);
    }
  }, [shouldBounce]);

  // Call onActivate with a unique id (here we use plan.render) when clicked.
  const handleActivate = () => {
    if (!activated) {
      onActivate(plan.render);
    }
    setShouldBounce(true);
  };

  return (
    <div
      onClick={handleActivate}
      className={`plan-card item relative mr-14 flex aspect-[0.7372] w-[390px] flex-shrink-0 cursor-pointer snap-center flex-col rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[28px] pb-[25px] text-white transition-all duration-200 lg:mr-12 md:w-[366px] sm:mr-5 sm:w-[91%] sm:max-w-[366px] sm:p-[18px] xs:w-[288px] ${
        plan.featured ? "bg-stone-100 dark:bg-white/20" : "bg-stone-100 dark:bg-white/20"
      }`}
      style={{ background: "unset" }}
    >
      <div className="md:hover:-translate-y-1 md:hover:scale-[1.025]  w-[100%]">
        <h3 className="text-20 font-semibold leading-snug tracking-tight sm:text-16">
          {plan.name}
        </h3>

        <p className="mt-2.5 leading-snug">
          <span className="text-64 font-semibold tracking-tight lg:text-56 md:text-48 sm:text-36">
            {plan.price}ريال
          </span>
          <span className="ml-1 text-20 font-medium tracking-tight text-grey-80 sm:text-16">
            /شهرياً
          </span>
        </p>

        <p className="mt-1 pr-3 text-18 leading-snug -tracking-[0.03em] md:mt-0 sm:pr-0 sm:text-16">
          {plan.description || "Best for large multiple teams that need maximum capabilities."}
        </p>

        <span
          className="mt-[18px] block h-px bg-[rgba(255,255,255,0.10)] sm:mt-4"
          aria-hidden="true"
        ></span>

        <ul className="mt-6 flex flex-col gap-y-4 lg:mt-8 md:mt-7 sm:mt-4 sm:gap-y-3">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight"
            >
              <img
                alt=""
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS44MjkiIGQ9Im0xMy4zMyA0LTcuMzMzIDcuMzMzTDIuNjY0IDgiLz48L3N2Zz4="
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Only render video and image if this card is activated */}
      {activated && (
        <>
          <div className="pointer-events-auto select-auto rounded-[inherit]">
            <div
              className="absolute -left-[69%] -top-[217px] -z-20 aspect-[0.925925] w-[943px] rounded-[inherit] md:-top-[275px] md:w-[932px] sm:-left-[68.666%] sm:-top-[45%] sm:w-[255%]"
              style={{ opacity: 1 }}
            >
              <div className="absolute -inset-0">
                <video
                  // The key will update when layout (window width) or darkMode changes
                  className="absolute inset-0 overflow-hidden"
                  width="1000"
                  height="1080"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{ opacity: 1 }}
                >
                  <source
                    src={`/assets/videos/${plan.render}.webm`}
                    type="video/webm"
                  />
                </video>
                <div className="position-absolute top-100 start-100 translate-middle">
                  <img src="/assets/img/svg/dark-mode-icon.svg" alt="Dark mode icon" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-auto absolute -inset-px -z-10 select-auto rounded-[inherit] opacity-0 [backdrop-filter:blur(1px)] sm:rounded-[18px]"
            style={{ opacity: 1 }}
          >
            <img
              onClick={(e) => {
                e.stopPropagation(); // avoid re-triggering the card's click
                setShouldBounce(true);
              }}
              className={`plan-image ${shouldBounce ? "animate-bounce-once" : ""}`}
              alt=""
              loading="lazy"
              width="391"
              height="530"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={`/assets/img/svg/${plan.render}.svg`}
            />
          </div>
        </>
      )}
    </div>
  );
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
      plan.featured ? "bg-stone-100 dark:bg-white/20" : "bg-stone-100 dark:bg-white/20"
    }`}
  >
    <h5 className="gradient-text relative mb-6 inline-block text-xs font-medium uppercase">
      {plan.name}
    </h5>

    <p className="mb-7 text-sm text-gray-900 dark:text-white">
      <span className="align-sub font-heading text-[50px] font-bold leading-none text-gray-900 dark:text-white">
        {plan.price}
      </span>
      <small className="font-heading mr-2 text-[24px] font-bold leading-none text-gray-900 dark:text-white">
        ريال
      </small>
      <span className="text-gray-700 dark:text-white/70"> / شهرياً</span>
    </p>

    <hr className="w-full opacity-10" />

    <div className="relative mt-8 flex flex-col justify-between flex-grow">
      <ul className="mb-12 mt-8 flex flex-col gap-6 text-base text-gray-900 dark:text-white/80">
        {plan.features.map((feature, index) => (
          <li key={index} className="group flex items-center">
            <span className="size-7 me-5 inline-grid shrink-0 place-content-center rounded-full bg-secondary text-white transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              {renderCheckIcon()}
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        className="relative mx-auto inline-flex w-full max-w-[400px] gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r   from-sky-600 to-sky-700 to-50% py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
        href={plan.link}
      >
        <span className="flex w-full justify-center text-center">
          {plan.button}
        </span>
      </a>
    </div>

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

const PricingSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("pricing-monthly");

  const { darkMode } = useOutletContext() as { darkMode: boolean };
  // Track the active card for each tab.
  // On page load, the default card for monthly ("common") and annual ("legendary") are active.
  const [monthlyActivePlan, setMonthlyActivePlan] = useState("common");
  const [annualActivePlan, setAnnualActivePlan] = useState("legendary");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>

    {darkMode ? (
      <section
        ref={sectionRef}
        className={`site-section py-20 transition-all duration-700 md:translate-y-8 pricing-dark overflow-x-hidden overflow-y-hidden ${
          isInView ? "translate-y-0 opacity-100" : "md:opacity-0"
        } lg:pb-24 lg:pt-16`}
        id="pricing"
      >
        <div className="container relative w-full max-w-[1680px]">
          <header className="container mx-auto mb-14 w-full text-center lg:w-4/5">
            <h2 className="mb-7 text-gray-900 dark:text-white text-[3rem]">باقات المنصة</h2>
            <p className="mx-auto mb-4 text-xl/12 text-gray-700 dark:text-white/70 lg:w-9/12">
              باقات مصممة خصيصًا لتتناسب مع تطلعات وإمكانية كل تاجر، اختر الي يناسبك وانطلق مع متجر إلكتروني متكامل
            </p>
          </header>

          <div className="container lqd-tabs flex flex-wrap justify-center">
            <div className="lqd-tabs-triggers mx-auto mb-24 inline-flex flex-wrap justify-between gap-3 rounded-2xl p-2 bg-stone-100 dark:bg-white/20 max-sm:w-full md:rounded-full">
              <button
                onClick={() => handleTabClick("pricing-monthly")}
                className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 hover:scale-105 ${
                  activeTab === "pricing-monthly" ? "bg-stone-200 text-gray-900" : ""
                }`}
              >
                شهري
              </button>
              <button
                onClick={() => handleTabClick("pricing-annual")}
                className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 hover:scale-105 ${
                  activeTab === "pricing-annual" ? "bg-stone-200 text-gray-900" : ""
                }`}
              >
                سنوي
                <span className="inline-block whitespace-nowrap sm:absolute sm:start-full sm:top-full sm:-ms-24 sm:-mt-1">
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
                  <span className="gradient-text inline-block">وفر 20%</span>
                </span>
              </button>
            </div>

            <div className="container lqd-tabs-content-wrap w-full px-10 max-xl:px-0">
              <div className="lqd-tabs-content">
                <div id="pricing-monthly" className={activeTab === "pricing-monthly" ? "" : "hidden"}>
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    <PricingCard
                      plan={{
                        name: 'الباقة المجانية " للبدأ "',
                        price: "0",
                        render: "common",
                        features: [
                          "عدد المنتجات 30 منتج",
                          "طلبات لا محدودة",
                          "عملاء لا محدودين",
                          "خدمة عملاء على مدار اليوم",
                          "إمكانية تصدير واستيراد المنتجات",
                          'خيارات الشحن والتوصيل "مستعجل"',
                        ],
                        button: "اختر المجاني",
                        link: "https://dark.projecthub.ai/register?plan=3",
                      }}
                      activated={monthlyActivePlan === "common"}
                      onActivate={setMonthlyActivePlan}
                    />
                    <PricingCard
                      plan={{
                        name: ' الباقة المتقدمة " لنمو التجار " ',
                        price: "16,600",
                        render: "rare",
                        features: [
                          "عدد لا محدود من المنتجات والطلبات والعملاء",
                          "الدفع الإلكتروني وربط مع شركات الشحن",
                          "التقارير المتقدمة: تحليل شامل لأداء متجرك",
                          "خيارات تصميم مرنة مخصصة للمتجر مع إمكانية اختيار ثيم جاهز",
                          "(One-Page Checkout) تجربة شراء سهلة وسريعة للعملاء",
                          "كوبونات التخفيض المتقدمة والسلات المتروكة ",
                        ],
                        button: "اختر الباقة",
                        link: "https://dark.projecthub.ai/register?plan=4",
                      }}
                      activated={monthlyActivePlan === "rare"}
                      onActivate={setMonthlyActivePlan}
                    />
                    <PricingCard
                      plan={{
                        name: ' الباقة الاحترافية "لتُجار الأعمال الكبرى " ',
                        price: "44,000",
                        render: "epic",
                        features: [
                          "كوبونات تخفيض وحملات تسويقية عبر SMS",
                          "تحسين محركات البحث SEO",
                          "عدد لا محدود من المنتجات والعملاء",
                          "الدفع الإلكتروني و الربط مع شركات الشحن",
                          "التقارير المتقدمة وGoogle Tag Manager",
                          "إمكانية تخصيص التصميم باستخدام Custom CSS",
                          "استعادة البيانات المحذوفة ووضع الصيانة",
                          "ربط مع خدمات الإعلانات مثل Google Ads و Facebook Ads",
                          "إعدادات متقدمة للعملاء والطلبات",
                        ],
                        button: "الباقة الاحترافية \"التاجر المحترف\"",
                        link: "https://dark.projecthub.ai/register?plan=2",
                      }}
                      activated={monthlyActivePlan === "epic"}
                      onActivate={setMonthlyActivePlan}
                    />
                  </div>
                </div>
                <div id="pricing-annual" className={activeTab === "pricing-annual" ? "" : "hidden"}>
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    <PricingCard
                      plan={{
                        name: "Basic",
                        price: "399",
                        render: "rare",
                        features: [
                          "ChatGPT 3.5",
                          "Basic Support",
                          "100,000 Word Tokens",
                          "50,000 Image Tokens",
                        ],
                        link: "https://dark.projecthub.ai/register?plan=5",
                      }}
                      activated={annualActivePlan === "rare"}
                      onActivate={setAnnualActivePlan}
                    />
                    <PricingCard
                      plan={{
                        name: "Basic",
                        price: "399",
                        render: "legendary",
                        features: [
                          "ChatGPT 3.5",
                          "Basic Support",
                          "100,000 Word Tokens",
                          "50,000 Image Tokens",
                        ],
                        link: "https://dark.projecthub.ai/register?plan=5",
                      }}
                      activated={annualActivePlan === "legendary"}
                      onActivate={setAnnualActivePlan}
                    />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section
        ref={sectionRef}
        className={`site-section py-20 transition-all duration-700 md:translate-y-8 overflow-x-hidden overflow-y-hidden ${
          isInView ? "translate-y-0 opacity-100" : "md:opacity-0"
        } lg:pb-24 lg:pt-16`}
        id="pricing"
      >
        <div className="container relative w-full max-w-[1680px]">
          <header className="container mx-auto mb-14 w-full text-center lg:w-4/5">
            <h2 className="mb-7 text-gray-900 dark:text-white text-[3rem]">باقات المنصة</h2>
            <p className="mx-auto mb-4 text-xl/12 text-gray-700 dark:text-white/70 lg:w-9/12">
              {" "}
              باقات مصممة خصيصًا لتتناسب مع تطلعات وإمكانية كل تاجر، اختر الي
              يناسبك وانطلق مع متجر إلكتروني متكامل
            </p>
          </header>

          <div className="container lqd-tabs flex flex-wrap justify-center">
            <div className="lqd-tabs-triggers mx-auto mb-24 inline-flex flex-wrap justify-between gap-3 rounded-2xl border border-white/3 p-2 max-sm:w-full md:rounded-full">
              <button
                onClick={() => handleTabClick("pricing-monthly")}
                className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 hover:scale-105 ${
                  activeTab === "pricing-monthly" ? "bg-stone-200 text-gray-900" : ""
                }`}
              >
                شهري
              </button>
              <button
                onClick={() => handleTabClick("pricing-annual")}
                className={`group/trigger flex relative max-sm:grow text-center justify-center text-base gap-2 px-3 py-3.5 rounded-full transition-all md:px-8 hover:scale-105 ${
                  activeTab === "pricing-annual" ? "bg-stone-200 text-gray-900" : ""
                }`}
              >
                سنوي
                <span className="inline-block whitespace-nowrap sm:absolute sm:start-full sm:top-full sm:-ms-24 sm:-mt-1">
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
                  <span className="gradient-text inline-block">وفر 30%</span>
                </span>
              </button>
            </div>

            <div className="container lqd-tabs-content-wrap w-full px-10 max-xl:px-0">
              <div className="lqd-tabs-content">
                <div
                  id="pricing-monthly"
                  className={activeTab === "pricing-monthly" ? "" : "hidden"}
                >
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {renderPricingCard({
                      name: 'الباقة المجانية " للبدأ "',
                      price: "0",
                      features: [
                        "عدد المنتجات 30 منتج",
                        "طلبات لا محدودة",
                        "عملاء لا محدودين",
                        "خدمة عملاء على مدار اليوم",
                        "إمكانية تصدير واستيراد المنتجات",
                        'خيارات الشحن والتوصيل "مستعجل"',
                      ],
                      button: "اختر المجاني",
                      link: "https://dark.projecthub.ai/register?plan=3",
                    })}
                    {renderPricingCard({
                      name: ' الباقة المتقدمة " لنمو التجار " ',
                      price: "16,600",
                      features: [
                        "عدد لا محدود من المنتجات والطلبات والعملاء",
                        "الدفع الإلكتروني وربط مع شركات الشحن",
                        "التقارير المتقدمة: تحليل شامل لأداء متجرك",
                        "خيارات تصميم مرنة مخصصة للمتجر مع إمكانية اختيار ثيم جاهز",
                        "(One-Page Checkout) تجربة شراء سهلة وسريعة للعملاء",
                        "كوبونات التخفيض المتقدمة والسلات المتروكة ",
                      ],
                      button: "اختر الباقة",
                      link: "https://dark.projecthub.ai/register?plan=4",
                    })}
                    {renderPricingCard({
                      name: ' الباقة الاحترافية "لتُجار الأعمال الكبرى " ',
                      price: "44,000",
                      featured: true,
                      features: [
                        "كوبونات تخفيض وحملات تسويقية عبر SMS",
                        "تحسين محركات البحث SEO",
                        "عدد لا محدود من المنتجات والعملاء",
                        "الدفع الإلكتروني و الربط مع شركات الشحن",
                        "التقارير المتقدمة وGoogle Tag Manager",
                        "إمكانية تخصيص التصميم باستخدام Custom CSS",
                        "استعادة البيانات المحذوفة ووضع الصيانة",
                        "ربط مع خدمات الإعلانات مثل Google Ads و Facebook Ads",
                        "إعدادات متقدمة للعملاء والطلبات",
                      ],
                      button: "الباقة الاحترافية \"التاجر المحترف\"",
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
    </>

  );
};

export default PricingSection;
