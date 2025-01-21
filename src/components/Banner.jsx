import { useState, useEffect } from 'react';

const Banner = () => {
    const [isInView, setIsInView] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
    const rotatingTexts = [
        "متجرك الإلكتورني",
        "موقعك الخاص",
        "مدونــة"
    ];

    useEffect(() => {
        // Set initial in-view state
        setIsInView(true);

        // Setup text rotation
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`site-section group relative pt-4 [&_strong]:text-white/75 ${isInView ? 'lqd-is-in-view' : ''}`} id="banner">
            <div className="container relative w-full max-w-[1680px]">
                <div className="relative flex w-full translate-y-8 scale-[0.985] flex-wrap items-start gap-y-8 overflow-hidden rounded-3xl bg-black px-5 py-32 pb-80 opacity-0 transition-all duration-700 group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:scale-100 group-[&.lqd-is-in-view]:opacity-100 md:px-8 lg:min-h-[80vh] lg:items-center lg:justify-between lg:px-20 lg:pt-36">
                    <figure className="pointer-events-none absolute start-1/2 top-0 z-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                        <img width="3110" height="1142" src="./assets/img/glow-1.png" alt="Glowing blob" />
                    </figure>
                    <figure className="pointer-events-none absolute bottom-0 start-0 z-0 w-full max-w-none -translate-x-1/4 opacity-50" aria-hidden="true">
                        <img width="2942" height="1294" src="./assets/img/glow-2.png" alt="Glowing blob" />
                    </figure>

                    <div className="w-full lg:w-4/12">
                        <div className="banner-title-wrap relative">
                            <div className="landing-section">
                                <img src="./assets/img/faza1.png" id="image1" className="floating-image" alt="Faza" />
                            </div>
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary to-transparent mix-blend-darken blur-2xl transition-all delay-[400ms] duration-500 group-[&.lqd-is-in-view]:translate-x-full">
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12">
                        <div className="banner-title-wrap relative">
                            <h1 className="banner-title mb-7 text-4xl text-white font-body font-bold opacity-100 transition-all delay-300 ease-out">
                                أنشئ مجاناً
                                <div className="lqd-text-rotator mt-4 h-12 relative">
                                    {rotatingTexts.map((text, index) => (
                                        <span 
                                            key={index} 
                                            className={`absolute inset-0 transition-all duration-500 ${
                                                index === currentTextIndex 
                                                    ? 'opacity-100 translate-y-0' 
                                                    : 'opacity-0 translate-y-8'
                                            }`}
                                        >
                                            {text}
                                        </span>
                                    ))}
                                </div>
                            </h1>
                            <div className="translate-y-3 opacity-0 transition-all delay-[600ms] group-[&.lqd-is-in-view]:translate-y-0 group-[&.lqd-is-in-view]:opacity-100">
                                <a className="relative inline-flex w-56 gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 to-50% py-5 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                                    href="#start">
                                    <span className="flex animate-marquee justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]" data-txt=" ابدأ في جني المال">
                                        ابدأ في جني المال
                                    </span>
                                    <span className="absolute start-3 top-5 flex animate-marquee-2 justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]" data-txt=" ابدأ في جني المال">
                                        ابدأ في جني المال
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12">
                        <img src="./assets/img/payment1.png" alt="Payment" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner; 