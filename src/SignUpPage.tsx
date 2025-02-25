import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useOutletContext } from "react-router-dom";

const SignUpPage = () => {



  const { darkMode } = useOutletContext() as { darkMode: boolean } || { darkMode: true };

  // State to control the translation effect for the inner div
  const [move, setMove] = useState({ x: -150});

  // Add an extra state variable to track if the button is being hovered
  const [active, setActive] = useState(false);

  // Update `move` based on the mouse position relative to the button center.
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (rect.left + rect.width) - e.clientX;
    // Reverse the direction: subtract the offset from the default 150 pixels.
    setMove({ x: 150 - offsetX * 0.5 });
  };

  // Reset the effect when the mouse leaves the button.
  const handleMouseLeave = () => {
    setActive(false);
    setMove({ x: -150 });
  };


  return (
    <>
      <Helmet>
        <title>انشاء حساب في منصة دوينج</title>
      </Helmet>

      {/* Header (extracted from login.html) */}
      <header className={`absolute left-0 top-0 z-50 w-full px-safe pt-safe ${darkMode ? "bg-black text-white" : "bg-white text-gray-950"}`}>
        <div className="container">
          <Link
            to="/"
            className="transition-all group flex items-center gap-x-1.5 py-4 text-13 font-medium tracking-snugger text-grey-90 hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="text-grey-60 group-hover:text-grey-80"
              fill="none"
              height="10"
              viewBox="0 0 11 10"
              width="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5H1m0 0 4-4M1 5l4 4"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            الرئيسية
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <section className={`min-w-[350px] bg-[#090a0f] pb-10 relative flex h-screen min-h-[113vh] flex-col items-center justify-center overflow-hidden px-safe xs:min-h-[115vh] xs:px-5 ${darkMode ? "bg-black text-white" : "bg-white text-gray-950"}`}>
        <div className="relative z-10 h-[100%] lg:mt-40 mt-[70px] w-[480px] bg-black px-12 pt-14 lg:w-[464px] lg:px-10 lg:pt-[64px] md:px-11 xs:w-full xs:max-w-sm xs:px-5 xs:py-5">
          {/* Doing Logo with hover effects */}
          <div className="relative inline-flex group">
            <img
              alt="Doing Platform Logo" 
              className="w-6 h-6 lg:w-7 lg:h-7 xs:w-6 xs:h-6 transition-transform duration-300 group-hover:scale-110"
              src="/assets/img/login/logo.png"
              width="28"
              height="28"
            />
            <div
              className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform transition-opacity duration-300 opacity-70 group-hover:opacity-100"
              style={{ opacity: 1 }}
            >
              <div className="border-button-light relative h-full w-full rounded-full animate-pulse"></div>
            </div>
          </div>
          <main>
            <h1 className="mt-[17px] font-title font-semibold leading-none tracking-snugger text-white mx-auto text-center text-32 md:text-28 xs:mt-3 xs:text-24">
              انشاء حساب في منصة دوينج
            </h1>
            {/* Sign In Form */}

            <form className="mt-7 flex flex-col lg:mt-6 xs:mt-5" noValidate dir='rtl'>
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-14 leading-snug tracking-snugger text-grey-60 mt-4"
                >
                  اسم المتجر
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="إدخل اسم المتجر"
                    required
                    className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border bg-black/20 px-3 py-[9px] text-15 tracking-snugger text-white placeholder-white/50 outline-none focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                  />
                </div>
              </div>

              <label
                htmlFor="email"
                className="block text-14 leading-snug tracking-snugger text-grey-60 mt-4"
              >
                البريد الإلكتروني
              </label>
              <div className="relative mt-0.5 xs:mb-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="البريد الإلكتروني"
                  required
                  className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border bg-black/20 px-3 py-[9px] text-15 tracking-snugger text-white placeholder-white/50 outline-none focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                />
              </div>
              

              <div>
                <label
                  htmlFor="phone"
                  className="block text-14 leading-snug tracking-snugger text-grey-60 mt-4"
                >
                  رقم الجوال
                </label>
                <div className="mt-1" >
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">967</span>
                    <input dir="rtl"
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="phone"
                      placeholder="إدخل رقم الجوال"
                      maxLength={9}
                      required
                      className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border bg-black/20 px-3 pl-12 py-[9px] text-15 tracking-snugger text-white placeholder-white/50 outline-none focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                    />
                  </div>
                </div>
              </div>

              <label
                htmlFor="password"
                className="block text-14 leading-snug tracking-snugger text-grey-60 mt-4"
              >
                كلمة المرور
              </label>
              <div className="relative mt-0.5 xs:mb-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="أدخل كلمة المرور"
                  required
                  className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border bg-black/20 px-3 py-[9px] text-15 tracking-snugger text-white placeholder-white/50 outline-none focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-14 leading-snug tracking-snugger text-grey-60 mt-4"
                >
                  تأكيد كلمة المرور
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="إدخل كلمة المرور"
                    required
                    className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border bg-black/20 px-3 py-[9px] text-15 tracking-snugger text-white placeholder-white/50 outline-none focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-start my-10">
                <div className="flex items-center">
                    
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className=" mx-2 my-auto rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block lg:text-sm sm:text-12 text-grey-60"
                  >
                    بالتسجيل فأنا أوافق على <Link to="/legal/terms.html" className="text-blue-500">سياسات منصة دوينج</Link>
                  </label>
                  
                </div>
              </div>
              <div className="mt-[27px] h-11 xs:mt-4 xs:h-10">
                <div className="relative inline-flex items-center w-full">
                  <div
                    className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
                    style={{ opacity: move.x > 100 ? 1 : 0 }}
                  >
                    <div className="border-button-light relative h-full w-full rounded-full"></div>
                  </div>
                  <div
                    className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform"
                    style={{ opacity: move.x < -140 ? 1 : 0 }}
                  >
                    <div className="border-button-light relative h-full w-full rounded-full"></div>
                  </div>
                  <button
                    type="submit"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="transition-all duration-200 uppercase font-bold flex items-center justify-center h-11 w-full text-13 text-black -tracking-[0.015em] relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] px-16 sm:pl-[59px] sm:pr-[52px] xs:h-10"
                  >
                    <div
                      className="absolute -z-10 flex w-full items-center justify-center"
                      style={{ 
                        transform: `translate(${move.x}px) translateZ(0)`,
                        transition: "transform 0.2s ease-out"
                      }}
                    >
                      <div
                        className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#F5F9FF_3.5%,_#81AAFF_26.5%,#9FC3FF_37.5%,rgba(129,170,255,0.50)_49%,rgba(58,106,210,0.00)_92.5%)]"
                      ></div>
                      <div
                        className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#F7FAFF_29%,_#CDEBFF_48.5%,_#BFD4F4_60.71%,rgba(210,211,214,0.00)_100%)] blur-[5px]"
                      ></div>
                    </div>
                    <span className="whitespace-nowrap text-14 uppercase leading-[42px] text-black">
                      انشاء حساب
                    </span>
                  </button>
                  <div aria-hidden="true" className="pointer-events-none z-50 sm:hidden">
                    <img
                      alt=""
                      className="absolute right-0 top-[-69px] h-[42px] w-auto rounded"
                      height="42"
                      loading="lazy"
                      src="/assets/img/login/right-border.svg"
                      width="193"
                    />
                    <img
                      alt=""
                      className="absolute left-0 top-[-69px] h-[42px] w-auto rounded"
                      height="42"
                      loading="lazy"
                      src="/assets/img/login/left-border.svg"
                      width="193"
                    />
                    {/* Additional decorative images could be added here */}
                  </div>
                </div>
              </div>
            </form>

            {/* Alternative Sign-In Methods */}
            <div className="relative mt-[25px] flex items-center lg:mt-[23px] xs:mt-4">
              <div className="h-px w-full bg-gradient-to-r from-gray-700 to-gray-500"></div>
              <span className="px-3.5 text-13 uppercase text-grey-40">Or</span>
              <div className="h-px w-full bg-gradient-to-r from-gray-500 to-gray-700"></div>
            </div>
            <div className="mt-[25px] grid grid-cols-2 gap-x-4 lg:mt-[22px] md:gap-x-2 xs:mt-4 xs:grid-cols-1 xs:gap-y-3">
              <a
                className="w-full transition-colors duration-200 transition-all duration-200 uppercase font-bold flex items-center justify-center h-10 px-16 text-12 text-white tracking-snugger rounded bg-grey-5 ring-1 ring-white/10 transition-all duration-200 hover:ring-white/15 mx-px gap-x-2 !px-2 !text-13 col-span-2"
                href="https://account.huly.app/auth/google"
              >
                <img
                  alt="Google Logo"
                  data-nimg="1"
                  decoding="async"
                  height="22"
                  loading="lazy"
                  src="/assets/img/login/google.svg"
                  style={{ color: "transparent" }}
                  width="22"
                />
                <span className="normal-case sm:text-10">
                  Sign in with Google
                </span>
              </a>
              
            </div>
          </main>

          <div aria-hidden="true" className="pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -z-20 aspect-square w-[1920px] max-w-none -translate-x-1/2 -translate-y-1/2 transform lg:w-[1880px] md:w-[1620px] sm:w-[1280px]">
                <video className="absolute inset-0 w-full h-full" width="1920" height="1920" autoPlay loop playsInline style={{opacity: 1}}>
                    <source src="assets/videos/cloudy.mp4" type="video/mp4"/>
                </video>
              </div>
              <img alt=""
                className="absolute left-[28%] top-1/2 -z-20 max-w-none -translate-x-1/2 -translate-y-1/2 transform bg-blend-lighten blur-[4px] xs:left-20 xs:scale-90"
                data-nimg="1" decoding="async" height="1000" loading="lazy"
                src="assets/img/login/outer-dots.svg" style={{ color: "transparent" }}
                width="1403" />
              <div
                className="absolute inset-0 -z-10 overflow-hidden rounded-[20px] shadow-[0px_4px_25px_rgba(11,13,16,0.8)] [transform:translateZ(0)] xs:rounded-[18px]">
                <img alt=""
                  className="absolute -z-10 max-w-none w-full rounded-[20px] bg-black xs:left-1/2 h-[100%] xs:-translate-x-1/2"
                  data-nimg="1" decoding="async" height="575"
                  src="assets/img/login/card-image.jpg"
                  style={{ color: "transparent" }} width="480" />
                <img alt=""
                  className="absolute left-[0.5px] top-0 max-w-none xs:left-0 xs:w-full xs:max-w-sm" data-nimg="1"
                  decoding="async" height="575"
                  src="assets/img/login/card-border.svg" style={{ color: "transparent" }}
                  width="480" />
              </div>
            </div>

            {/* Sign up Link */}
            <div className="relative mt-[25px] flex items-center justify-center lg:mt-[23px] xs:mt-10" dir='rtl'>
              <span className="text-white opacity-40">لديك حساب؟</span>
              <Link className="text-grey-90 hover:text-white ms-2" to="/login">
                تسجيل الدخول
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="absolute bottom-8 z-10 mt-3 flex items-center gap-x-3 text-13">
            <a
              className="transition-colors duration-200 text-white opacity-40 hover:opacity-80"
              href="/legal/terms.html"
            >
              Terms of Use
            </a>
            <span className="block h-3 w-px bg-gray-300"></span>
            <a
              className="transition-colors duration-200 text-white opacity-40 hover:opacity-80"
              href="/legal/privacy.html"
            >
              Privacy policy
            </a>
          </div>
      </section>
    </>
  );
};

export default SignUpPage;
