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
        "MagicAI uses the most popular AI models such as GPT, Dall-E, Ada to create text, image, code and more within seconds. The process is simple. All you have to do is provide a topic or idea, and our AI-based generator will take care of the rest.",
    },
    {
      id: "faq-2",
      question: "هل من السهل انشاء موقع الكتروني؟",
      answer:
        "نعم، توفر Doing عدة طرق مختلفة لإنشاء موقع إلكتروني مجاني خاص بك، بحيث يمكنك اختيار الطريقة التي تناسبك. اختر من بين ألكثير من القوالب المصممة ، أو استخدم أداة إنشاء المواقع الإلكترونية المدعومة بالذكاء الاصطناعي لإنشاء موقع جاهز للأعمال في وقت قصير باستخدام واجهة محادثة سهلة. يمكنك أيضًا البدء من الصفر باستخدام أداة البناء الخاصة بـ Doing للسحب والإفلات لإنشاء المواقع. بغض النظر عن الطريقة التي تختارها، يمكنك دائمًا الاستمرار في التخصيص باستخدام المحرر للحصول على حرية تصميم كاملة للموقع.",
    },
    {
      id: "faq-3",
      question: "ما هي أفضل خطة تناسب احتياجاتي؟",
      answer:
        "If you plan to charge end users for the final product or service. You should buy the extended license in compliance with Envato's terms of service same as other projects https://codecanyon.net/licenses/standard",
    },
    {
      id: "faq-4",
      question: "هل يمكنني شراء نطاق خاص بي؟",
      answer:
        "Yes! MagicAI's multilingual capabilities apply to both content generation and dashboard language. You can easily translate it into other languages. A built-in translation tool is coming soon!",
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
      <div className="container">
        <div className="relative w-full overflow-hidden rounded-3xl bg-black px-5 py-20 md:px-8 lg:flex lg:min-h-[70vh] lg:items-center lg:px-20 lg:py-36">
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

          <div className="relative z-2 flex w-full flex-wrap justify-between">
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
              <h2 className="mb-7 text-white">هل لديك سؤال؟</h2>
              <p className="m-0 text-white/70">
                "فريق الدعم لدينا جاهز لمساعدتك في أي استفسار يتعلق بإنشاء
                وإدارة متجرك الإلكتروني. نقدم إرشادات مخصصة لضمان نجاح أعمالك
                بكل سهولة."
              </p>
            </header>

            <div className="lqd-accordion flex w-full flex-col gap-7 lg:w-6/12">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="lqd-accordion-item group relative rounded-lg bg-black px-7"
                >
                  <button
                    onClick={() => handleAccordionClick(item.id)}
                    className={`group/btn peer flex w-full items-center justify-between py-7 text-start text-xl font-normal ${
                      activeAccordion === item.id ? "lqd-is-active" : ""
                    }`}
                  >
                    <span className="inline-block bg-gradient-to-r from-heading-foreground to-heading-foreground bg-clip-text text-transparent group-[&.lqd-is-active]/btn:from-gradient-from group-[&.lqd-is-active]/btn:to-gradient-to">
                      {item.question}
                    </span>
                    <div className="ms-3 text-primary">
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
                      <p className="text-xl/7 text-white/70">{item.answer}</p>
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
