import Footer from "./components/Footer";
import { useOutletContext } from "react-router-dom";

function PrivacyPolicyPage() {
  const { darkMode } = useOutletContext();

  return (
    <div
      dir="rtl"
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      {/* Start Content */}
      <section className="container min-h-screen">
        <div className="mx-auto px-4 py-16">
          <div className="bg-white dark:bg-white/20 rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-white mt-4 mb-12">
              سياسة الخصوصية
            </h1>

            <section className="mx-auto mb-8 w-3/4">
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  يرحب فريق عمل منصة "دوينج" بكم عبر منصته الإلكترونية، ويتقدم
                  بالشكر الجزيل على ثقتكم بالمنصة. حرصاً من "دوينج" وإدراكها
                  التام بحقوق التجار عبر المنصة، فإن "دوينج" تسعى للحفاظ على
                  المعلومات الخاصة بالتجار والمستهلكين وفقاً لآلية سياسة
                  الخصوصية وسرية المعلومات المعمول بها في "دوينج".
                </p>
                <p className="mb-4 text-xl leading-7">
                  بموجب اتفاقية الاستخدام المبرمة بينكم كتجار وبين منصة "دوينج"،
                  تنوه المنصة بأن هذه الوثيقة تحيطكم علماً بسياسة الخصوصية وسرية
                  المعلومات المعمول بها في المنصة. ووفقاً للبند الرابع من المادة
                  الخامسة عشرة من اتفاقية الاستخدام، فقد أنشأت "دوينج" هذه
                  القواعد تحت عنوان "سياسة الخصوصية وسرية المعلومات" لتوضيح
                  وتحديد آلية السرية والخصوصية المتبعة في منصة "دوينج"
                  الإلكترونية. يرجى الاطلاع عليها، حيث أنكم بدخولكم إلى منصة
                  "دوينج" وتأسيسكم للمتجر الإلكتروني، فإن جميع معلوماتكم تخضع
                  لهذه السياسة.
                </p>
              </div>
            </section>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                الخصوصية في منصة "دوينج":
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  كتُبت سياسة الخصوصية لمساعدتك على فهم كيفية جمع معلوماتك،
                  استخدامها، وتخزينها بشكل أفضل. وهي سياسة قابلة للتحديث بما
                  يتماشى مع التغييرات المستمرة في قوانين التكنولوجيا والخصوصية.
                  نلتزم بإشعارك عند إجراء أي تغيير، وسنضيف إشعاراً توضيحياً في
                  التطبيق. واستخدامك لمنصة "دوينج" بعد نشر تلك التغييرات يعتبر
                  موافقة منك على السياسات المعدلة.
                </p>
              </div>
            </section>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                موافقتك على سياسة الخصوصية:
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  من خلال اشتراكك في أي من المنتجات أو الخدمات التي تقدمها
                  "دوينج" أو تعاملك مع تاجر يستخدم خدمات "دوينج"، فإنك توافق على
                  شروط سياسة الخصوصية، وبالتالي توافق على شروط خدمة "دوينج".
                  وتعد سياسة الخصوصية اتفاقية ملزمة قانونياً بينك وبين العميل أو
                  صاحب العمل أو أي جهة أخرى إذا كنت تعمل بالنيابة عنهم وفقاً
                  لتفويض معتمد أو وكالة رسمية. تُعرف هذه الاتفاقية بمصطلحات
                  "أنت" أو "حسابك"، بينما يُشار إلى "دوينج" والشركات والخدمات
                  التابعة لها بمصطلحات "نحن"، "لنا"، أو "دوينج". تنطبق هذه
                  السياسة على أي ميزات أو أدوات جديدة تضاف إلى خدماتنا.
                </p>
              </div>
            </section>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                استخدام المعلومات الشخصية:
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  م عند استخدامنا لمصطلح "المعلومات الشخصية" في هذه السياسة،
                  فإنها تشير إلى أي معلومات تتعلق بشخص محدد. لكنها لا تشمل اسم
                  أحد موظفي المؤسسة أو عنوان عمله أو عنوان بريده الإلكتروني أو
                  رقم هاتفه.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* End Content */}
      {/* Start CTA  */}
      <section className="mt-20 mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl">
        <div className="container">
          <div className="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
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

export default PrivacyPolicyPage;
