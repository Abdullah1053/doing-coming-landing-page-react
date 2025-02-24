import Footer from "./components/Footer";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { getBlogById, blogs } from "./utils/blogs";

function BlogPage() {
  // Get the blog id from the route parameters and convert to a number
  const { id } = useParams();
  const blogId = Number(id);
  const blog = getBlogById(blogId);
  const { darkMode } = useOutletContext();

  if (!blog) {
    return (
      <div
        dir="rtl"
        className={`min-h-screen pt-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-950"
        }`}
      >
        <div className="container p-5">
          <p className="text-center text-xl">المقال غير موجود!</p>
        </div>
      </div>
    );
  }

  // Compute related blogs by excluding the current one.
  const relatedBlogs = blogs.filter((post) => post.id !== blogId);


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
      {/* Start Blog Content */}
      <section className="container">
        <div className="relative">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src={blog.image}
            alt={blog.title}
          />
        </div>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            {blog.title}
          </h1>
          <div
            className="mt-3 dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>


          {/* 
            You can add additional paragraphs or more detailed blog content here.
            For example, if your blog post had a 'content' property, you could render it.
          */}
        </div>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <img
            src="/assets/img/testimonialAvatar/202306020840avatar-2.jpg"
            className="w-16 h-16 rounded-full object-cover"
            alt="Avatar"
          />
          <div>
            <h3 className="font-semibold text-gray-600 dark:text-white/90 text-lg">
              المؤلف
            </h3>
            <p className="text-gray-600 dark:text-white/90 text-sm">
            مصطفى باحميد
            </p>
          </div>
        </div>
      </section>
      {/* End Blog Content */}

      {/* Start Related Blogs */}
      <section className="container mt-20">
        <div className="mx-auto mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((post) => (
            <div
              key={post.id}
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
                    <p className="mt-3 text-base leading-6 text-gray-500 dark:text-white/70">
                      {getBriefDescription(post.description, 150)}
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
      {/* End Related Blogs */}

      {/* Start CTA */}
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
      {/* End CTA */}

      <Footer />
    </div>
  );
}

export default BlogPage;
