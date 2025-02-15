import Footer from "./components/Footer";
import { Link, useOutletContext } from "react-router-dom";

const types = [
  {
    name: "دروس تعليمية",
    description: "دروس تعليمية مخصصة لبدء متجرك",
    href: "/help-blogs",
  },
  {
    name: "فيديوهات توضيحية",
    description: "تواصل معنا مباشرة عبر واتساب للحصول على إجابات سريعة",
  },
  {
    name: "تواصل عبر الواتساب",
    description: "دروس تعليمية لتعلم المهارات اللازمة لإدارة متجرك بنجاح",
  },
];

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
              <h2 className="text-[2.5rem] font-bold tracking-tight text-gray-900 dark:text-white">
                معك في كل خطوة
              </h2>
              <p className="mt-6 text-[1.5rem] font-semibold text-gray-800 dark:text-white/80">
                فريقنا جاهز للإجابة عن أسئلتك على مدار الساعة
              </p>
              <p className="mt-4 text-[1.3rem] leading-[30px] text-gray-800 dark:text-white/80">
                نحن هنا لدعمك في أي وقت تحتاجه! فريقنا متاح 24/7 للإجابة على
                استفساراتك ومساعدتك في تجاوز أي تحديات
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/img/serve.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}
      {/* Start Content */}
      <section className="container mt-20">
        <h3 className="text-[2rem] text-center font-bold leading-7 text-gray-900 dark:text-white">
          دليل استخدام منصة دوينج
        </h3>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between overflow-hidden rounded-lg bg-stone-100 dark:bg-white/20 px-6 py-7 shadow sm:p-6"
            >
              <div>
                <h3 className="truncate text-xl font-bold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-4 text-lg leading-7 tracking-tight text-gray-700 dark:text-white/70">
                  {item.description}
                </p>
              </div>
              <Link
                to={item.href}
                className="mt-4 self-start inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                ابدأ الآن
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* End Content */}
      {/* Start CTA  */}
      <section className="mt-20 mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl">
        <div className="container">
          <div class="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-[1.8rem] font-bold text-gray-900 dark:text-white sm:text-4xl">
              جاهز لتحوّل فكرتك إلى واقع؟
            </h2>
            <p className="mt-6 text-[1.3rem] text-gray-700 dark:text-white/70">
              مع دوينج، البداية دائماً أسهل مما تتخيل
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              ابدأ تجارتك الآن
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
