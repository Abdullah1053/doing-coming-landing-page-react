import useScrollAnimation from '../hooks/useScrollAnimation';

const MarqueeSection = () => {
    const [sectionRef, isInView] = useScrollAnimation();

    const topRowItems = [
        "عبايات وازياء",
        "قطاع الجملة",
        "مطاعم",
        "صناعة محتوى",
        "تقديم خدمات",
        "منتجات رقمية"
    ];

    const topRowItems2 = [
        "جمعيات",
        "مدونات",
        "اتصالات",
        "تجارة إلكترونية",
        "اعمال",
        "مدونة"
    ];

    const bottomRowItems = [
        "مطاعم",
        "منظمات خيرية",
        "Enterpreneurs",
        "Copywriters",
        "Digital Marketers",
        "Developers"
    ];

    const bottomRowItems2 = [
        "Digital Agencies",
        "Product Designers",
        "Enterpreneurs",
        "Copywriters",
        "Digital Marketers",
        "Developers"
    ];

    return (
        <section
            ref={sectionRef}
            className={`site-section whitespace-nowrap py-20 transition-all duration-700 md:translate-y-8 opacity-0 lg:pb-24 lg:pt-36 ${isInView ? 'translate-y-0 opacity-100' : ''}`}
        >
            <div className="relative mb-8 flex flex-wrap overflow-hidden">
                <div className="flex basis-full animate-marquee items-center justify-between gap-5 pe-5 [animation-duration:25s] lg:gap-[300px] lg:pe-[300px]">
                    {topRowItems.map((text, index) => (
                        <h5 key={index} className="group/heading inline-flex rounded-2xl bg-[#111114] px-8 py-5 font-medium leading-snug lg:text-3xl">
                            <span className="bg-gradient-to-r from-[#DBDADA] to-[#7A7878] bg-clip-text leading-tight text-transparent group-hover/heading:from-gradient-to group-hover/heading:to-gradient-from">
                                {text}
                            </span>
                        </h5>
                    ))}
                </div>
                <div className="absolute start-0 top-0 flex animate-marquee-2 items-center justify-between gap-5 pe-5 [animation-duration:25s] lg:gap-[300px] lg:pe-[300px]">
                    {topRowItems2.map((text, index) => (
                        <h5 key={index} className="group/heading inline-flex rounded-2xl bg-[#111114] px-8 py-5 font-medium leading-tight lg:text-3xl">
                            <span className="bg-gradient-to-r from-[#DBDADA] to-[#7A7878] bg-clip-text leading-tight text-transparent group-hover/heading:from-gradient-to group-hover/heading:to-gradient-from">
                                {text}
                            </span>
                        </h5>
                    ))}
                </div>
            </div>
            <div className="relative flex flex-wrap overflow-hidden">
                <div className="flex basis-full animate-marquee-reverse items-center justify-between gap-5 pe-5 [animation-duration:30s] lg:gap-[300px] lg:pe-[300px]">
                    {bottomRowItems.map((text, index) => (
                        <h5 key={index} className="group/heading inline-flex rounded-2xl bg-[#111114] px-8 py-5 font-medium leading-snug lg:text-3xl">
                            <span className="bg-gradient-to-r from-[#DBDADA] to-[#7A7878] bg-clip-text leading-tight text-transparent group-hover/heading:from-gradient-to group-hover/heading:to-gradient-from">
                                {text}
                            </span>
                        </h5>
                    ))}
                </div>
                <div className="absolute start-0 top-0 flex animate-marquee-reverse-2 items-center justify-between gap-5 pe-5 [animation-duration:30s] lg:gap-[300px] lg:pe-[300px]">
                    {bottomRowItems2.map((text, index) => (
                        <h5 key={index} className="group/heading inline-flex rounded-2xl bg-[#111114] px-8 py-5 font-medium leading-tight lg:text-3xl">
                            <span className="bg-gradient-to-r from-[#DBDADA] to-[#7A7878] bg-clip-text leading-tight text-transparent group-hover/heading:from-gradient-to group-hover/heading:to-gradient-from">
                                {text}
                            </span>
                        </h5>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection; 