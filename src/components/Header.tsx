import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoLight from "/assets/img/logo/logoLight.png";
import logoDark from "/assets/img/logo/logoDark.webp";
import { NavLink, Link } from "react-router-dom";
import {
  faBars,
  faXmark,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  theme: boolean;
  onChangeTheme: (theme: boolean) => void;
}

const Navigation = ({ theme, onChangeTheme }: Props) => {
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let title: string;
    switch (location.pathname) {
      case "/":
        title = "الرئيسية";
        break;
      case "/how-to-serve":
        title = "كيف نخدمك";
        break;
      case "/timeline":
        title = "رحلة دوينج";
        break;
      case "/about":
        title = "عن دوينج";
        break;
      case "/price":
        title = "الأسعار";
        break;
      case "/login":
        title = "تسجيل الدخول";
        break;
      case "/signup":
        title = "انشاء حساب";
        break;
      default:
        title = "مدونة دوينج";
        break;
    }
    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(event.target as Node) && 
            !mobileMenuButton.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-transform duration-300 backdrop-blur-sm dark:bg-black/80 ${visible ? 'translate-y-0' : '-translate-y-full'
      } ${theme ? "text-white" : "text-gray-950"}`}>
      <div className=" w-full p-2 px-3">
        <div className="flex items-center h-16">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center w-full">
            <div className="flex items-center w-full">
              <div className=" text-lg font-bold">
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

              <div className=" text-lg font-bold" style={{ visibility: "hidden" }}>
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
              <div className="hidden lg:flex items-center justify-center mx-auto">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `transition-all text-md pl-5 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : "opacity-80"
                    }`
                  }
                >
                  الرئيسية
                </NavLink>
                {/* <NavLink
                  to="/how-to-serve"
                  className={({ isActive }) =>
                    `transition-all text-md pl-5 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : "opacity-80"
                    }`
                  }
                >
                  كيف نخدمك
                </NavLink> */}
                <NavLink
                  to="/timeline"
                  className={({ isActive }) =>
                    `transition-all text-md pl-5 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : "opacity-80"
                    }`
                  }
                >
                  رحلة دوينج
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-all text-md pl-5 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : "opacity-80"
                    }`
                  }
                >
                  عن دوينج
                </NavLink>
                <NavLink
                  to="/price"
                  className={({ isActive }) =>
                    `transition-all text-md pl-5 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : "opacity-80"
                    }`
                  }
                >
                  الأسعار
                </NavLink>

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
                    <div className="absolute bg-stone-200 dark:bg-black text-gray-900 dark:text-white rounded-md w-40 mt-0 py-2 shadow-lg">
                      <NavLink
                        to="/help"
                        className={({ isActive }) =>
                          `block px-4 py-2 hover:text-sky-400 ${
                            isActive ? "text-sky-400" : ""
                          }`
                        }
                      >
                        مركز المساعدة
                      </NavLink>
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                          `block px-4 py-2 hover:text-sky-400 ${
                            isActive ? "text-sky-400" : ""
                          }`
                        }
                      >
                        المدونة
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>



              {/* Login & Signup Buttons */}

              <div className="hidden lg:flex gap-2 items-center layout-buttons">

                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5 ${
                      isActive ? "text-sky-400" : ""
                    }`
                  }
                >
                  تسجيل الدخول
                </NavLink>
                <div className="relative">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `relative inline-flex items-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 bg-white/[2%] px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-primary/5 ${
                        isActive ? "text-sky-400" : ""
                      }`
                    }
                  >
                    انشاء حساب

                    <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1">
                      <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                    </span>
                    <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [&_.lqd-outline-glow-inner]:[animation-direction:alternate]">
                      <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                    </span>

                  </NavLink>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={`lg:hidden flex gap-2`}>
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 dark:text-white "
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
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
      <div
        id="mobile-menu"
        className={` fixed top-[70px] left-0 right-0 dark:bg-black/80 backdrop-blur-sm transition-all z-50
          transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${theme ? "text-white" : "text-gray-950"}
          ${
          isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block transition-all text-md px-3 py-2 hover:text-sky-400 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/how-to-serve"
              className={({ isActive }) =>
                `block transition-all text-md px-3 py-2 hover:text-sky-400 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              كيف نخدمك
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `block transition-all text-md px-3 py-2 hover:text-sky-400 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              رحلة دوينج
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block transition-all text-md px-3 py-2 hover:text-sky-400 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              عن دوينج
            </NavLink>
            <NavLink
              to="/price"
              className={({ isActive }) =>
                `block transition-all text-md px-3 py-2 hover:text-sky-400 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              الأسعار
            </NavLink>

            {/* Services Dropdown in Mobile */}
            <div className="block">
              <button
                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full text-right px-3 py-2 hover:text-sky-400 focus:outline-none flex items-center justify-between"
              >
                <span>خدمة التُجار</span>
                <FontAwesomeIcon 
                  className="w-4 h-4" 
                  icon={isMobileDropdownOpen ? faAngleUp : faAngleDown} 
                />
              </button>
              <div className={`px-3 py-2 space-y-2 transition-all duration-300 ${
                isMobileDropdownOpen ? 'block' : 'hidden'
              }`}>
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    `block px-3 py-2 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  مركز المساعدة
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `block px-3 py-2 hover:text-sky-400 ${
                      isActive ? "text-sky-400" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  المدونة
                </NavLink>
              </div>
            </div>

            {/* Login & Signup Buttons in Mobile */}
            <div className="flex flex-col space-y-3 mt-4 px-3">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white ${
                    isActive ? "opacity-100" : ""
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                تسجيل الدخول
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center rounded-lg border-2 border-gray-900/10 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white text-center transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-white ${
                    isActive ? "opacity-100" : ""
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                انشاء حساب

                <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1">
                  <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                </span>
                <span className="lqd-outline-glow absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden lqd-outline-glow-effect-1 [&_.lqd-outline-glow-inner]:[animation-direction:alternate]">
                  <span className="lqd-outline-glow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block aspect-square w-full min-w-[125%] rounded-[inherit]"></span>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
