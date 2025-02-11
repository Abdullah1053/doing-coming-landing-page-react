import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title:
      "دليل التاجر لفهم تجارة التجزئة التقليدية والإلكترونية والحديثة في عام 2024.",
    href: "#",
    description:
      "لم يعد سلوك المستهلك اليوم كما كان قبل عشر سنوات، أو حتى قبل عام يتمتع المستهلك الحديث بأربع خصائص أساسية تحتاج إلى معرفتها لفهم التقليدية التجزئة الإلكترونية والحديثة...",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    imageUrl: "../public/assets/img/blog.jpg",
  },
  {
    id: 2,
    title: "استراتيجيات لزيادة المبيعات",
    href: "#",
    description:
      "تعد الحملات التسويقية الناجحة للمتاجر الإلكترونية من أكبر الأهداف التسويقية لتجار التجزئة لجذب المزيد من العملاء المحتملين وتحقيق مبيعات وأرباح أعلى ، والحصول على أفضل النتائج من الحملات التسويقية على منصات التواصل الاجتماعي يتطلب إطلاق جيد للتخطيط من خلال استراتيجية واضحة، والتي يتم وصفها بالتفصيل في هذه المقالة... ",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    imageUrl: "../public/assets/img/blog.jpg",
  },
  {
    id: 3,
    title: "7 نصائح لإطلاق حملة تسويقية ذكية للمتاجر الإلكترونية مثل المحترفين",
    href: "#",
    description:
      "تعد الحملات التسويقية الناجحة للمتاجر الإلكترونية من أكبر الأهداف التسويقية لتجار التجزئة لجذب المزيد من العملاء المحتملين وتحقيق مبيعات وأرباح أعلى ، والحصول على أفضل النتائج من الحملات التسويقية.... ",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    imageUrl: "../public/assets/img/blog.jpg",
  },
];

function HelpPage() {
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
      {/* Start Content */}
      <section className="container mt-20">
        <div className="relative">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src="../public/assets/img/blog.jpg"
            alt="Blog Post Image"
          />
        </div>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            7 نصائح لإطلاق حملة تسويقية ذكية للمتاجر الإلكترونية مثل المحترفين
          </h1>
          <p className="text-gray-600 text-lg">
            تعد الحملات التسويقية الناجحة للمتاجر الإلكترونية من أكبر الأهداف
            التسويقية لتجار التجزئة لجذب المزيد من العملاء المحتملين وتحقيق
            مبيعات وأرباح أعلى ، والحصول على أفضل النتائج من الحملات التسويقية
            على منصات التواصل الاجتماعي يتطلب إطلاق جيد للتخطيط من خلال
            استراتيجية واضحة، والتي يتم وصفها بالتفصيل في هذه المقالة.
          </p>
          <p className="text-gray-700 leading-relaxed">
            1 - تحديد أهداف الحملة التسويقية.
          </p>
          <p className="text-gray-700 leading-relaxed">
            نظرا لاختلاف أهداف الحملات التسويقية على منصات التواصل الاجتماعي ،
            للحصول على حملة تسويقية ناجحة ، تحتاج إلى تحديد الأهداف بوضوح ،
            اعتمادا على احتياجاتك. على سبيل المثال ، إذا كان الهدف هو الحصول على
            قاعدة عملاء محتملة ، فمن الأفضل استهداف ما يسمى جمهور مماثل أو عملاء
            حاليين مشابهين، بينما يجب أن تستهدف حملة توسيع السوق المحلية منصات
            وسائط اجتماعية مختلفة إن أمكن. بالنسبة لحملات زيادة المبيعات ، فإن
            إعادة استهداف مالكي السلات المهجورة وتحفيزهم عن طريق بيع منتجات
            تكميلية أو ذات صلة بالمشتريات السابقة ، أو عرض شراء منتج أكثر تكلفة
            كبديل للمنتج الذي اختاره العميل يحفزهم من خلال زيادة المبيعات ، مما
            يؤدي إلى زيادة متوسط قيمة الطلب الآن بعد أن تمكنت من تحديد أهداف
            حملتك التسويقية بشكل صحيح ، ننتقل إلى الخطوة التالية.
          </p>
          <p className="text-gray-700 leading-relaxed">
            2 - تحديد جمهورك المستهدف
          </p>
          <p className="text-gray-700 leading-relaxed">
            الجمهور المستهدف أو المجموعة المستهدفة هي مجموعة من العملاء
            المحتملين أو الحاليين الذين يحاول التاجر الوصول إليهم وإقناعهم بمنتج
            أو خدمة ، أو تحويلهم إلى عملاء حقيقيين ، أو شرائهم مرة أخرى، لأن
            البائع يحاول الوصول إليهم ، وإقناعهم بالمنتج أو الخدمة، وتحويلهم إلى
            عملاء حقيقيين ، أو الشراء منهم مرة أخرى ، يحتاج الجمهور المستهدف إلى
            تعريف واضح. إعلان ليست مناسبة للجميع. للحصول على حملة تسويقية ناجحة
            ، تحتاج إلى اختيار جمهور مستهدف متحمس واستهداف هذا الجمهور بدقة ،
            وأهمها لتحديد الجمهور المستهدف هي بناء على الخصائص الديموغرافية:
            الجنس والعمر والدخل والموقع الجغرافي. معدلات الشراء أو إعادة
            الاستهداف تحليل معدلات الشراء السابقة أو إعادة توجيه السلال المهجورة
            ، خاصة خلال المواسم والعروض الاهتمامات: معرفة اهتمامات عملائك
            المستهدفين، مثل الهوايات والأنشطة المفضلة، هي بيانات تساعدك على فهم
            جمهورك بدقة وتطوير استراتيجية حملتك الإعلانية. المشكلة: تنشأ المشكلة
            وفقا لاهتمامات واحتياجات كل شريحة من العملاء المستهدفين ، ودورك هنا
            هو تقديم منتجك أو خدمتك كأفضل حل لهذه المشكلة. ملاحظة: تعرف على
            المزيد حول عملائك المحتملين من خلال تحليلات جوجل. تحليلات جوجل تحلل
            تفاعل الزوار في متجرك عبر الإنترنت، وتوضح كيف يتصرف العملاء عند شراء
            منتجاتك ، والعملاء المصممين مسبقا وفقا لأهدافك التسويقية. استخدم
            صفحتك الرئيسية لتحفيز العملاء على رؤية أكبر عدد ممكن من المنتجات.
            احتفظ ببيانات حول جميع عملائك السابقين وكن لطيفا عند استهدافهم. لفهم
            سلوك عملائك ، قم دائما بتحليل سلوكهم على صفحة متجرك وإنشاء أنشطتك
            التسويقية بما يتناسب مع تفاعلاتهم.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <img
            src="../public/assets/img/testimonialAvatar/202306020840avatar-2.jpg"
            className="w-16 h-16 rounded-full object-cover"
            alt=""
          />
          <div>
            <h3 className="font-semibold text-gray-600 text-lg">المؤلف</h3>
            <p className="text-gray-600 text-sm">محمد الحمادي</p>
          </div>
        </div>
      </section>
      {/* End Content */}
      {/* Start Related Blog  */}
      <section className="container mt-20">
        <div className="mx-auto mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-white/20 p-6">
                <div className="flex-1">
                  <Link to={`/blogs/${post.id}`} className="mt-2 block">
                    <p className="text-xl leading-7 font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base leading-6 text-gray-500 dark:text-white/70">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500 dark:text-white/70">
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End Related Blog  */}
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
      <Footer theme={darkMode} />
    </div>
  );
}

export default HelpPage;
