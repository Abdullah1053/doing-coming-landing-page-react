import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function HowToServe() {
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
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                متجرك، موقعك أو مدونتك؟
              </h2>
              <p className="mt-4 text-xl text-gray-800 dark:text-white/80">
                مهما كانت فكرتك، دوينج هي انطلاقتك
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="../public/assets/img/serve.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}
      {/* Start Content */}
      <section className="container mt-20">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3>أنشئ متجراً إلكترونياً بدقائق</h3>
            <p>
              أنشئ متجرًا احترافيًا يعكس اسم علامتك التجارية في دقائق، نوفر لك
              القوالب والخيارات التي تجعل بناء متجرك أمرًا سهلاً، سواء كنت تبيع
              منتجات مادية أو رقمية.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="../public/assets/img/serve.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20">
          <div className="flex flex-col justify-center order-last">
            <h3>أنشئ مدونة احترافية</h3>
            <p>
              شارك أفكارك، تجاربك، وأحدث أخبارك مع جمهورك من خلال مدونة متكاملة،
              يمكنك كتابة ونشر مقالاتك بسهولة، مع إمكانية تخصيص القالب بما
              يتناسب مع محتواك.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="../public/assets/img/serve.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20">
          <div className="flex flex-col justify-center">
            <h3>موقع إلكتروني فريد لهويتك</h3>
            <p>
              هل تحتاج إلى موقع ويب لعلامتك التجارية أو مشروعك؟ نوفر لك الأدوات
              اللازمة لإنشاء موقع يبرز شخصيتك ويعكس رسالتك، يمكنك التحكم في
              تصميمه ومواضيعه بكل سهولة، والتأكد من أنه يتوافق مع احتياجاتك
              وأهدافك.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="../public/assets/img/serve.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* End Content */}
      {/* Start CTA  */}
      <section className="mt-20 mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl">
        <div className="container">
          <div class="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              جاهز لتحوّل فكرتك إلى واقع؟
            </h2>
            <p className="mt-6 text-large text-gray-700 dark:text-white/70">
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
      <Footer theme={darkMode} />
    </div>
  );
}

export default HowToServe;
