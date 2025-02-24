import Footer from "./components/Footer";
import { Link, useOutletContext } from "react-router-dom";
import { blogs } from "./utils/blogs";

function HelpPage() {
  const { darkMode } = useOutletContext();
  
  // Helper function to create a brief description by limiting the text length.
  const getBriefDescription = (html: string, limit = 150): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen pt-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-950"
      }`}
    >
      {/* Start Banner */}
      <section className="mx-5 bg-stone-100 dark:bg-white/20 rounded-3xl">
        <div className="container">
          <div className="mx-auto max-w-2xl py-12 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-[3rem] font-bold text-gray-900 dark:text-white sm:text-4xl">
              المدونة
            </h2>
          </div>
        </div>
      </section>
      {/* End Banner */}
      {/* Start Content */}
      <section className="container mt-20">
        <div className="mx-auto mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-white/20 p-6">
                <div className="flex-1">
                  <Link to={`/blogs/${post.id}`} className="mt-2 block">
                    <p className="text-xl leading-7 font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </p>
                    <p
                      className="mt-3 text-base leading-6 text-gray-500 dark:text-white/70"
                      dangerouslySetInnerHTML={{
                        __html: getBriefDescription(post.description, 150),
                      }}
                    ></p>
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

export default HelpPage;
