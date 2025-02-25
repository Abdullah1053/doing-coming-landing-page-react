import Footer from "./components/Footer";
import { useOutletContext } from "react-router-dom";

function HelpPage() {
  const { darkMode } = useOutletContext();

  return (
    <div
      dir="rtl"
      className={`min-h-screen pt-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      {/* Start Banner */}
      <section className="mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-[2rem] leading-[40px] font-semibold tracking-tight text-gray-900 dark:text-white">
                انطلق إلى التجارة الإلكترونية الحديثة مع دوينج، منصتنا تمكّنك من
                إطلاق عملك التجاري بسرعة وذكاء، دون الحاجة لخبرة تقنية.
              </h2>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center w-36 rounded-md border-transparent bg-gradient-to-r from-sky-500 to-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-sky-600 hover:to-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                ابدأ تجارتك الآن
              </a>
            </div>
            <div className="rounded-xl overflow-hidden h-[485px]">
              <img className="w-full h-full object-cover" src="/assets/img/doing-jounary.jpeg" alt="" width="620" height="620" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}
      {/* Start Timeline */}
      {/* <section className="container mx-auto w-full h-full mt-24 mb-24">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute left-1/2 border-opacity-20 border-gray-700 h-full border"></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-sky-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-stone-200 rounded-lg shadow-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">سجل الآن</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                ببساطة، ابدأ رحلتك بتسجيل حساب جديد في خطوات سهلة وسريعة.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-sky-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-stone-200 rounded-lg shadow-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                اختر تصميمك
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                اختر بين مجموعة من القوالب الجاهزة التي تناسب احتياجاتك التجارية
                او ابدأ بتصميم متجرك.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-sky-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-stone-200 rounded-lg shadow-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                اربط وسائل الدفع
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                قم بربط متجرك مع وسائل الدفع الإلكترونية الموثوقة، لتبدأ عمليات
                البيع بأمان.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-sky-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-stone-200 rounded-lg shadow-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                ابدأ البيع
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                بعد تجهيز متجرك، ابدأ بيع منتجاتك على الفور. تتيح لك منصتنا
                البدء في بيع المنتجات بعد دقائق من الإعداد.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container p-0 w-full h-full mt-24 mb-24">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sky-500 before:to-transparent">
          <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active opacity-100 animate-slideIn">
            <div className="relative -left-[10px] lg:-left-[10px] md:left-[65px] lg:left-[85px] xl:left-[110px] flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-sky-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-[linear-gradient(146deg,rgba(48,120,175,1)_0%,rgba(24,59,91,1)_52%,rgba(10,162,242,1)_100%)]">
              1
            </div>
            <div className="lg:w-full w-[85%] md:w-5/12 bg-stone-200 dark:bg-white/20 px-6 py-4 rounded-lg border border-slate-200 dark:border-black shadow-lg">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900 dark:text-white">سجل الآن</div>
              </div>
              <div className="text-gray-800 dark:text-white/70">
                ببساطة، ابدأ رحلتك بتسجيل حساب جديد في خطوات سهلة وسريعة.
              </div>
            </div>
          </div>

          <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="relative right-[10px] md:right-[62px] lg:right-[86px] xl:right-[107px] flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-sky-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-[linear-gradient(146deg,rgba(48,120,175,1)_0%,rgba(24,59,91,1)_52%,rgba(10,162,242,1)_100%)]">
              2
            </div>
            <div className="lg:w-full w-[85%] md:w-5/12 bg-stone-200 dark:bg-white/20 px-6 py-4 rounded-lg border border-slate-200 dark:border-black shadow-lg transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900 dark:text-white">اختر تصميمك</div>
              </div>
              <div className="text-gray-800 dark:text-white/70">
                اختر من بين مجموعة من القوالب الجاهزة التي تناسبك احتياحاتك التجارية او ابدأ بتصميم متجرك.
              </div>
            </div>
          </div>

          <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active opacity-100 animate-slideIn animation-delay-600">
            <div className="relative -left-[10px] lg:-left-[10px] md:left-[65px] lg:left-[85px] xl:left-[110px] flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-sky-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-[linear-gradient(146deg,rgba(48,120,175,1)_0%,rgba(24,59,91,1)_52%,rgba(10,162,242,1)_100%)]">
              3
            </div>
            <div className="lg:w-full w-[85%] md:w-5/12 bg-stone-200 dark:bg-white/20 px-6 py-4 rounded-lg border border-slate-200 dark:border-black shadow-lg transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900 dark:text-white">اربط وسائل الدفع</div>
              </div>
              <div className="text-gray-800 dark:text-white/70">
                قم بربط متجرك مع وسائل الدفع الإلكترونية الموثوقة، لتبدأ عمليات البيع بأمان.
              </div>
            </div>
          </div>

          <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active opacity-100 animate-slideIn animation-delay-900">
            <div className="relative right-[10px] md:right-[62px] lg:right-[86px] xl:right-[107px] flex items-center justify-center w-10 h-10 rotate-45 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {/* Doing Logo with hover effects */}
              <div className="relative inline-flex group -rotate-45">
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
            </div>
            <div className="lg:w-full w-[85%] md:w-5/12 bg-stone-200 dark:bg-white/20 px-6 py-4 rounded-lg border border-slate-200 dark:border-black shadow-lg transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900 dark:text-white">ابدأ البيع</div>
              </div>
              <div className="text-gray-800 dark:text-white/70">
                بعد تجهيز متجرك، ابدأ بيع منتجاتك على الفور. تتيح لك منصتنا البدء في بيع المنتجات بعد دقائق من الإعداد.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Timeline */}
      {/* Start CTA  */}
      <section className="mt-20 mx-5 rounded-3xl">
        <div className="container">
          <div className="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-[1.8rem] font-bold text-gray-900 dark:text-white">
              مستعد لبدء قصة نجاحك في عالم التجارة الإلكترونية؟
            </h2>
            <p className="mt-6 text-[1.3rem] text-gray-700 dark:text-white/70">
              مع دوينج، افعلها وامتلك مترجك الخاص
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              ابدأ مجاناً
            </a>
          </div>
        </div>
      </section>
      {/* End CTA  */}
      <Footer />
    </div>
  );
}

export default HelpPage;
