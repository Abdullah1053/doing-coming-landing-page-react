import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto m-auto"
                src="../public/assets/img/logo/logoDark.webp"
                alt="Doing Logo"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                إنشاء حساب
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-right text-sm font-medium text-gray-700 mb-2"
                    >
                      اسم المتجر
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="إدخل اسم المتجر"
                        required
                        className="block w-full appearance-none text-right rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-right text-sm font-medium text-gray-700 mb-2"
                    >
                      البريد الإلكتروني
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="إدخل البريد الإلكتروني"
                        required
                        className="block w-full appearance-none text-right rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-right text-sm font-medium text-gray-700 mb-2"
                    >
                      رقم الجوال
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="phone"
                        placeholder="إدخل رقم الجوال"
                        required
                        className="block w-full appearance-none text-right rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-right text-sm font-medium text-gray-700 mb-2"
                    >
                      كلمة المرور
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="إدخل كلمة المرور"
                        required
                        className="block w-full appearance-none text-right rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-right text-sm font-medium text-gray-700 mb-2"
                    >
                      تأكيد كلمة المرور
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="إدخل كلمة المرور"
                        required
                        className="block w-full appearance-none text-right rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="flex items-center">
                      <label
                        htmlFor="remember-me"
                        className="mr-2 block text-sm text-gray-900"
                      >
                        بالتسجيل فأنا أوافق على سياسات منصة دوينج
                      </label>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      إنشاء حساب
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="flex flex-col justify-center items-center bg-stone-100 h-screen px-14">
            <h2 className="text-gray-900 text-center text-5xl">
              كل ما تحتاجه لتنمو بتجارتك الإلكترونية
            </h2>
            <p className="text-gray-600 text-center text-1xl mt-6">
              سجل الآن وانضم لأكثر من 1000 متجر يستفيد من مئات الخدمات والأدوات
              التسويقية المتكاملة في منصة دوينج
            </p>
            <Link
              to="/login"
              className="mt-4 flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              تسجيل دخول
            </Link>
          </div>
          {/* <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="../public/assets/img/blog.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
