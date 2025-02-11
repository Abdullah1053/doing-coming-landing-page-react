import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FaqSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: "faq-1",
      question: "كيف أبدأ في إنشاء متجري الإلكتروني؟",
      answer:
        "مع منصة دوينج، بداية متجرك الإلكتروني ولا ابسط منها. كل ما عليك هو التسجيل بياناتك، تخصيص متجرك، وبدء إضافة منتجاتك. إن واجهتك مشكلة فريقنا في انتظارك لمساعدتك",
    },
    {
      id: "faq-2",
      question: "هل من السهل انشاء موقع الكتروني؟",
      answer:
        "مع أدواتنا المتطورة، يمكنك إنشاء متجرك الإلكتروني بدون الحاجة لأي خبرات تقنية، فقط اختر التصميم الذي يعكس هويتك وأضف منتجاتك، وابدأ في عرض أعمالك للعالم بكل سهولة.",
    },
    {
      id: "faq-3",
      question: "ما هي أفضل خطة تناسب احتياجاتي؟",
      answer:
        "من الباقات الأساسية للمبتدئين إلى الباقات الاحترافية لرواد الأعمال المتميزين، لدينا كل ما تحتاجه لتطوير عملك. اختر الخطة الأنسب لك، واترك الباقي علينا لتوفير كل الأدوات التي تحتاجها.",
    },
    {
      id: "faq-4",
      question: "هل يمكنني شراء نطاق خاص بي؟",
      answer:
        "نعم، يمكنك شراء نطاق خاص بك بكل سهولة. احصل على اسم مميز يعكس هوية متجرك، وابدأ في التميز في العالم الرقمي بكل احترافية.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`site-section py-20 transition-all duration-700 md:translate-y-8 ${
        isInView ? "translate-y-0 opacity-100" : "md:opacity-0"
      } lg:py-36 lg:pb-24 lg:pt-16`}
      id="faq"
    >
      <div className="container relative w-full max-w-[1680px]">
        <div className="relative w-full overflow-hidden rounded-3xl bg-stone-100 dark:bg-white/20 px-5 py-20 md:px-8 lg:flex lg:min-h-[70vh] lg:items-center lg:px-20 lg:py-36">
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

          <div className="container relative z-2 flex w-full flex-wrap justify-between">
            <header className="mb-7 w-full lg:w-5/12">
              <h6 className="relative mb-12 inline-flex translate-y-6 items-center gap-1.5 overflow-hidden rounded-full bg-secondary px-5 py-2 text-secondary-foreground shadow-xs shadow-primary">
                <svg
                  strokeWidth="1.5"
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                  <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>{" "}
                الأسئلة المتداولة
              </h6>
              <h2 className="mb-7 text-gray-900 dark:text-white text-[2.3rem]">عندك سؤال ؟ احصل على المساعدة</h2>
              <p className="m-0 text-gray-600 dark:text-white/60">
                "فريق خدمة التُجار مستعد للإجابة عن جميع الأسئلة والاستفسارات يُسعدنا تواصلكم معنا."
              </p>
            </header>

            <div className="lqd-accordion flex w-full flex-col gap-7 lg:w-6/12">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="lqd-accordion-item group relative rounded-lg bg-stone-300 dark:bg-black px-7"
                >
                  <button
                    onClick={() => handleAccordionClick(item.id)}
                    className={`group/btn peer flex w-full items-center justify-between py-7 text-start text-xl font-normal ${
                      activeAccordion === item.id ? "lqd-is-active" : ""
                    }`}
                  >
                    <span className="inline-block bg-gradient-to-r from-heading-foreground to-heading-foreground bg-clip-text group-[&.lqd-is-active]/btn:from-gradient-from group-[&.lqd-is-active]/btn:to-gradient-to">
                      {item.question}
                    </span>
                    <div className="ms-3 text-gray-900 dark:text-cyan-500">
                      {activeAccordion === item.id ? (
                        <svg
                          className="size-6"
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
                          <path d="M6 15l6 -6l6 6" />
                        </svg>
                      ) : (
                        <svg
                          className="size-6"
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
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      )}
                    </div>
                  </button>

                  <span
                    className={`lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 transition-opacity ${
                      activeAccordion === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                  </span>

                  <div
                    className={activeAccordion === item.id ? "block" : "hidden"}
                  >
                    <div className="lqd-accordion-content pb-7">
                      <p className="text-xl/7 text-gray-700 dark:text-white/70">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
