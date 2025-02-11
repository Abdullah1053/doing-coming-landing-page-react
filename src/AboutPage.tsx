import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCube,
  faGrip,
  faLifeRing,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { name: "مزود خدمة", stat: "+20", icon: faCube },
  { name: "قطاع تجاري مختلف", stat: "+20", icon: faGrip },
  { name: "دعم للتجار", stat: "24/7", icon: faLifeRing },
  { name: "متجر فعال على دوينج", stat: "+100 متجر", icon: faStore },
];

const features = [
  {
    name: "متجرك الإلكتروني، هويتك",
    description:
      "دوينج، يمكنك إنشاء متجر إلكتروني احترافي يعكس اسم علامتك التجارية وهويتها. استمتع بإدارة مبيعاتك وعمليات تجارتك من مكان واحد وبخطوات بسيطة",
  },
  {
    name: "خدمات مساندة تدعم نجاحك",
    description:
      "ودعّ القلق بشأن الشحن وتأخير الطلبات ! من خلال دوينج، يمكنك شحن منتجاتك عبر أكثر من 30 مزود خدمة .",
  },
  {
    name: "عمليات دفع آمنة",
    description:
      "ضبط مدفوعاتك بسهولة وبأمان تام، أقبل كل عمليات الشراء سواء كانت شخصيًا أو أونلاين بدون خوف.",
  },
  {
    name: "تسويق ذكي ويفرق",
    description:
      "تسويق ذكي يعني نمو مستمر، شوف الفرق مع أدوات التسويق الذكية المتوفرة لك.استفد من أدوات التحليل واطلق حملات تسويقية مبتكرة لزيادة مبيعاتك.",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      <Header
        theme={darkMode}
        onChangeTheme={(theme) => toggleDarkMode(theme)}
      />
      {/* Start Banner */}
      <section className="mt-12 mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-[2rem] leading-[40px] font-bold tracking-tight text-gray-900 dark:text-white">
                مرحبًا بك في منصة دوينج، حيث تتحول أحلامك في بناء متجر إلكتروني
                إلى حقيقة بأسهل وأسرع طريقة ممكنة!
              </h2>
              <p className="mt-6 text-[1.4rem] leading-8 text-gray-800 dark:text-white/80">
                نحن في دوينج، نؤمن بأن التجارة الإلكترونية ليست مجرد مستقبل، بل
                هي حاضر ينتظرك لتبدأ. تأسست منصتنا عام 2023 بهدف تمكين التجار من
                دخول عالم التجزئة الحديثة بسلاسة.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="../public/assets/img/serve.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}
      {/* Start Stats */}
      <section className="container mt-20">
        <dl className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-stone-100 dark:bg-white/20 px-4 py-5 shadow sm:p-6"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="w-8 h-8 text-sky-500"
                    icon={item.icon}
                  />
                </div>
                <div className="mr-5">
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.stat}
                  </dd>
                  <dt className="mt-1 truncate text-md font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </dt>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </section>
      {/* End Stats */}
      {/* Start Journy */}
      <section className="container mt-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden h-[650px] lg:h-[380px]">
          <div>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/CAwdx1tlVUg?si=Phtqn2dM-gxLpEGs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-cyan-700 p-8">
            <h4 className="font-bold text-white">
              سواء كنت تاجرًا مبتدئًا أو خبيرًا تبحث عن توسيع نطاق أعمالك، دوينج
              مصممة لتناسب احتياجاتك، بدون تعقيد.
            </h4>
            <button className="mt-6 w-36 inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              ابدأ تجارتك الآن
            </button>
          </div>
        </div>
      </section>
      {/* End Journy */}
      {/* Start Features */}
      <section className="container mt-20">
        <h3 className="text-3xl text-center font-bold leading-7 text-gray-900 dark:text-white">
          نجعل نمو تجارتك أسهل !
        </h3>
        <dl className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-stone-100 dark:bg-white/20 px-6 py-7 shadow sm:p-6"
            >
              <dt className="truncate text-xl font-bold text-gray-900 dark:text-white">
                {item.name}
              </dt>
              <dd className="mt-4 text-lg leading-7 tracking-tight text-gray-700 dark:text-white/70">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      {/* End Features */}
      {/* Start CTA  */}
      <section className="mt-20 mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl">
        <div className="container">
          <div class="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
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
      <Footer theme={darkMode} />
    </div>
  );
}

export default App;
