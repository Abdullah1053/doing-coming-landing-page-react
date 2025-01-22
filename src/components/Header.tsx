import { useState } from "react";

interface Props {
  theme: boolean;
  onChangeTheme: (theme: boolean) => void;
}

const Header = ({ theme, onChangeTheme }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header group/header relative z-50 text-white transition-[background,shadow]">
      <nav
        className="site-header-nav relative flex items-center justify-between px-7 py-6 text-xs/tight  transition-all duration-300 group-[.lqd-is-sticky]/header:fixed group-[.lqd-is-sticky]/header:top-0 group-[.lqd-is-sticky]/header:w-full group-[&.lqd-is-sticky]/header:bg-black group-[.page-loaded]/body:opacity-100 group-[&.lqd-is-sticky]/header:shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-sm:px-2"
        id="frontend-local-navbar"
      >
        <a className="site-logo relative basis-1/3 max-lg:basis-1/3" href="/">
          <img
            className="transition-all group-[.lqd-is-sticky]/header:peer-first:translate-x-2 group-[.lqd-is-sticky]/header:peer-first:opacity-0"
            src="/upload/images/logo/HESz--magicai-logo.svg"
            alt="MagicAI logo"
          />
        </a>
        <div
          className={`site-nav-container basis-1/3 transition-all max-lg:absolute max-lg:right-0 max-lg:top-full max-lg:w-full max-lg:overflow-hidden max-lg:bg-black max-lg:text-white ${
            isMobileMenuOpen
              ? "max-lg:max-h-[calc(100vh-150px)]"
              : "max-lg:max-h-0"
          }`}
        >
          <div className="max-lg:max-h-[inherit] max-lg:overflow-y-scroll">
            <ul className="textxs flex items-center justify-center gap-14 whitespace-nowrap text-center font-medium uppercase max-xl:gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-lg:p-10">
              <li>
                <a
                  href="#banner"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="opacity-40 transition-all hover:opacity-100 [&.active]:opacity-100"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex basis-1/3 justify-end gap-2 max-lg:basis-2/3">
          <button
            className="top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
            onClick={() => onChangeTheme(!theme)}
          >
            {theme && <span>🌙</span>}
            {!theme && <span>☀️</span>}
          </button>
          <a
            className="relative inline-flex items-center rounded-lg border-2 border-white/10 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/5"
            href="https://dark.projecthub.ai/login"
          >
            Sign In
          </a>
          <a
            className="relative inline-flex items-center rounded-lg border-2 border-white/10 bg-white/[2%] px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/5"
            href="https://dark.projecthub.ai/register"
          >
            Join Hub
            <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [--outline-glow-w:2px]">
              <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
            </span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`mobile-nav-trigger size-10 group flex shrink-0 items-center justify-center rounded-full bg-white/10 lg:hidden ${
              isMobileMenuOpen ? "lqd-is-active" : ""
            }`}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="inline-flex h-[2px] w-full bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[&.lqd-is-active]:last:-rotate-45"></span>
              <span className="inline-flex h-[2px] w-full bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[&.lqd-is-active]:last:-rotate-45"></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
