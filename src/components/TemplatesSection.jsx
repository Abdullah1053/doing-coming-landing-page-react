import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TemplatesSection = () => {
    const [sectionRef, isInView] = useScrollAnimation();
    const [showMore, setShowMore] = useState(false);

    const templates = [
        {
            id: 'post-title',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-20-4h8v4h-8V8zm20 36H8V16h8.01c0 1.1.89 2 1.99 2h12c1.1 0 2-.9 2-2H40v28z"/>
                <path fill="url(#custom-templates-gradient)" d="M24 28h-8v-2h8v2zm8-6H16v-2h16v2zm0-6H16v-2h16v2z"/>
            </svg>,
            title: 'Post Title Generator', 
            description: 'Get captivating post titles instantly with our title generator. Boost engagement and save time.'
        },
        {
            id: 'summarize-text',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M14 36h20v-4H14v4zm0-8h20v-4H14v4zM14 8v4h20V8H14zm-4 28q-.825 0-1.412-.587Q8 34.825 8 34V14q0-.825.588-1.413Q9.175 12 10 12h28q.825 0 1.413.587Q40 13.175 40 14v20q0 .825-.587 1.413Q38.825 36 38 36H10z"/>
            </svg>,
            title: 'Summarize Text',
            description: 'Effortlessly condense large text into shorter summaries. Save time and increase productivity.'
        },
        {
            id: 'product-description',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M13.5 21.5h21v-3h-21v3zm0 7h21v-3h-21v3zM8 42q-1.25 0-2.125-.875T5 39V9q0-1.25.875-2.125T8 6h18.5L40 19.5V39q0 1.25-.875 2.125T37 42H8zm18-24.75V9H8v30h29V19.5H26V17.25z"/>
            </svg>,
            title: 'Product Description',
            description: 'Easily create compelling product descriptions that sell. Increase conversions and boost sales.'
        },
        {
            id: 'article-generator',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M8 42q-1.25 0-2.125-.875T5 39V9q0-1.25.875-2.125T8 6h32q1.25 0 2.125.875T43 9v30q0 1.25-.875 2.125T40 42H8zm0-3h15V25H8v14zm18 0h14v-7H26v7zm0-10h14v-7H26v7zM8 22h32v-8H8v8z"/>
            </svg>,
            title: 'Article Generator',
            description: 'Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.'
        },
        {
            id: 'product-name',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M15.95 35.5h6.1v-15h-6.1v15zm0-18h6.1v-5h-6.1v5zm10 18h6.1v-5h-6.1v5zm0-8h6.1v-15h-6.1v15zM7 44q-1.2 0-2.1-.9Q4 42.2 4 41V7q0-1.2.9-2.1Q5.8 4 7 4h34q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9H7z"/>
            </svg>,
            title: 'Product Name Generator',
            description: 'Create catchy product names with ease. Attract customers and boost sales effortlessly.'
        },
        {
            id: 'testimonial-review',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55 11.65 44zm12.35-10.55 7.85 4.75-1.85-8.9 6.9-6-9.1-.8L24 14.2l-3.8 8.3-9.1.8 6.9 6-1.85 8.9 7.85-4.75z"/>
            </svg>,
            title: 'Testimonial Review',
            description: 'Instantly generate authentic testimonials. Build trust and credibility with genuine reviews.'
        },
        {
            id: 'problem-agitate',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm-2-26h4v12h-4V14zm0 16h4v4h-4v-4z"/>
            </svg>,
            title: 'Problem Agitate Solution',
            description: 'Identify and solve problems efficiently. Streamline solutions and increase productivity.'
        },
        {
            id: 'blog-section',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 36H12V8h24v32zM16 12h16v4H16v-4zm0 8h16v4H16v-4zm0 8h12v4H16v-4z"/>
            </svg>,
            title: 'Blog Section',
            description: 'Effortlessly create blog sections with AI. Get unique, engaging content and save time.'
        },
        {
            id: 'blog-ideas',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M24 4C15.16 4 8 11.16 8 20c0 6.13 3.44 11.46 8.47 14.13.33.17.58.5.58.9v2.97c0 1.1.9 2 2 2h9.9c1.1 0 2-.9 2-2v-2.97c0-.4.25-.73.58-.9C36.56 31.46 40 26.13 40 20 40 11.16 32.84 4 24 4zm4.95 24h-9.9v-2h9.9v2zm-1.95 4h-6v-2h6v2zm3.89-8.73l-2.3.93-.89-2.2 2.3-.93.89 2.2zm-11.78 0l.89-2.2 2.3.93-.89 2.2-2.3-.93z"/>
            </svg>,
            title: 'Blog Post Ideas',
            description: 'Unlock your creativity with unique blog post ideas. Generate endless inspiration and take your content to the next level.'
        },
        {
            id: 'blog-intros',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M38 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 36H10V8h28v32zm-4-24H14v-4h20v4zm0 8H14v-4h20v4zm-8 8H14v-4h12v4z"/>
            </svg>,
            title: 'Blog Intros',
            description: 'Set the tone for your blog post with captivating intros. Grab readers\' attention and keep them engaged.'
        },
        {
            id: 'blog-conclusion',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
                <path fill="url(#custom-templates-gradient)" d="M38 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 36H10V8h28v32zm-4-8H14v-4h20v4zm0-8H14v-4h20v4zm0-8H14v-4h20v4z"/>
            </svg>,
            title: 'Blog Conclusion',
            description: 'End your blog posts on a high note. Craft memorable conclusions that leave a lasting impact.'
        },
        {
            id: 'facebook-ads',
            icon: <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66016 15.2383H2.88281V8.41797H0.5625V5.74609H2.88281V3.77734C2.88281 2.65234 3.19922 1.78516 3.83203 1.17578C4.46484 0.566406 5.30859 0.261719 6.36328 0.261719C7.20703 0.261719 7.89844 0.296875 8.4375 0.367188V2.72266L6.99609 2.75781C6.48047 2.75781 6.12891 2.86328 5.94141 3.07422C5.75391 3.28516 5.66016 3.60156 5.66016 4.02344V5.74609H8.33203L7.98047 8.41797H5.66016V15.2383Z" fill="#23344D" /></svg>,
            title: 'Facebook Ads',
            description: 'Create high-converting Facebook ads that grab attention. Drive sales and grow your business.'
        },
        {
            id: 'youtube-description',
            icon: <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8301 2.76172C15.9473 3.58203 16.0059 4.39062 16.0059 5.1875V6.3125L15.8301 8.73828C15.7363 9.41797 15.5371 9.91016 15.2324 10.2148C14.9043 10.543 14.4121 10.7539 13.7559 10.8477C13.123 10.8945 12.3613 10.9297 11.4707 10.9531C10.6035 10.9766 9.88867 10.9883 9.32617 10.9883H8.48242C5.88086 10.9648 4.18164 10.918 3.38477 10.8477C3.38477 10.8477 3.29102 10.8359 3.10352 10.8125C2.91602 10.7891 2.76367 10.7656 2.64648 10.7422C2.5293 10.7188 2.37695 10.6602 2.18945 10.5664C2.02539 10.4727 1.87305 10.3555 1.73242 10.2148C1.61523 10.0742 1.49805 9.88672 1.38086 9.65234C1.28711 9.39453 1.22852 9.17188 1.20508 8.98438L1.13477 8.73828C1.04102 7.91797 0.994141 7.10938 0.994141 6.3125V5.1875L1.13477 2.76172C1.22852 2.08203 1.42773 1.58984 1.73242 1.28516C2.06055 0.933594 2.56445 0.722656 3.24414 0.652344C3.87695 0.605469 4.62695 0.570313 5.49414 0.546875C6.36133 0.523437 7.07617 0.511719 7.63867 0.511719H8.48242C10.5918 0.511719 12.3496 0.558594 13.7559 0.652344C14.4121 0.722656 14.9043 0.933594 15.2324 1.28516C15.3262 1.37891 15.4082 1.49609 15.4785 1.63672C15.5488 1.75391 15.6074 1.88281 15.6543 2.02344C15.7012 2.14062 15.7363 2.25781 15.7598 2.375C15.7832 2.49219 15.8066 2.58594 15.8301 2.65625V2.76172ZM10.5215 5.85547L11.0137 5.60938L6.9707 3.5V7.71875L10.5215 5.85547Z" fill="#23344D" /></svg>,
            title: 'Youtube Video Description',
            description: 'Elevate your YouTube content with compelling video descriptions. Generate engaging descriptions effortlessly and increase views.'
        },
        {
            id: 'youtube-title',
            icon: <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8301 2.76172C15.9473 3.58203 16.0059 4.39062 16.0059 5.1875V6.3125L15.8301 8.73828C15.7363 9.41797 15.5371 9.91016 15.2324 10.2148C14.9043 10.543 14.4121 10.7539 13.7559 10.8477C13.123 10.8945 12.3613 10.9297 11.4707 10.9531C10.6035 10.9766 9.88867 10.9883 9.32617 10.9883H8.48242C5.88086 10.9648 4.18164 10.918 3.38477 10.8477C3.38477 10.8477 3.29102 10.8359 3.10352 10.8125C2.91602 10.7891 2.76367 10.7656 2.64648 10.7422C2.5293 10.7188 2.37695 10.6602 2.18945 10.5664C2.02539 10.4727 1.87305 10.3555 1.73242 10.2148C1.61523 10.0742 1.49805 9.88672 1.38086 9.65234C1.28711 9.39453 1.22852 9.17188 1.20508 8.98438L1.13477 8.73828C1.04102 7.91797 0.994141 7.10938 0.994141 6.3125V5.1875L1.13477 2.76172C1.22852 2.08203 1.42773 1.58984 1.73242 1.28516C2.06055 0.933594 2.56445 0.722656 3.24414 0.652344C3.87695 0.605469 4.62695 0.570313 5.49414 0.546875C6.36133 0.523437 7.07617 0.511719 7.63867 0.511719H8.48242C10.5918 0.511719 12.3496 0.558594 13.7559 0.652344C14.4121 0.722656 14.9043 0.933594 15.2324 1.28516C15.3262 1.37891 15.4082 1.49609 15.4785 1.63672C15.5488 1.75391 15.6074 1.88281 15.6543 2.02344C15.7012 2.14062 15.7363 2.25781 15.7598 2.375C15.7832 2.49219 15.8066 2.58594 15.8301 2.65625V2.76172ZM10.5215 5.85547L11.0137 5.60938L6.9707 3.5V7.71875L10.5215 5.85547Z" fill="#23344D" /></svg>,
            title: 'Youtube Video Title',
            description: 'Get more views with attention-grabbing video titles. Create unique, catchy titles that entice viewers.'
        },
        // ... Add remaining templates
    ];

    const handleShowMore = (event) => {
        event.preventDefault();
        setShowMore(!showMore);
        if (!showMore) {
            setTimeout(() => {
                const element = sectionRef.current;
                if (element) {
                    const topPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: topPosition - (window.innerHeight / 2),
                        behavior: 'instant'
                    });
                }
            }, 10);
        }
    };

    return (
        <section
            ref={sectionRef}
            className={`site-section py-20 transition-all duration-700 md:translate-y-8 lg:py-24 ${isInView ? 'translate-y-0 opacity-100' : ''}`}
            id="templates"
        >
            <svg width="0" height="0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="custom-templates-gradient" x1="0" y1="24" x2="47.999" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DBDADA" />
                        <stop offset="1" stopColor="#7A7878" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="container">
                <header className="mx-auto mb-24 w-full text-center lg:w-4/5">
                    <h6 className="relative mb-12 inline-flex translate-y-6 items-center gap-1.5 overflow-hidden rounded-full bg-secondary px-5 py-2 text-secondary-foreground shadow-xs shadow-primary">
                        <svg strokeWidth="1.5" className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg> Custom
                    </h6>
                    <h2 className="mb-12">
                        المدونة.
                    </h2>
                    <a className="group/btn flex items-center justify-center gap-2 text-white transition-colors hover:text-primary" href="#templates">
                        Discover MagicAI
                        <i className="fa-solid fa-chevron-left"></i>
                    </a>
                </header>

                <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {templates.map((template, index) => (
                        <div
                            key={template.id}
                            className={`group relative z-2 flex-col rounded-3xl p-1 px-10 pt-10 transition-all duration-300 ${index > 5 && !showMore ? 'hidden' : 'flex'}`}
                        >
                            <div className="pointer-events-none absolute inset-x-0 -top-20 bottom-0 z-0 overflow-hidden rounded-3xl p-0.5 transition-all duration-300 group-hover:shadow-[0_5px_75px_hsl(var(--primary)/10%)] group-hover:delay-200">
                                <div className="absolute inset-[1px] translate-y-20 rounded-3xl bg-black transition-all duration-300 group-hover:translate-y-0">
                                    <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 transition-all duration-300 group-hover:opacity-100">
                                        <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="relative z-1 transition-all duration-300 group-hover:-translate-y-20">
                                <div className="mb-12">
                                    <div className="custom-templates-icon w-12 [&_svg]:h-auto [&_svg]:w-full">
                                        {template.icon}
                                    </div>
                                </div>
                                <h5 className="mb-6">
                                    {template.title}
                                </h5>
                                <p className="mb-10 text-white/80">
                                    {template.description}
                                </p>
                            </div>

                            <div className="group/link absolute bottom-0 end-10 start-10 z-1 flex h-20 -translate-y-20 items-center overflow-hidden transition-all duration-300 group-hover:translate-y-0">
                                <a className="flex h-full w-full translate-y-20 items-center justify-between gap-2 border-t border-white/20 text-sm font-semibold text-white transition-all duration-300 hover:text-primary group-hover:translate-y-0" href="#templates">
                                    Learn more <i className="fa-solid fa-chevron-left"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a
                        className="group/btn flex items-center justify-center gap-2 text-white transition-colors hover:text-primary"
                        href="#"
                        onClick={handleShowMore}
                    >
                        <span className={showMore ? 'hidden' : ''}>Show More</span>
                        <span className={!showMore ? 'hidden' : ''}>Show Less</span>
                        <i className="fa-solid fa-chevron-left"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TemplatesSection; 