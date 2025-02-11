import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const CTASection = () => {
  const socialLinks = [
    {
      name: "فيسبوك",
      iconClass: faFacebook,
      description: "Fast instant communication",
    },
    {
      name: "إنستقرام",
      iconClass: faInstagram,
      description: "Developments in the sector",
    },
    {
      name: "أكس",
      iconClass: faXTwitter,
      description: "Latest news and updates",
    },
  ];

  return (
    <section>
      <div className="container mb-24">
        <div className="mx-auto w-2/3 text-center max-lg:w-10/12 max-sm:w-full">
          <p
            style={{ lineHeight: "2 !important" }}
            className="-from-[5%] mb-10 inline-block bg-gradient-to-br from-white from-30% text-gray-700 dark:text-transparent to-white/70 bg-clip-text font-heading font-bold leading-tight tracking-tight text-[3rem]"
          >
            مستقبل تجاري متكامل في منصة واحدة
          </p>
          <p className="mx-auto mb-12 w-full font-heading text-xl/12 text-xl text-gray-700 dark:text-white/70">
            نُعد تجارتك لتواكب المستقبل، وقت أقل في الانضمام، نتائج أكبر عند
            البدء
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a
              className="relative inline-flex w-56 gap-3 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 text-white to-50% py-5 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              href="#"
            >
              <span
                className="flex animate-marquee justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)] px-10"
                data-txt="اطلق متجرك الآن"
              >
                اطلق متجرك الآن
              </span>
              <span
                className="absolute start-3 top-5 flex animate-marquee-2 justify-between gap-3 before:content-[attr(data-txt)] after:content-[attr(data-txt)] px-10"
                data-txt="اطلق متجرك الآن"
              >
                اطلق متجرك الآن
              </span>
            </a>
            <a
              className="group/btn flex items-center gap-2 text-lg text-gray-900 dark:text-white hover:text-sky-500 hover:dark:text-sky-500 transition-colors"
              href="https://codecanyon.net/item/magicai-openai-content-text-image-chat-code-generator-as-saas/45408109"
              target="_blank"
            >
              انضم الى منصة دوينج
              <i className="fa-solid fa-chevron-left"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="container mb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="group flex flex-col items-center rounded-2xl px-4 pb-8 pt-10 text-center leading-tight text-gray-900 dark:text-white transition-all hover:scale-105 hover:text-sky-500 hover:dark:text-sky-500"
              href="#"
            >
              <FontAwesomeIcon
                className="h-20"
                icon={social.iconClass}
              />
              <span className="mb-8 block">
                {}
              </span>
              <span className="mb-2.5 block font-heading text-lg">
                {social.name}
              </span>
              <span className="block text-2xs">
                {social.description}
              </span>
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default CTASection;
