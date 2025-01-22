import useScrollAnimation from "../hooks/useScrollAnimation";

const BannerImage = () => {
  const [sectionRef, isInView] = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`site-section group relative z-2 -mt-64 overflow-hidden p-0.5 px-5 lg:px-0 ${
        isInView ? "lqd-is-in-view" : ""
      }`}
      id="banner-ig"
    >
      <div className="box-section">
        <div className="side-box" id="box1"></div>
      </div>

      <div className="container" style={{ position: "relative" }}>
        <figure className="relative translate-y-8 scale-[0.985] opacity-0 transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 group-[&.lqd-is-in-view]:opacity-100">
          <img
            className="w-full rounded-3xl custome-width"
            width="2880"
            height="1750"
            src="./assets/img/banner-img.jpg"
            alt="Image of MagicAI dashboard"
          />
          <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1">
            <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
          </span>
          <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [&_.lqd-outline-glow-inner]:[animation-direction:alternate]">
            <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
          </span>
        </figure>
      </div>
    </section>
  );
};

export default BannerImage;
