import useScrollAnimation from "../hooks/useScrollAnimation";

const HowItWorks = () => {
  const [sectionRef, isInView] = useScrollAnimation();

  const steps = [
    {
      number: "الخطوة 1",
      image: "./assets/img/step-1-img.png",
      description: "قم بالتسجيل في منصة دوينج وأنشئ متجرك بكل سهولة وسرعة.",
      class: "bg-black",
      classText: "text-gray-900 dark:text-white",
      style: {
        // backgroundColor: "#0d0d0d",
        color: "white",
      },
    },
    {
      number: "الخطوة 2",
      image: "./assets/img/step-2-img.png",
      description:
        "أضف منتجاتك مع صور جذابة وأوصاف احترافية ثم خصص تصميم المتجر.",
      classText: "text-gray-900 dark:text-white",
      class: "bg-black",
      style: {
        // backgroundColor: "hsl(240deg 5.17% 12.12%)",
        color: "white",
      },
    },
    {
      number: "الخطوة 3",
      image: "./assets/img/step-3-img.png",
      description:
        "قم بإعداد الدفع والشحن، ثم شارك متجرك مع جمهورك باستخدام أدوات التسويق و ابدأ البيع.",
      classText: "text-white",
      style: {
        backgroundColor: "#004e49",
        backgroundImage: "url(./assets/img/step-3-bg.jpg)",
        color: "white",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`site-section transition-all duration-700 md:translate-y-8 opacity-0 ${
        isInView ? "translate-y-0 opacity-100" : ""
      }`}
      id="how-it-works"
    >
      <div className="container relative w-full max-w-[1680px]">
        <div className="relative w-full overflow-hidden rounded-3xl bg-stone-200 dark:bg-neutral-800 px-5 py-20 md:px-8 lg:px-20 lg:py-24">
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
          <figure
            className="pointer-events-none absolute bottom-0 start-0 z-2 w-full max-w-none -translate-x-1/4"
            aria-hidden="true"
          >
            <img
              width="1602"
              height="2098"
              src="./assets/img/glow-3.png"
              alt="Glowing blob"
            />
          </figure>

          <div className="container mb-24 flex flex-wrap items-end justify-between gap-y-5 ">
            <div className="w-full lg:w-2/3 lg:pe-8">
              <h2 className="text-gray-900 dark:text-white text-[2rem]">
                خطوات للبدأ في تجارتك الإلكترونية ، ولا أسهل !
              </h2>
            </div>

            {/* <div className="w-full lg:w-1/3">
              <p className="mb-6 text-white/60">
                مهما كانت مرحلة مشروعك، نوّصلك اللي بعدها!
              </p>
            </div> */}
          </div>

          <div className="container grid grid-cols-3 gap-7 max-md:grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className={
                  "relative flex flex-col overflow-hidden rounded-3xl bg-cover bg-center px-10 py-10 transition-all hover:-translate-y-1 hover:shadow-xl " +
                  step.class
                }
                style={step.style}
              >
                <span
                  className={
                    "mb-5 text-[18px] font-semibold uppercase " + step.classText
                  }
                >
                  {step.number}
                </span>
                <figure className="my-auto">
                  <img
                    width="754"
                    height="606"
                    src={step.image}
                    alt={step.description}
                  />
                </figure>
                <div className={"mt-auto text-xl/7 " + step.classText}>
                  <p className="mb-0 mt-8">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center text-gray-900 dark:text-white">
            تريد أن ترى؟{" "}
            <a className="text-gray-900 dark:text-white hover:text-sky-500 hover:dark:text-sky-500 ms-1" href="#join">
              انضم إلى دوينج الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
