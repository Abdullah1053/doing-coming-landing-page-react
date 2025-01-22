import { useEffect, useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const TestimonialsSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    let flkty;
    if (typeof window !== "undefined" && carouselRef.current) {
      flkty = new Flickity(carouselRef.current, {
        cellAlign: "center",
        contain: false,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        autoPlay: 5000,
        percentPosition: false,
        groupCells: false,
        selectedAttraction: 0.2,
        friction: 0.8,
      });
    }

    return () => {
      if (flkty) flkty.destroy();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Peline Jan",
      role: "Entrepreneur",
      image: "./assets/img/testimonialAvatar/202306020840avatar-1.jpg",
      quote:
        '"Not only did it save me time, but it also helped me produce content that was more engaging and effective than what I had been creating on my own."',
    },
    {
      id: 2,
      name: "Tom Daniel",
      role: "Writer",
      image: "./assets/img/testimonialAvatar/202306020840avatar-3.jpg",
      quote:
        '"As a freelance writer, I was looking for a tool that could help me generate ideas and write faster. This AI Text website has done that and more."',
    },
    {
      id: 3,
      name: "Eric Sanchez",
      role: "UX Designer",
      image: "./assets/img/testimonialAvatar/202306020840avatar-2.jpg",
      quote:
        "\"The customer support team has been incredibly helpful whenever I've had any questions. I can't imagine going back to my old content-creation methods!\"",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`site-section py-24 transition-all duration-700 md:translate-y-8 ${
        isInView ? "translate-y-0 opacity-100" : ""
      }`}
      id="testimonials"
    >
      <div className="container">
        <div className="relative w-full overflow-hidden rounded-3xl bg-black px-5 py-20 md:px-8 lg:px-20 lg:py-24">
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

          <header className="mb-24 flex flex-wrap items-end justify-between gap-y-5 [&_strong]:text-white/70">
            <div className="w-full lg:w-2/3 lg:pe-8">
              <h2 className="text-white">ثقة من الآلاف.</h2>
            </div>
            <div className="w-full lg:w-1/3">
              <p className="mb-6 text-white/60">
                Content and <strong>kickstart your earnings</strong> in minutes
                kickstart your earnings in minutes
              </p>
            </div>
          </header>

          <div className="relative -mx-20">
            <div ref={carouselRef} className="testimonials-carousel">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="carousel-cell w-[60%] px-4 mx-4 transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-12">
                      <figure className="mb-4 relative">
                        <img
                          className="size-32 md:size-40 rounded-full object-cover object-center mx-auto transition-all duration-300 group-[&.is-selected]:scale-105 saturate-0 group-[&.is-selected]:saturate-100"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="absolute inset-0 rounded-full bg-primary opacity-0 mix-blend-multiply transition-opacity group-[&.is-selected]:opacity-100"></div>
                        <div className="absolute inset-0 rounded-full bg-secondary opacity-0 mix-blend-difference transition-opacity group-[&.is-selected]:opacity-100"></div>
                        <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 opacity-0 transition-opacity [--outline-glow-w:3px] group-[&.is-selected]:opacity-100">
                          <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                        </span>
                      </figure>
                      <div className="text-center opacity-60 group-[&.is-selected]:opacity-100 transition-opacity duration-300">
                        <p className="text-xl font-semibold text-white mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-base text-white/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="max-w-2xl mx-auto text-xl text-white/80 opacity-60 group-[&.is-selected]:opacity-100 transition-opacity duration-300">
                      <p>{testimonial.quote}</p>
                    </blockquote>
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

export default TestimonialsSection;
