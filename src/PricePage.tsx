import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FaqSection from "./components/FaqSection";

const tiers = [
  {
    name: "الأساسية",
    href: "#",
    priceMonthly: 0,
  },
  {
    name: "المتقدمة",
    href: "#",
    priceMonthly: "16,600",
  },
  {
    name: "الأحترافية",
    href: "#",
    priceMonthly: "44,400",
  },
];
const sections = [
  {
    name: "التسويق",
    features: [
      {
        name: "الكوبون التسويقي",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "تحسين محركات البحث SEO",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "كوبونات التخفيض",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الحملات التسويقية لعملاء المتجر عبر رسائل SMS",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "السلّات المتروكة",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "العروض الخاصة",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
    ],
  },
  {
    name: 'المميزات الرئيسية',
    features: [
      {
        name: "دعم العملات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "دعم اللغات",
        tiers: { "الأساسية": "-", "المتقدمة": "قريباً", "الأحترافية": "قريباً" },
      },
      {
        name: "عدد الفروع",
        tiers: { "الأساسية": "قريباً", "المتقدمة": "قريباً", "الأحترافية": "قريباً" },
      },
      {
        name: "حجز رابط خاص (دومين)",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الدفع الالكتروني",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الربط مع شركات الشحن",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "عدد المستخدمين ",
        tiers: { "الأساسية": "1", "المتقدمة": "1", "الأحترافية": "1" },
      },
      {
        name: "عدد المنتجات",
        tiers: { "الأساسية": "30 منتح", "المتقدمة": "لا محدود", "الأحترافية": "لا محدود" },
      },
      {
        name: "طلبات لا محدودة",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "عملاء لا محدودين",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الاسئلة والتقييمات",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "خدمة عملاء على مدار اليوم",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "عمولة المبيعات",
        tiers: { "الأساسية": "0%", "المتقدمة": "0%", "الأحترافية": "0%" },
      },
    ],
  },
  {
    name: 'المميزات المتقدمة',
    features: [
      {
        name: "التقارير المتقدمة",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "شريط الاعلان أعلى المتجر",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "وضع الصيانة",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "استعادة البيانات المحذوفة",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "صفحة الدفع المحسنة One-Page Checkout",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "Google Tag Manager",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "التحكم بالتصميم بواسطة Custom CSS",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "دعم الخيارات المتعددة للمنتجات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إمكانية تصدير و استيراد المنتجات",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "تصنيف المنتجات حسب الماركات التجارية",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "دعم احصائيات المنتج",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "تخصيص حالات الطلب",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "فلترة الطلبات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "طباعة قائمة تجهيز الطلب",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "مشاركة رابط الدفع للطلبات من خارج المتجر",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الاسناد التلقائي للطلبات",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "فلترة العملاء",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "مجموعات العملاء",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "تجهيز الطلبات للعملاء",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "تعديل تصميم المتجر",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "دعم جميع أنواع المنتجات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الصفحات التعريفية",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "جرد المنتجات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "مراسلة العملاء",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إعداد خيارات الطلبات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "تصدير الطلبات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الشحن حسب الوزن",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إقرار العميل قبل الشراء",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الكوبونات المتقدمة",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
    ],
  },
  {
    name: 'خدمات الربط',
    features: [
      {
        name: "إمكانية الربط مع خدمات البريد الإلكتروني",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع خدمات الموقع الجغرافي",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع خدمات الرسائل",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع الخدمات المحاسبية",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع الخدمات الاعلانية",
        tiers: { "الأساسية": false, "المتقدمة": false, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع خدمات المحادثات",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "إمكانية الربط مع الخدمات الاحصائية",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
    ]
  },
  {
    name: 'خيارات الشحن والتوصيل',
    features: [
      {
        name: "مستعجل",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
    ]
  },
  {
    name: 'طُرق الدفع',
    features: [
      {
        name: "كريمي",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "كاش",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "جوالي",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "سبأ",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "فلوسك",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "بيس",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "جيب",
        tiers: { "الأساسية": false, "المتقدمة": true, "الأحترافية": true },
      },
      {
        name: "الدفع عند الاستلام",
        tiers: { "الأساسية": true, "المتقدمة": true, "الأحترافية": true },
      },
    ]
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Price() {
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
      <div className="bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl bg-white dark:bg-black py-16 sm:py-24 sm:px-6 lg:px-8">
          <h4 className="mb-28 text-center text-[2.4rem] font-bold leading-[44px] text-gray-900 dark:text-white">ابدأ تجارتك مع دوينج! باقات مرنة تناسب انطلاقتك</h4>
          {/* xs to lg */}
          <div className="mx-auto max-w-2xl space-y-16 lg:hidden">
            {tiers.map((tier, tierIdx) => (
              <section key={tier.name}>
                <div className="mb-8 px-4">
                  <h2 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
                    {tier.name}
                  </h2>
                  <p className="mt-4">
                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500 dark:text-white/70">
                      ريال/شهرياً
                    </span>
                  </p>
                </div>

                {sections.map((section) => (
                  <table key={section.name} className="w-full">
                    <caption className="border-t border-gray-200 dark:border-gray-500 bg-stone-100 dark:bg-white/20 py-3 px-4 text-right text-lg font-bold text-gray-900 dark:text-white">
                      {section.name}
                    </caption>
                    <thead>
                      <tr>
                        <th className="sr-only" scope="col">
                          Feature
                        </th>
                        <th className="sr-only" scope="col">
                          Included
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-t border-gray-200 dark:border-gray-500 pl-4 flex justify-between items-center"
                        >
                          <th
                            className="py-5 px-4 text-right text-sm font-normal text-gray-500 dark:text-white/90"
                            scope="row"
                          >
                            {feature.name}
                          </th>
                          <td className="py-5 pr-4">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-right text-sm text-gray-700 dark:text-white">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <FontAwesomeIcon
                                    className="h-5 w-5 text-green-500"
                                    icon={faCircleCheck}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    className="h-5 w-5 text-red-500"
                                    icon={faCircleXmark}
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}

                {/* <div
                  className={classNames(
                    tierIdx < tiers.length - 1 ? "py-5 border-b" : "pt-5",
                    "border-t border-gray-200 px-4"
                  )}
                >
                  <a
                    href={tier.href}
                    className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Buy {tier.name}
                  </a>
                </div> */}
              </section>
            ))}
          </div>

          {/* lg+ */}
          <div className="hidden lg:block">
            <table className="h-px w-full table-fixed">
              <thead>
                <tr>
                  <th
                    className="px-6 pb-4 text-right text-sm font-medium text-gray-900 dark:text-white"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span>الباقات الشهرية</span>
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="w-1/4 px-6 pb-4 text-right text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      scope="col"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-500 border-t border-gray-200 dark:border-gray-500">
                <tr>
                  <th
                    className="py-8 px-6 text-right align-top text-sm font-medium text-gray-900 dark:text-white"
                    scope="row"
                  >
                    الأشتراك الشهري
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="h-full py-8 px-6 align-top">
                      <div className="relative table h-full">
                        <p>
                          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {tier.priceMonthly}
                          </span>{" "}
                          <span className="text-base font-medium text-gray-500 dark:text-white/70">
                            ريال/شهرياً
                          </span>
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        className="bg-stone-100 dark:bg-white/20 py-3 pl-6 pr-6 text-right text-lg font-bold text-gray-900 dark:text-white"
                        colSpan={4}
                        scope="colgroup"
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          className="py-5 px-6 text-right text-sm font-normal text-gray-500 dark:text-white"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.name} className="py-5 px-6">
                            {/* <span>{feature.tiers[tier.name]}</span> */}
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-md text-gray-700 dark:text-white">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <FontAwesomeIcon
                                    className="h-5 w-5 text-green-500"
                                    icon={faCircleCheck}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    className="h-5 w-5 text-red-500"
                                    icon={faCircleXmark}
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              {/* <tfoot>
                <tr className="border-t border-gray-200">
                  <th className="sr-only" scope="row">
                    Choose your plan
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-6 pt-5">
                      <a
                        href={tier.href}
                        className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                      >
                        Buy {tier.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
      <FaqSection />
      <Footer theme={darkMode} />
    </div>
  );
}

export default Price;
