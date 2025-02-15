import Footer from "./components/Footer";
import { useOutletContext } from "react-router-dom";

function TermsConditionsPage() {
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
              الشروط و الأحكام
            </h1>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                المقدمة
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  مرحبًا بكم في منصة "دوينج" المملوكة لشركة دوينج لتقنيات
                  المعلومات المحدودة المسجلة لدى وزارة التجارة بالسجل التجاري
                  1001845حيث يسعدنا أن نقدم لكم خدماتنا المميزة لإدارة نشاطكم
                  التجاري الإلكتروني. باستخدام موقعنا أو تطبيقنا، فإنكم توافقون
                  على شروط الاستخدام التي ستجدونها أدناه. تتضمن خدمات "دوينج"
                  مجموعة من المنتجات والخصائص والأدوات المصممة لدعم وتنمية
                  أعمالكم التجارية عبر الإنترنت.
                </p>
                <p className="mb-4 text-xl leading-7">
                  أي خصائص أو أدوات جديدة نضيفها إلى خدماتنا ستكون مشمولة أيضًا
                  بنفس الشروط. لذا، ندعوكم لمراجعة هذه الشروط بانتظام عبر الرابط
                  المتاح للاطلاع على أي تحديثات أو تغييرات قد تطرأ، والتي ستكون
                  نافذة فور نشرها.
                </p>
                <p className="mb-4 text-xl leading-7">
                  إن قبولكم واستخدامكم لمنصة "دوينج" يعتبر تأكيدًا على موافقتكم
                  على شروط الاستخدام وسياسة الخصوصية الخاصة بنا. يُرجى قراءة هذه
                  الشروط بعناية للتأكد من فهم المتطلبات القانونية المترتبة على
                  استخدام خدماتنا. كما نقدم لكم ملخصات مبسطة لهذه الشروط لتسهيل
                  الفهم، ولكننا نوصي بشدة بقراءة الشروط الكاملة للحصول على صورة
                  شاملة.
                </p>
                <p className="mb-4 text-xl leading-7">
                  نرحب بجميع مستخدمي منصتنا، سواء كانوا تجارًا أو مستهلكين أو
                  غير ذلك، ونؤكد أن هذه الاتفاقية تصبح سارية بمجرد التسجيل
                  والموافقة عليها. إن استخدامكم لمنصتنا يعني قبولكم بكل الشروط
                  والأحكام الواردة في هذه الاتفاقية والتزامكم بها، وهو ما يضمن
                  لكم تجربة استخدام آمنة ومتميزة.
                </p>
                <p className="mb-4 text-xl leading-7 text-red-500">
                  وتعتبر هذه الاتفاقية سارية المفعول ونافذة بمجرد قيامكم
                  بالموافقة عليها والبدء في التسجيل بمنصة دوينج
                </p>
              </div>
            </section>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                1. المادة الأولى: التعريفات الأساسية
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <p className="mb-4 text-xl leading-7">
                  يعتبر التمهيد أعلاه جزءاً لا يتجزأ من هذه الاتفاقية، ويُعتمد
                  كأساس لفهم الشروط والأحكام الواردة في هذه الوثيقة. وفيما يلي
                  نقدم لكم تعريفات ودلالات العبارات الرئيسية المستخدمة في هذه
                  الاتفاقية:
                </p>
                <p className="mb-4 text-xl leading-7">
                  (منصة دوينج): يُقصد بهذه العبارة شركة دوينج لتقنية المعلومات،
                  ويشمل هذا التعريف كافة أشكال شركة دوينج لتقنية المعلومات على
                  الإنترنت، سواءً كانت تطبيقًا إلكترونيًا، أو موقعًا إلكترونيًا.
                </p>
                <p className="mb-4 text-xl leading-7">
                  (التاجر): يُقصد بهذه العبارة كل تاجر يسجل في منصة دوينج لإنشاء
                  متجره الإلكتروني، سواءً كان شخصًا طبيعيًا أو معنويًا. ويشمل
                  هذا التعريف كافة أوجه المتجر طالما أنه يقوم بتجارته عبر منصة
                  دوينج، بما في ذلك الموقع الإلكتروني للتاجر.
                </p>
                <p className="mb-4 text-xl leading-7">
                  (المتجر): يُقصد بهذه العبارة المتجر المستخدم من قبل التاجر على
                  منصة دوينج الإلكترونية.
                </p>
                <p className="mb-4 text-xl leading-7">
                  (المستهلك): يُقصد بهذه العبارة كل مستهلك يقوم بشراء منتج أو
                  خدمة من التاجر، وذلك عن طريق متجر التاجر الإلكتروني الذي أسسه
                  عبر منصة دوينج.
                </p>
                <p className="mb-4 text-xl leading-7">
                  (الاتفاقية): يُقصد بهذه العبارة قواعد وشروط وأحكام استخدام
                  منصة دوينج الإلكترونية، أي كافة الأحكام والشروط الواردة في هذه
                  الاتفاقية، والتي تحكم وتنظّم العلاقة بين أطراف هذه الاتفاقية.
                </p>
                <p className="mb-4 text-xl leading-7">
                  (مزود الخدمة): يُقصد بهذه العبارة الخدمات التي تقوم منصة دوينج
                  بتوفيرها للتجار عن طريق أطراف ثالثة. ويُقصد بـ "توفير الخدمات"
                  مجرد توفير الربط بين التاجر ومزود الخدمة، حيث أنه لا سلطان ولا
                  علاقة لمنصة دوينج بالاتفاق المبرم بين التاجر ومزود الخدمة.
                </p>
              </div>
            </section>

            <section className="mx-auto mb-8 w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                2. المادة الثانية: شروط الأهلية للتجار
              </h2>
              <div className="prose text-gray-600 dark:text-white/80">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                  الأهلية القانونية للتاجر:
                </h4>
                <p className="mb-4 text-xl leading-7">
                  يقر التاجر بأنه يتمتع بالأهلية القانونية الكاملة حسب الشريعة
                  والقانون، وأن عمره لا يقل عن 18 عامًا وفقًا للأنظمة المرعية
                  اليمن أو حسب القوانين المعمول بها في الدولة التي يستخدم منها
                  الخدمة.
                </p>
                <p className="mb-4 text-xl leading-7">
                  يُسمح للتاجر الذي يقل عمره عن 18 عامًا بممارسة التجارة بشرط
                  تقديم موافقة ولي الأمر، مثل صك الولاية أو إفادة موافقة موقعة
                  من وليه القانوني الشرعي إذا تطلب الأمر ذلك.
                </p>
                <p className="mb-4 text-xl leading-7">
                  يؤكد التاجر أنه يتمتع بأهلية سليمة وغير مصاب بأي عارض يؤثر على
                  أهليته.
                </p>
              </div>
              <div className="prose text-gray-600 dark:text-white/80">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mt-4 mb-6">
                  التسجيل واستخدام الخدمة:
                </h4>
                <p className="mb-4 text-xl leading-7">
                  يجب على التاجر التسجيل في منصة "دوينج" للاستفادة من الخدمة،
                  ويشمل ذلك تقديم الاسم الكامل كما يظهر في الأوراق الرسمية، رقم
                  الجوال، البريد الإلكتروني الصحيح، وأي معلومات أخرى مطلوبة.
                  تحتفظ منصتنا بحق رفض أو إلغاء أي حساب وفقًا لتقديرها.
                </p>
                <p className="mb-4 text-xl leading-7">
                  يُعتبر البريد الإلكتروني ورقم التواصل وسيلة التواصل الأساسية
                  بين "دوينج" والمستخدم.
                </p>
                <p className="mb-4 text-xl leading-7">
                  يتحمل المستخدم مسؤولية الحفاظ على أمان كلمة المرور الخاصة به،
                  ولا تتحمل "دوينج" أي مسؤولية عن أي خسارة أو ضرر ناتج عن إهمال
                  المستخدم في حماية حسابه وكلمة المرور.
                </p>
                <p className="mb-4 text-xl leading-7">
                  المستخدم مسؤول عن جميع الأنشطة والمحتويات، مثل البيانات
                  والرسومات والصور والروابط، التي يتم تحميلها على حسابه في
                  "دوينج" ("محتوى المتجر")،يجب عدم نقل أي فيروسات أو برمجيات
                  ضارة.
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

export default TermsConditionsPage;
