import useScrollAnimation from '../hooks/useScrollAnimation';

const HowItWorks = () => {
    const [sectionRef, isInView] = useScrollAnimation();

    const steps = [
        {
            number: "Step 1",
            image: "./assets/img/step-1-img.png",
            description: "Simply explain what your content is about and adjust settings according to your needs.",
            style: {
                backgroundColor: "#0d0d0d",
                color: "white"
            }
        },
        {
            number: "Step 2",
            image: "./assets/img/step-2-img.png",
            description: "Simply input some basic information or keywords about your brand or product, and let our AI algorithms do the rest.",
            style: {
                backgroundColor: "hsl(240deg 5.17% 12.12%)",
                color: "white"
            }
        },
        {
            number: "Step 3",
            image: "./assets/img/step-3-img.png",
            description: "View, edit or export your result with a few clicks. And you're done!",
            style: {
                backgroundColor: "#004e49",
                backgroundImage: "url(./assets/img/step-3-bg.jpg)",
                color: "white"
            }
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`site-section transition-all duration-700 md:translate-y-8 opacity-0 ${isInView ? 'translate-y-0 opacity-100' : ''}`}
            id="how-it-works"
        >
            <div className="container">
                <div className="relative w-full overflow-hidden rounded-3xl bg-black px-5 py-20 md:px-8 lg:px-20 lg:py-24">
                    <figure className="pointer-events-none absolute start-1/2 top-0 z-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                        <img width="3110" height="1142" src="./assets/img/glow-1.png" alt="Glowing blob" />
                    </figure>
                    <figure className="pointer-events-none absolute bottom-0 start-0 z-2 w-full max-w-none -translate-x-1/4" aria-hidden="true">
                        <img width="1602" height="2098" src="./assets/img/glow-3.png" alt="Glowing blob" />
                    </figure>

                    <div className="mb-24 flex flex-wrap items-end justify-between gap-y-5">
                        <div className="w-full lg:w-2/3 lg:pe-8">
                            <h2 className="text-white">
                                خطوات الانطلاق ! الرقمي
                            </h2>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <p className="mb-6 text-white/60">
                                مهما كانت مرحلة مشروعك، نوّصلك اللي بعدها!
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col overflow-hidden rounded-3xl bg-cover bg-center px-10 py-10 text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                                style={step.style}
                            >
                                <span className="absolute end-10 top-10 z-2 text-[18px] font-medium uppercase">
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
                                <div className="mt-auto text-xl/7">
                                    <p className="mb-0 mt-8">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center text-white">
                        Want to see? <a className="text-[#FCA7FF] ms-1" href="#join">Join Magic</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 