import { useEffect, useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const TestimonialsSection = () => {
  const [sectionRef, isInView] = useScrollAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    let flickityInstance;
    if (typeof window !== "undefined" && carouselRef.current) {
      flickityInstance = new Flickity(carouselRef.current, {
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true,
        draggable: true,
        autoPlay: 5000,
      });

      flickityInstance.on("staticClick", (event, pointer, cellElement, cellIndex) => {
        if (typeof cellIndex === "number") {
          flickityInstance.select(cellIndex);
        }
      });
    }

    return () => {
      if (flickityInstance) flickityInstance.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`site-section py-24 transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "md:translate-y-8 md:opacity-0"
      }`}
    >
      <div className="container relative z-10">
        <div className="relative w-full overflow-hidden rounded-3xl bg-stone-200 dark:bg-neutral-800 px-5 py-20 md:px-8 lg:px-20 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <img
              src="./assets/img/glow-1.png"
              alt="Decorative pattern"
              className="w-full h-full object-cover"
            />
          </div>
          
          <figure
            className="pointer-events-none absolute left-1/2 top-0 z-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <img
              width="3110"
              height="1142"
              src="./assets/img/glow-1.png"
              alt="Glowing blob"
            />
          </figure>

          <header className="mb-24 flex flex-wrap items-end justify-between gap-y-5 [&_strong]:text-white/70 relative z-10">
            <div className="w-full lg:w-2/3 lg:pe-8">
              <h6 className="relative mb-14 inline-flex translate-y-6 items-center gap-1.5 rounded-full bg-secondary px-5 py-2 text-secondary-foreground shadow-xs shadow-primary">
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
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                  <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                Testimonials
              </h6>
              <h2 className="text-white">Trusted by millions.</h2>
            </div>

            <div className="w-full lg:w-1/3">
              <p className="mb-6 text-white">
                Content and <strong>kickstart your earnings</strong> in minutes
              </p>
            </div>
          </header>

          <div className="relative mx-auto lg:mb-20 lg:w-1/2 relative z-10">
            <div
              ref={carouselRef}
              className="testimonials-carousel carousel text-center flickity-enabled is-draggable"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="carousel-cell w-full shrink-0 grow-0 basis-full px-4"
                >
                  <figure className="mb-6 flex justify-center">
                    <img
                      className="h-36 w-36 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </figure>
                  <blockquote className="mb-4">
                    <p className="text-white">{testimonial.quote}</p>
                  </blockquote>
                  <figcaption>
                    <p className="text-lg text-heading-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-base text-heading-foreground/50">
                      {testimonial.role}
                    </p>
                  </figcaption>
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
