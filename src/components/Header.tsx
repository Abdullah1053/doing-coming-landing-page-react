// import { useState } from "react";
// import logoLight from "../../public/assets/img/logo/logoLight.png";
// import logoDark from "../../public/assets/img/logo/logoDark.webp";
// import { Link } from "react-router-dom";

// interface Props {
//   theme: boolean;
//   onChangeTheme: (theme: boolean) => void;
// }

// const Header = ({ theme, onChangeTheme }: Props) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="site-header group/header relative z-50 text-gray-900 dark:text-white transition-[background,shadow]">
//       <nav
//         className="site-header-nav relative flex items-center justify-between px-7 py-6 text-xs/tight  transition-all duration-300 group-[.lqd-is-sticky]/header:fixed group-[.lqd-is-sticky]/header:top-0 group-[.lqd-is-sticky]/header:w-full group-[&.lqd-is-sticky]/header:bg-black group-[.page-loaded]/body:opacity-100 group-[&.lqd-is-sticky]/header:shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-sm:px-2"
//         id="frontend-local-navbar"
//       >
//         <a className="site-logo relative basis-1/4 max-lg:basis-1/4" href="/">
//           <img
//             className="transition-all group-[.lqd-is-sticky]/header:peer-first:translate-x-2 group-[.lqd-is-sticky]/header:peer-first:opacity-0"
//             src={theme ? logoLight : logoDark}
//             alt="Doing logo"
//             style={{ maxHeight: "2.75rem" }}
//           />
//         </a>
//         <div
//           className={`site-nav-container basis-1/3 transition-all max-lg:absolute max-lg:right-0 max-lg:w-full max-lg:top-full max-lg:rounded-md max-lg:overflow-hidden max-lg:bg-stone-50 max-lg:text-gray-900 max-lg:dark:bg-gray-950 max-lg:dark:text-white ${
//             isMobileMenuOpen
//               ? "max-lg:max-h-[calc(100vh-150px)]"
//               : "max-lg:max-h-0"
//           }`}
//         >
//           <div className="max-lg:max-h-[inherit] max-lg:overflow-y-scroll">
//             <ul className="text-xs flex items-center justify-center gap-14 whitespace-nowrap text-center font-medium uppercase max-xl:gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-lg:p-10">
//               <li>
//                 <Link
//                   to="/"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   الرئيسية
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/how-to-serve"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   كيف نخدمك
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="#how-it-works"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   رحلة دوينج
//                 </a>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   عن دوينج
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/price"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   الأسعار
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="#faq"
//                   className="transition-all text-sm hover:text-sky-400 [&.active]:opacity-100"
//                 >
//                   خدمة التُجار
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex shrink-0 items-center basis-1/3 justify-end gap-2 max-lg:basis-2/3">
//           <button
//             className="top-4 right-4 z-50 p-1 w-8 h-8 rounded-full bg-stone-100 dark:bg-white/20 transition-colors"
//             onClick={() => onChangeTheme(!theme)}
//           >
//             {theme && <span>🌙</span>}
//             {!theme && <span>☀️</span>}
//           </button>
//           <a
//             className="relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5"
//             href="https://dark.projecthub.ai/login"
//           >
//             تسجيل الدخول
//           </a>
//           <a
//             className="relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 bg-white/[2%] px-4 py-2 font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5"
//             href="https://dark.projecthub.ai/register"
//           >
//             انشاء حساب
//             <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [--outline-glow-w:2px]">
//               <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
//             </span>
//           </a>
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`mobile-nav-trigger size-10 group flex shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-black lg:hidden ${
//               isMobileMenuOpen ? "lqd-is-active" : ""
//             }`}
//           >
//             <span className="flex w-4 flex-col gap-1">
//               <span className="inline-flex h-[2px] w-full bg-gray-900 dark:bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[&.lqd-is-active]:last:-rotate-45"></span>
//               <span className="inline-flex h-[2px] w-full bg-gray-900 dark:bg-white transition-transform first:origin-left last:origin-right group-[&.lqd-is-active]:first:-translate-y-[2px] group-[&.lqd-is-active]:first:translate-x-[3px] group-[&.lqd-is-active]:first:rotate-45 group-[&.lqd-is-active]:last:-translate-x-[2px] group-[&.lqd-is-active]:last:-translate-y-[8px] group-[&.lqd-is-active]:last:-rotate-45"></span>
//             </span>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import logoLight from "../../public/assets/img/logo/logoLight.png";
import logoDark from "../../public/assets/img/logo/logoDark.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  theme: boolean;
  onChangeTheme: (theme: boolean) => void;
}

const Navigation = ({ theme, onChangeTheme }: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="text-gray-900 dark:text-white">
      <div className="container max-w-7xl py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Desktop Menu */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 text-lg font-bold">
                <Link
                  to="/"
                  className="site-logo relative basis-1/4 max-lg:basis-1/4"
                >
                  <img
                    className="transition-all group-[.lqd-is-sticky]/header:peer-first:translate-x-2 group-[.lqd-is-sticky]/header:peer-first:opacity-0"
                    src={theme ? logoLight : logoDark}
                    alt="Doing logo"
                    style={{ maxHeight: "2.75rem" }}
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center pr-10">
                <Link
                  to="/"
                  className="transition-all text-md pl-5 hover:text-sky-400 [&.active]:opacity-100"
                >
                  الرئيسية
                </Link>
                <Link
                  to="/how-to-serve"
                  className="transition-all text-md pl-5 hover:text-sky-400 [&.active]:opacity-100"
                >
                  كيف نخدمك
                </Link>
                <Link
                  to="/timeline"
                  className="transition-all text-md pl-5 hover:text-sky-400 [&.active]:opacity-100"
                >
                  رحلة دوينج
                </Link>
                <Link
                  to="/about"
                  className="transition-all text-md pl-5 hover:text-sky-400 [&.active]:opacity-100"
                >
                  عن دوينج
                </Link>
                <Link
                  to="/price"
                  className="transition-all text-md pl-5 hover:text-sky-400 [&.active]:opacity-100"
                >
                  الأسعار
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative z-50"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="pl-5 text-md hover:text-sky-400 focus:outline-none">
                    <span>
                      <span className="ml-1">خدمة التُجار</span>
                      {isMobileDropdownOpen ? (
                        <FontAwesomeIcon className="w-4 h-4" icon={faAngleUp} />
                      ) : (
                        <FontAwesomeIcon
                          className="w-4 h-4"
                          icon={faAngleDown}
                        />
                      )}
                    </span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute bg-stone-200 text-gray-900 dark:text-white rounded-md w-40 mt-0 py-2 shadow-lg">
                      <Link
                        to="/help"
                        className="block px-4 py-2 hover:text-sky-400"
                      >
                        مركز المساعدة
                      </Link>
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 hover:text-sky-400"
                      >
                        المدونة
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Login & Signup Buttons */}
            <div className="hidden lg:flex gap-2 items-center">
              <button
                className="top-4 right-4 z-50 p-1 w-8 h-8 rounded-full bg-stone-100 dark:bg-white/20 transition-colors"
                onClick={() => onChangeTheme(!theme)}
              >
                {theme && <span>🌙</span>}
                {!theme && <span>☀️</span>}
              </button>
              <Link
                className="relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5"
                to="/login"
              >
                تسجيل الدخول
              </Link>
              <Link
                className="relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 bg-white/[2%] px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5"
                to="signup"
              >
                انشاء حساب
                <span className="lqd-outline-glow absolute inline-block rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [--outline-glow-w:2px]">
                  <span className="lqd-outline-glow-inner absolute start-1/2 top-1/2 inline-block aspect-square min-h-[125%] min-w-[125%] rounded-[inherit]"></span>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex gap-2">
            <button
              className="top-4 right-4 z-50 p-1 w-8 h-8 rounded-full bg-stone-100 dark:bg-white/20 transition-colors"
              onClick={() => onChangeTheme(!theme)}
            >
              {theme && <span>🌙</span>}
              {!theme && <span>☀️</span>}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  icon={faXmark}
                />
              ) : (
                <FontAwesomeIcon
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  icon={faBars}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-5 bg-stone-100 dark:bg-white/20 rounded-lg">
          <Link
            to="/"
            className="block transition-all text-md px-3 py-2 hover:text-sky-400 [&.active]:opacity-100"
          >
            الرئيسية
          </Link>
          <Link
            to="/how-to-serve"
            className="block transition-all text-md px-3 py-2 hover:text-sky-400 [&.active]:opacity-100"
          >
            كيف نخدمك
          </Link>
          <Link
            to="/timeline"
            className="block transition-all text-md px-3 py-2 hover:text-sky-400 [&.active]:opacity-100"
          >
            رحلة دوينج
          </Link>
          <Link
            to="/about"
            className="block transition-all text-md px-3 py-2 hover:text-sky-400 [&.active]:opacity-100"
          >
            عن دوينج
          </Link>
          <Link
            to="/price"
            className="block transition-all text-md px-3 py-2 hover:text-sky-400 [&.active]:opacity-100"
          >
            الأسعار
          </Link>

          {/* Services Dropdown in Mobile */}
          <div className="block">
            <button
              onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full text-right px-3 py-2 rounded-md hover:text-sky-400 focus:outline-none"
            >
              <span>
                <span className="ml-1">خدمة التُجار</span>
                {isMobileDropdownOpen ? (
                  <FontAwesomeIcon className="w-4 h-4" icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon className="w-4 h-4" icon={faAngleDown} />
                )}
              </span>
            </button>
            {isMobileDropdownOpen && (
              <div className="px-3 py-2">
                <Link
                  to="/help"
                  className="block px-3 py-2 rounded-md hover:text-sky-400"
                >
                  مركز المساعدة
                </Link>
                <Link
                  to="/blogs"
                  className="block px-3 py-2 rounded-md hover:text-sky-400"
                >
                  المدونة
                </Link>
              </div>
            )}
          </div>

          {/* Login & Signup Buttons in Mobile */}
          <div className="flex flex-col space-y-2 mt-4">
            <Link
              to="/login"
              className="relative inline-flex items-center justify-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-100 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5">
              تسجيل الدخول
            </Link>
            <Link 
              to="/signup"
              className="relative inline-flex items-center justify-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-100 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5">
              انشاء حساب
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
