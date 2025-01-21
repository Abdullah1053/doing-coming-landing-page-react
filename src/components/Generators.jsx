import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Generators = () => {
    const [activeTab, setActiveTab] = useState('ai-text-generator');
    const [sectionRef, isInView] = useScrollAnimation();

    const tabsData = [
        {
            id: 'ai-text-generator',
            title: 'امتلك متجرك الخاص',
            description: 'مع دوينج أنشئ متجرك الخاص في دقائق وبأقل التكاليف وأيصًا يمكن الحصول على استضافة مجانية وبدون أي عمولة على المبيعات',
            iconClass: 'fa-solid fa-bag-shopping',
            image: './assets/img/generatorlist/R5dw-intelligent-writing-assistant-image.png',
            alt: 'Generate, edit, export.'
        },
        {
            id: 'ai-image-generator',
            title: 'إدارة المخزون',
            description: 'ستتمكن من إدارة منتجاتك، مهما كان نوع هذه المنتجات سواءً منتجات جاهزة أو حسب الطلب أو منتجات رقمية وغيرها بكل سهولة',
            iconClass: 'fa-solid fa-boxes-stacked',
            image: './assets/img/generatorlist/X6tD-create-eye-catching-images-and-graphics-image.png',
            alt: 'Imagine, Genearate, Publish.'
        },
        {
            id: 'ai-code-generator',
            title: 'دعم جميع وسائل الدفع',
            description: 'نوفر لك جميع وسائل الدفع بدءاً من التحويل البنكي والدفع عند الاستلام والدفع بالبطاقات الائتمانية (فيزا وماستر كارد) والدفع بواسطة المحافظ الإلكترونية',
            iconClass: 'fa-regular fa-credit-card',
            image: './assets/img/generatorlist/jO70-generate-high-quality-code-in-no-time-image.png',
            alt: 'Fix. Improve. Generate.'
        },
        {
            id: 'ai-chat-bot',
            title: 'التقارير',
            description: 'من خلال التقارير ستتمكن من الحصول على جميع المعلومات التي تحتاج إليها لمعرفة أداء المتجر واتخاذ أفضل القرارا',
            iconClass: 'fa-solid fa-cart-flatbed',
            image: './assets/img/generatorlist/OSlG-meet-your-next-virtual-assistant-image.png',
            alt: 'Chat, Solve, Repeat.'
        },
        {
            id: 'ai-speech-to-text',
            title: 'خيارات شحن مُتنوعة',
            description: 'استخدم خيارات شحن مُتنوعة مع عملائك وبسعر مخفص خاص بمتجرك واشحن بكل بساطة',
            iconClass: 'fa-solid fa-chart-pie',
            image: './assets/img/generatorlist/gHfo-transcribe-your-speech-into-text-image.png',
            alt: 'Upload, Analyze, Generate.'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`site-section transition-all duration-700 md:translate-y-8 opacity-0 ${isInView ? 'translate-y-0 opacity-100' : ''}`}
            id="generators"
        >
            <div className="container">
                <header className="mx-auto mb-24 w-full text-center lg:w-4/5">
                    <h2 className="mb-7 text-white">دوينج تلبي كل متطلباتك</h2>
                    <p className="m-0 mx-auto text-xl/7 lg:w-8/12 text-white/60">
                        مهما كان مجال عملك يمكنك الاعتماد على دوينج ودعمها لمختلف المجالات
                    </p>
                </header>

                <div className="relative w-full overflow-hidden rounded-3xl bg-black px-5 py-16 md:px-8 lg:pe-0 lg:ps-14">
                    <figure className="pointer-events-none absolute start-1/2 top-0 z-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                        <img width="3110" height="1142" src="./assets/img/glow-1.png" alt="Glowing blob" />
                    </figure>

                    <div className="lqd-tabs flex flex-wrap items-center justify-between gap-y-20">
                        <div className="lqd-tabs-triggers flex flex-col gap-12 lg:w-4/12">
                            {tabsData.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group/trigger text-start ${activeTab === tab.id ? 'lqd-is-active' : ''}`}
                                >
                                    <span className="flex items-center gap-6 text-[24px] font-normal text-white/60 group-[&.lqd-is-active]/trigger:text-white md:text-[32px]">
                                        <span className="w-8 text-white/60 group-[&.lqd-is-active]/trigger:text-primary [&_i]:h-auto [&_i]:w-full">
                                            <i className={tab.iconClass}></i>
                                        </span>
                                        {tab.title}
                                    </span>
                                    <span className="mt-7 hidden text-white/60 group-[&.lqd-is-active]/trigger:block lg:ps-14">
                                        {tab.description}
                                    </span>
                                    <img 
                                        className="mt-10 hidden w-full max-lg:group-[&.lqd-is-active]/trigger:block" 
                                        width="878"
                                        height="748"
                                        src={tab.image}
                                        alt={tab.alt}
                                    />
                                </button>
                            ))}
                        </div>
                        <div className="lqd-tabs-content-wrap max-lg:hidden lg:w-7/12">
                            {tabsData.map((tab) => (
                                <div 
                                    key={tab.id}
                                    className={`lqd-tabs-content ${activeTab === tab.id ? '' : 'hidden'}`} 
                                    id={tab.id}
                                >
                                    <figure className="w-full lg:flex lg:justify-end">
                                        <img 
                                            className="w-full" 
                                            width="878" 
                                            height="748"
                                            src={tab.image}
                                            alt={tab.alt}
                                        />
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Generators; 