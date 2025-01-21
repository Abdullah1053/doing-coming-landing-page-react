const Footer = () => {
    const socialLinks = [
        {
            name: 'Linkedin',
            icon: (
                <svg width="50" height="52" viewBox="0 0 50 52" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.4358 43.9153H35.1192V32.1428C35.1192 29.3353 35.0705 25.7228 31.3137 25.7228C27.5033 25.7228 26.9193 28.7803 26.9193 31.9403V43.9153H19.6051V19.7053H26.6297V23.0128H26.7271C28.1602 20.4978 30.8221 18.9953 33.6568 19.1028C41.0732 19.1028 42.4383 24.1153 42.4383 30.6328L42.4358 43.9153ZM11.3492 16.3953C9.00359 16.3953 7.10326 14.4428 7.10326 12.0328C7.10326 9.62284 9.00359 7.67034 11.3492 7.67034C13.6948 7.67034 15.5951 9.62284 15.5951 12.0328C15.5951 14.4428 13.6948 16.3953 11.3492 16.3953ZM15.0063 43.9153H7.68236V19.7053H15.0063V43.9153ZM46.0832 0.690341H4.00579C2.01786 0.667841 0.387613 2.30534 0.363281 4.34784V47.7578C0.387613 49.8028 2.01786 51.4403 4.00579 51.4178H46.0832C48.076 51.4428 49.7136 49.8053 49.7403 47.7578V4.34534C49.7111 2.29784 48.0736 0.660341 46.0832 0.687841" />
                </svg>
            ),
            description: 'Developments in the sector'
        },
        {
            name: 'Telegram',
            icon: (
                <svg width="54" height="44" viewBox="0 0 54 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.90766 21.6842L13.9835 25.7855L42.6529 8.25838C43.0684 8.0042 43.4942 8.56864 43.1358 8.89856L21.431 28.8769L20.6238 40.0616C20.5623 40.9125 21.5873 41.3862 22.1955 40.7881L28.8784 34.2166L41.0954 43.4649C42.4122 44.4619 44.319 43.7592 44.6743 42.1462L53.181 3.52121C53.6662 1.31777 51.5072 -0.541559 49.4001 0.265366L1.84622 18.475C0.35447 19.0463 0.395102 21.1706 1.90766 21.6842Z" />
                </svg>
            ),
            description: 'Fast instant communication'
        },
        {
            name: 'Twitter',
            icon: (
                <svg width="53" height="44" viewBox="0 0 53 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.471 37.7979C34.471 37.7979 48.336 28.3209 47.4014 11.0805C47.4014 11.0805 52.0749 7.18586 52.75 5.47223C52.75 5.47223 48.7514 7.13391 46.8301 6.9262C46.8301 6.9262 51.3998 3.60272 51.1401 0.902476C51.1401 0.902476 46.6743 3.39501 44.4933 3.6027C44.4933 3.6027 36.2886 -3.30381 28.707 3.18728C28.707 3.18728 24.9681 6.19913 25.6951 13.6769C25.6951 13.6769 14.279 13.6769 3.36576 2.35643C3.36576 2.35643 -0.996275 11.3921 6.68913 16.7407C6.68913 16.7407 4.24855 17.3119 1.75593 15.2348C1.75593 15.2348 1.60017 23.9589 10.5838 26.2956C10.5838 26.2956 7.88356 27.0745 5.80634 26.5553C5.80634 26.5553 7.62389 33.5656 15.7767 33.9292C15.7767 33.9292 10.6357 39.5375 0.25 38.4989C0.25 38.4989 13.9852 50.4166 34.471 37.7979Z" />
                </svg>
            ),
            description: 'Latest news and updates'
        },
        {
            name: 'Facebook',
            icon: (
                <svg width="54" height="54" viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 0C12.087 0 0 12.087 0 27C0 40.5 10.5 51 24 54V35.1H17.1V27H24V21.6C24 16.2 27.9 13.5 32.4 13.5C34.2 13.5 36 13.8 36 13.8V20.7H33.3C30.6 20.7 30 22.5 30 24V27H36L35.1 35.1H30V54C43.5 51 54 40.5 54 27C54 12.087 41.913 0 27 0Z" />
                </svg>
            ),
            description: 'The most popular social media'
        }
    ];

    return (
        <footer className="site-footer lg:pt-30 relative pt-20 text-white">
            <div className="relative">
                <div className="container mb-24">
                    <div className="mx-auto w-2/3 text-center max-lg:w-10/12 max-sm:w-full">
                        <p style={{ lineHeight: '2 !important' }} className="-from-[5%] mb-10 inline-block bg-gradient-to-br from-white from-30% to-white/70 bg-clip-text font-heading text-[82px] font-bold leading-none tracking-tight text-transparent max-sm:text-[18vw]">
                            منصة واحدة ، آلاف الفرص.
                        </p>
                        <p className="mx-auto mb-12 w-full font-heading text-xl/7 text-white/70 lg:w-8/12">
                            ✨ابدأ الآن وكن جزءًا من التحول الرقمي✨
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                            <a className="relative inline-flex w-56 gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 to-50% py-5 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                                href="#"
                                >
                                <span className="flex animate-marquee justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]" data-txt="Join our community">
                                    Join our community
                                </span>
                                <span className="absolute start-3 top-5 flex animate-marquee-2 justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)]" data-txt="Join our community">
                                    Join our community
                                </span>
                            </a>
                            <a className="group/btn flex items-center gap-2 text-white transition-colors hover:text-primary"
                                href="https://codecanyon.net/item/magicai-openai-content-text-image-chat-code-generator-as-saas/45408109"
                                target="_blank">
                                Join MagicAI
                                <i className="fa-solid fa-chevron-left"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container mb-20">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {socialLinks.map((social, index) => (
                            <a key={index} className="group flex flex-col items-center rounded-2xl px-4 pb-8 pt-10 text-center leading-tight text-white/50 transition-all hover:scale-105 hover:text-white" href="#">
                                <span className="mb-8 block">
                                    {social.icon}
                                </span>
                                <span className="mb-2.5 block font-heading text-lg">
                                    {social.name}
                                </span>
                                <span className="block text-2xs transition-opacity group-hover:opacity-60">
                                    {social.description}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-white border-opacity-15" />

                <div className="container">
                    <div className="flex flex-wrap items-center justify-between gap-8 py-14 max-sm:justify-center">
                        <a href="index.html">
                            <img src="./assets/img/logo/HESz--magicai-logo.svg" alt="MagicAI logo" />
                        </a>
                        <ul className="flex flex-wrap items-center justify-end gap-7 text-sm max-sm:justify-center">
                        </ul>
                    </div>

                    <hr className="border-white border-opacity-15" />

                    <div className="flex flex-wrap items-center justify-between gap-y-4 py-9">
                        <p className="w-full text-sm text-white/60 lg:w-1/2">
                            2025 MagicAI. All images are for demo purposes.
                        </p>

                        <ul className="flex w-full flex-wrap items-center gap-7 text-sm text-white lg:w-1/2 lg:justify-end">
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <a className="inline-flex items-center gap-2 hover:text-white/80" href="#">
                                        <span className="w-3.5 [&_svg]:h-auto [&_svg]:w-full">
                                            {social.icon}
                                        </span>
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 