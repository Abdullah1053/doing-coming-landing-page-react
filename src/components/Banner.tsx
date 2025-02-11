import { useState, useEffect, useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  theme: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const Banner = ({ theme }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const [sectionRef, isSectionRef] = useScrollAnimation();
  const image1Ref = useRef(null);
  const box1Ref = useRef(null);
  const sectionRef = useRef(null);

  const rotatingTexts = ["متجرك الإلكتورني", "موقعك الخاص", "مدونتك"];

  useEffect(() => {
    // Set initial in-view state
    setIsInView(true);

    // Setup text rotation
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    // Setup image animation
    // if (window.innerWidth > 1024) {
    //   const image1 = image1Ref.current;
    //   const box1 = box1Ref.current;
    //   const originalSrc1 = image1.src;
  
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 5%",
    //       end: "+=500px",
    //       scrub: 2,
    //       onUpdate: (self) => {
    //         const halfwayProgress = 0.2;
  
    //         if (self.progress >= halfwayProgress && image1.dataset.changed !== "true") {
    //           image1.src = "./assets/img/faza1.png";
    //           image1.dataset.changed = "true";
    //         } else if (self.progress < halfwayProgress && image1.dataset.changed !== "false") {
    //           image1.src = originalSrc1;
    //           image1.dataset.changed = "false";
    //         }
    //       },
    //     },
    //   });
  
    //   timeline
    //     .to(image1, {
    //       x: () => box1.getBoundingClientRect().left - image1.getBoundingClientRect().left + 450,
    //       y: () => box1.getBoundingClientRect().top + 250,
    //       duration: 1,
    //     });
  
    //   // return () => clearInterval(interval);
    //   return () => {
    //     clearInterval(interval);
    //     if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
    //     timeline.kill();
    //   };
    // }

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      let animationConfig = null;
      let movementX = 270;
      let movementY = 240;

      if (window.innerWidth >= 1600) {
        animationConfig = {
          end: "+=800px",
          scrub: 1.5,
        };
        movementX += 240;
        movementY += 100;
      } else if (window.innerWidth >= 1500) {
        animationConfig = {
          end: "+=700px",
          scrub: 1.5,
        };
        movementX += 190;
        movementY += 100;
      } else if (window.innerWidth >= 1400) {
        animationConfig = {
          end: "+=600px",
          scrub: 1.5,
        };
        movementX += 135;
        movementY += 100;
      } else if (window.innerWidth >= 1300) {
        animationConfig = {
          end: "+=500px",
          scrub: 1.2,
        };
        movementX += 105;
        movementY += 60;
      } else if (window.innerWidth >= 1200) {
        animationConfig = {
          end: "+=400px",
          scrub: 1.2,
        };
        movementX += 55;
        movementY += 55;
      } else if (window.innerWidth >= 1100) {
        animationConfig = {
          end: "+=300px",
          scrub: 1,
        };
        movementX += 40;
        movementY += 20;
      } else if (window.innerWidth >= 1024) {
        animationConfig = {
          end: "+=200px",
          scrub: 1,
        };
      }

      if (animationConfig) {
        const image1 = image1Ref.current;
        const box1 = box1Ref.current;
        const originalSrc1 = image1.src;

        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 5%",
            ...animationConfig,
            onUpdate: (self) => {
              const halfwayProgress = 0.2;
    
              if (self.progress >= halfwayProgress && image1.dataset.changed !== "true") {
                image1.src = "./assets/img/faza1.png";
                image1.dataset.changed = "true";
              } else if (self.progress < halfwayProgress && image1.dataset.changed !== "false") {
                image1.src = originalSrc1;
                image1.dataset.changed = "false";
              }
            },
          },
        })
          .to(image1, {
            // x: () => box1.getBoundingClientRect().left - image1.getBoundingClientRect().left + movementOffsetX,
            // y: () => box1.getBoundingClientRect().top + movementOffsetY,
            x: () => box1.getBoundingClientRect().left - image1.getBoundingClientRect().left + movementX,
            y: () => box1.getBoundingClientRect().top - image1.getBoundingClientRect().top + movementY,
            duration: 1,
          });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <div className="hidden lg:block relative z-2 w-64 xl:w-72 2xl:w-80 top-20">
      <div className="landing-section absolute z-2">
        <img
          ref={image1Ref}
          src="./assets/img/faza1.png"
          id="image1"
          className="floating-image"
          alt="Faza"
        />
      </div>
    </div>
    
    <section
      ref={sectionRef}
      className={`site-section group relative z-1 pt-4 [&_strong]:text-white/75 ${
        isInView ? "lqd-is-in-view" : ""
      }`}
      id="banner"
    >
      <div className="container w-full max-w-[1680px]">
        <div className="flex w-full translate-y-8 scale-[0.985] flex-wrap items-start gap-y-8 rounded-3xl bg-stone-100 dark:bg-white/20 px-5 py-32 pb-80 opacity-0 transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 group-[&.lqd-is-in-view]:opacity-100 md:px-8 lg:min-h-[80vh] lg:items-center lg:justify-between lg:px-20 lg:pt-36">
          <div className="md:w-2/12 lg:w-2/12 hidden lg:block">
            <div className="banner-title-wrap">
            </div>
          </div>

          <div className="sm:px-16 md:px-28 lg:px-0 w-full lg:w-7/12">
            <div className="banner-title-wrap relative">
              <div className="block md:flex items-center">
                <h1 className="banner-title mb-0 ml-3 text-[4rem] text-gray-900 dark:text-white font-body font-bold opacity-100 transition-all delay-300 ease-out">
                  أنشئ
                </h1>
                <div className="lqd-text-rotator mt-8 w-80 h-12 relative">
                  {rotatingTexts.map((text, index) => (
                    <span
                      key={index}
                      className={`absolute text-[2.5rem] text-sky-500 inset-0 transition-all duration-500 ${
                        index === currentTextIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-12">
                <p className="mb-3 text-[2rem] font-bold text-gray-800 dark:text-white/90">في دقائق مع منصة دوينج</p>
                <p className="w-4/5 text-[1.4rem] text-gray-700 dark:text-white/90 mt-5 mb-5" style={{ lineHeight: "2.2rem" }}>
                  مجموعة متكاملة من الحلول الرقمية الذكية للمدفوعات والشحن،
                  إدارة المخزون والتسويق، ودعَّ التعقيدات ورحبَّ بتجربة سهلة
                  ومجانية.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/12 flex justify-center">
            <img src="./assets/img/payment1.png" alt="Payment" />
          </div>
        </div>

        <div
          className={`site-section group p-0.5 relative z-1 -mt-44 px-5 lg:px-0 ${
            isInView ? "lqd-is-in-view" : ""
          }`}
          id="banner-ig"
        >
          <div className="box-section">
            <div ref={box1Ref} className="side-box" id="box1">
              <div className="container">
                <figure className="translate-y-8 scale-[0.985] opacity-0 transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 group-[&.lqd-is-in-view]:opacity-100">
                  <img
                    className="w-full rounded-3xl custome-width"
                    width="2880"
                    height="1750"
                    src={theme ? "./assets/img/banner-img-dark-1.png" : "./assets/img/banner-img-light-1.jpg"}
                    alt="Image of Doing dashboard"
                  />
                  <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1">
                    <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                  </span>
                  <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [&_.lqd-outline-glow-inner]:[animation-direction:alternate]">
                    <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;
