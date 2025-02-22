import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOutletContext } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const { darkMode } = useOutletContext();
  const [isInView, setIsInView] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const image1Ref = useRef(null);
  const box1Ref = useRef(null);
  const sectionRef = useRef(null);
  const image2Ref = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(1);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const rotatingTexts = ["متجرك الإلكتورني", "موقعك الخاص", "مدونتك"];



  // Trigger a resize event to ensure styles are applied correctly


  useEffect(() => {
    // Set initial in-view state
    setIsInView(true);

    // Setup text rotation
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      // Base movement values that will be adjusted based on viewport width
      let config = {
        image1: {
          movementX: 270,
          movementY: 240,
          end: "+=200px",
          scrub: 1
        },
        image2: {
          movementX: 200,
          movementY: 180,
          end: "+=200px",
          scrub: 0.1
        }
      };

      // Responsive breakpoints configuration
      const breakpoints = [
        {
          width: 1800,
          adjustments: {
            image1: { movementX: 530, movementY: 340, end: "+=800px", scrub: 1.5 },
            image2: { movementX: 400, movementY: 810, end: "center center", scrub: 0.15 }
          }
        },

        {
          width: 1700,
          adjustments: {
            image1: { movementX: 530, movementY: 340, end: "+=800px", scrub: 1.5 },
            image2: { movementX: 380, movementY: 810, end: "center center", scrub: 0.15 }
          }
        },

        {
          width: 1600,
          adjustments: {
            image1: { movementX: 500, movementY: 340, end: "+=800px", scrub: 1.5 },
            image2: { movementX: 360, movementY: 810, end: "center center", scrub: 0.15 }
          }
        },
        {
          width: 1500,
          adjustments: {
            image1: { movementX: 470, movementY: 340, end: "+=700px", scrub: 1.5 },
            image2: { movementX: 340, movementY: 810, end: "center center", scrub: 0.15 }
          }
        },
        {
          width: 1400,
          adjustments: {
            image1: { movementX: 440, movementY: 340, end: "+=600px", scrub: 1.5 },
            image2: { movementX: 320, movementY: 810, end: "center center", scrub: 0.13 }
          }
        },
        {
          width: 1300,
          adjustments: {
            image1: { movementX: 370, movementY: 290, end: "+=500px", scrub: 1.2 },
            image2: { movementX: 300, movementY: 710, end: "center center", scrub: 0.12 }
          }
        },
        {
          width: 1200,
          adjustments: {
            image1: { movementX: 350, movementY: 293, end: "+=400px", scrub: 1.2 },
            image2: { movementX: 480, movementY: 710, end: "center center", scrub: 0.11 }
          }
        },
        {
          width: 1100,
          adjustments: {
            image1: { movementX: 310, movementY: 280, end: "+=300px", scrub: 1 },
            image2: { movementX: 460, movementY: 700, end: "center center", scrub: 0.1 }
          }
        },
        {
          width: 1024,
          adjustments: {
            image1: { movementX: 270, movementY: 260, end: "+=200px", scrub: 1 },
            image2: { movementX: 400, movementY: 630, end: "center center", scrub: 0.1 }
          }
        }
      ];

      // Find the appropriate configuration based on window width
      const currentBreakpoint = breakpoints.find(bp => window.innerWidth >= bp.width);
      if (currentBreakpoint) {
        config = {
          image1: { ...config.image1, ...currentBreakpoint.adjustments.image1 },
          image2: { ...config.image2, ...currentBreakpoint.adjustments.image2 }
        };
      }

      // First image animation
      const image1 = image1Ref.current;
      const box1 = box1Ref.current;

      if (image1 && box1) {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 5%",
            end: config.image1.end,
            scrub: config.image1.scrub,
            onUpdate: (self) => {
              const halfwayProgress = 0.2;

              if (self.progress >= halfwayProgress && image1.dataset.changed !== "true") {
                image1.src = "./assets/img/faza-rb.png";
                image1.dataset.changed = "true";
              } else if (self.progress < halfwayProgress && image1.dataset.changed !== "false") {
                image1.src = "./assets/img/faza1.png";
                image1.dataset.changed = "false";
              }
            },
          },
        })
        .to(image1, {
          x: () => box1.getBoundingClientRect().left - image1.getBoundingClientRect().left + config.image1.movementX,
          y: () => box1.getBoundingClientRect().top - image1.getBoundingClientRect().top + config.image1.movementY,
          duration: 1,
        });
      }
      
      // Second image animation
      if (image2Ref.current && box1Ref.current) {
        gsap.to(image2Ref.current, {
          x: config.image2.movementX,
          y: config.image2.movementY,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0%",
            end: config.image2.end,
            scrub: config.image2.scrub,
            onUpdate: (self) => {
              const halfwayProgress = 0.2;
    
              if (self.progress >= halfwayProgress && image2Ref.current.dataset.changed !== "true") {
                image2Ref.current.src = "./assets/img/payment2.png";
                image2Ref.current.dataset.changed = "true";
              } else if (self.progress < halfwayProgress && image2Ref.current.dataset.changed !== "false") {
                image2Ref.current.src = "./assets/img/payment1.png";
                image2Ref.current.dataset.changed = "false";
              }
            },
          },
        });
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const video3 = video3Ref.current;
    const video4 = video4Ref.current;

    const handleVideoTransition = (currentVideo: HTMLVideoElement, nextVideo: HTMLVideoElement, nextIndex: number) => {
      // Prevent multiple transitions
      if (currentVideo.dataset.transitioning === 'true') return;
      currentVideo.dataset.transitioning = 'true';

      // Prepare next video
      nextVideo.currentTime = 0;
      
      // Direct switch between videos
      nextVideo.play().then(() => {
        currentVideo.style.opacity = '0';
        nextVideo.style.opacity = '1';
        
        currentVideo.dataset.transitioning = 'false';
        setCurrentVideo(nextIndex);
        
        // Reset current video
        currentVideo.currentTime = 0;
      }).catch(error => {
        console.error('Error during video transition:', error);
        currentVideo.dataset.transitioning = 'false';
      });
    };

    const handleVideo1End = () => handleVideoTransition(video1, video2, 2);
    const handleVideo2End = () => handleVideoTransition(video2, video3, 3);
    const handleVideo3End = () => handleVideoTransition(video3, video4, 4);
    const handleVideo4End = () => handleVideoTransition(video4, video1, 1);

    video1.addEventListener('ended', handleVideo1End);
    video2.addEventListener('ended', handleVideo2End);
    video3.addEventListener('ended', handleVideo3End);
    video4.addEventListener('ended', handleVideo4End);

    // Initialize videos with proper states
    [video1, video2, video3, video4].forEach(video => {
      video.style.opacity = '0';
      video.dataset.transitioning = 'false';
      video.load();
    });

    // Start with video 1 and set its opacity to 1
    video1.style.opacity = '1';
    video1.play();


    return () => {
      video1.removeEventListener('ended', handleVideo1End);
      video2.removeEventListener('ended', handleVideo2End);
      video3.removeEventListener('ended', handleVideo3End);
      video4.removeEventListener('ended', handleVideo4End);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="container">
      <div className="hidden lg:block relative z-2 w-64 xl:w-72 2xl:w-80 top-30 -right-25">
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
    </div>

    <section
      ref={sectionRef}
      className={`site-section group relative z-1 pt-4 [&_strong]:text-white/75 ${
        isInView ? "lqd-is-in-view" : ""
      }`}
      id="banner"
      style={{ position: 'relative' }}
    >
      <video 
        ref={video1Ref}
        className="absolute -top-20 left-0 w-full h-full object-cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        preload="auto"
        playsInline
        muted
      >
        <source src="./assets/videos/banner/banner-video-1.mp4" type="video/mp4" />
      </video>
      <video 
        ref={video2Ref}
        className="absolute -top-20 left-0 w-full h-full object-cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        preload="auto"
        playsInline
        muted
      >
        <source src="./assets/videos/banner/banner-video-2.mp4" type="video/mp4" />
      </video>
      <video 
        ref={video3Ref}
        className="absolute -top-20 left-0 w-full h-full object-cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        preload="auto"
        playsInline
        muted
      >
        <source src="./assets/videos/banner/banner-video-3.mp4" type="video/mp4" />
      </video>
      <video 
        ref={video4Ref}
        className="absolute -top-20 left-0 w-full h-full object-cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        preload="auto"
        playsInline
        muted
      >
        <source src="./assets/videos/banner/banner-video-4.mp4" type="video/mp4" />
      </video>

      <div className="container w-full max-w-[1680px] pt-20 lg:pt-0">
        <div className="flex w-full translate-y-8 scale-[0.985] flex-wrap items-start gap-y-8 rounded-3xl px-5 lg:pb-80 pb-[195px] opacity-0 transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 group-[&.lqd-is-in-view]:opacity-100 md:px-8 lg:min-h-[80vh] lg:items-center lg:justify-between lg:px-20 lg:pt-36 ">
          <div className="md:w-2/12 lg:w-2/12 hidden lg:block">
            <div className="banner-title-wrap">
            </div>
          </div>

          <div className="sm:px-16 md:px-28 lg:px-0 w-full lg:w-9/12">
            <div className="banner-title-wrap relative">
              <div className="block md:flex items-center">
                <h1 className="banner-title mb-0 ml-10 text-[8rem] text-gray-900 dark:text-white font-body font-bold opacity-100 transition-all delay-300 ease-out">
                  أنشئ
                </h1>
                <div className="lqd-text-rotator lg:mt-20 mt-4 w-[100%] h-[150px] relative">
                  {rotatingTexts.map((text, index) => (
                    <span
                      key={index}
                      className={`absolute lg:text-[4.5rem] text-[3rem] lg:py-10 py-5 text-sky-500 inset-0 transition-all duration-500 ${
                        index === currentTextIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ lineHeight: "1.2" }}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:mt-14 mt-[0px]">
                <p className="mb-3 text-[2rem] lg:text-[3rem] font-bold text-gray-800 dark:text-white/90">في دقائق مع منصة دوينج</p>
                <p className="w-4/5 text-[1.4rem] text-gray-700 dark:text-white/90 mt-5 mb-5" style={{ lineHeight: "2.2rem" }}>
                  مجموعة متكاملة من الحلول الرقمية الذكية للمدفوعات والشحن،
                  إدارة المخزون والتسويق، ودعَّ التعقيدات ورحبَّ بتجربة سهلة
                  ومجانية.
                </p>
              </div>
            </div>
          </div>


        </div>


        <div className="container">
            <div className="hidden lg:block lg:w-3/12 relative z-2 -top-[200px] right-[500px] mx-auto">
              <div className="landing-section relative z-2">

                <div className="w-full landing-section z-2">
                  <img ref={image2Ref} src="./assets/img/payment1.png" className="floating-image" alt="Payment" />
                </div>
              </div>
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
                <figure className={`relative translate-y-8 scale-[0.985] transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 rounded-3xl ${darkMode ? "image-banner:dark" : "image-banner"}`}>
                  <img
                    className="w-full rounded-3xl"
                    width="2880"
                    height="1750"
                    src={isMobile ? "./assets/img/mobile-store.png" : "./assets/img/banner-img-dark-1.png"}
                    alt="Image of Doing dashboard"
                  />
                  <div className="rounded-3xl custome-width absolute inset-0 w-[100%] my-auto h-[100%]">

                    <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1">
                      <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                    </span>
                    <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [&_.lqd-outline-glow-inner]:[animation-direction:alternate]">
                      <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                    </span>

                  </div>

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
