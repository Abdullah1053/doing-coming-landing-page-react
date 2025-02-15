import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "طريقة إضافة أول منتج",
    content:
      'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم',
  },
  {
    id: 2,
    title: "إضافة صور لمتجرك",
    content: "This is the content of Blog 2.",
  },
  {
    id: 3,
    title: "إضافة التصنيفات",
    content: "This is the content of Blog 3.",
  },
  {
    id: 4,
    title: "تعين سعر توصيل ثابت",
    content: "This is the content of Blog 4.",
  },
];

function HelpBlogPage() {
  const { darkMode } = useOutletContext();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen pt-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      {/* Start Banner */}
      <section className="container mx-5 rounded-3xl py-4">
        <h4 className="font-bold text-gray-900 dark:text-white">مركز المساعدة</h4>
      </section>
      {/* End Banner */}
      {/* Start Sidebar */}
      <div
        className={`-mt-52 -mr-64 lg:hidden fixed lg:relative w-64 bg-stone-100 dark:bg-stone-900 rounded-xl shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarVisible
            ? "-translate-x-full lg:translate-x-0"
            : "translate-x-0"
        } lg:w-64 z-40 h-screen`}
      >
        <div className="flex justify-between items-center mb-4 py-4">
          <h2 className="text-xl text-gray-900 dark:text-white font-bold">دليل الاستخدام</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="text-md mb-2 cursor-pointer hover:text-sky-500"
              onClick={() => handleBlogClick(blog)}
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
      {/* End Sidebar */}
      {/* Start Content */}
      <section className="container">
        <button className="mt-4 lg:hidden" onClick={toggleSidebar}>
          <span className="flex items-center text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faBars} />
            <span className="mr-2">المقالات</span>
          </span>
        </button>
        <div className="mt-8 grid grid-cols-4 gap-2">
          <div className="hidden lg:block">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-4">
              دليل الأستخدام
            </h2>
            <ul>
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="text-md mb-2 cursor-pointer hover:text-sky-500"
                  onClick={() => handleBlogClick(blog)}
                >
                  {blog.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 lg:col-span-3">
            {selectedBlog ? (
              <div>
                <h1 className="text-gray-900 dark:text-white text-2xl font-semibold mb-4">
                  {selectedBlog.title}
                </h1>
                <p className="text-gray-900 dark:text-white text-md leading-7 mb-4">
                  {selectedBlog.content}
                </p>
              </div>
            ) : (
              <p>Select a blog from the sidebar to view its content.</p>
            )}
          </div>
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

export default HelpBlogPage;
