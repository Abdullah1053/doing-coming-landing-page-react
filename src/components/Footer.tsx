import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useOutletContext } from "react-router-dom";
import { SparklesPreview } from "./ui/code.demo";
import React from "react";

interface AppContext {
  darkMode: boolean;
}

const Footer = () => {
  const { darkMode } = useOutletContext<AppContext>();
  const socialLinks = [
    {
      name: "فيسبوك",
      iconClass: faFacebook,
      description: "Fast instant communication",
    },
    {
      name: "إنستقرام",
      iconClass: faInstagram,
      description: "Developments in the sector",
    },
    {
      name: "أكس",
      iconClass: faXTwitter,
      description: "Latest news and updates",
    },
  ];

  return (
    <>
    <SparklesPreview />

    <footer className="site-footer lg:pt-30 relative -mt-[275px] text-white z-30">
      <div className="relative">

        <div className="container relative w-full max-w-[1680px]">
          
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-14 justify-between">
            <div className="">
              <p className="mt-2 text-sm xl:text-md leading-7 text-gray-500 dark:text-white w-2/3">
                يوم جديد لتحقيق انطلاقتك في تجارتك، ابدأ الآن مع منصة دوينج، وكن
                جزءاً من مستقبل التجارة الإلكترونية
              </p>
              <button 
                className="mt-2 inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-sky-600 to-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >اطلق متجرك الآن</button>
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                معلومات
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    عن دوينج
                  </Link>
                </li>

                <li>
                  <Link
                    to="/how-to-serve"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    كيف نخدمك؟
                  </Link>
                </li>

                <li>
                  <Link
                    to="/timeline"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    رحلة النجاح
                  </Link>
                </li>

                <li>
                  <Link
                    to="/price"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    الأسعار
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                الدعم
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/help"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    مركز المساعدة
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    المدونة
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    سياسة الخصوصية
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-base text-gray-600 dark:text-white/80 hover:text-sky-400 hover:dark:text-sky-400"
                  >
                    الشروط و الأحكام
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-500 dark:border-white/50 border-opacity-15" />

          <div className="container flex flex-wrap items-center justify-between gap-y-4 py-2">
            <p className="w-full text-sm text-gray-900 dark:text-white/90 md:w-1/2 sm:text-center md:text-right">
              © 2025 Doing. جميع الحقوق محفوظة.
            </p>

            <ul className="flex w-full flex-wrap items-center gap-4 text-sm text-white md:w-1/2 sm:justify-center md:justify-end">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-sky-500 hover:dark:text-sky-500"
                    href="#"
                  >
                    <FontAwesomeIcon className="h-5" icon={social.iconClass} />
                    {/* <span className="mb-2.5 block font-heading text-lg text-gray-900 dark:text-white">
                      {social.name}
                    </span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
