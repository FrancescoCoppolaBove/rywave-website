import Header from "../components/Header";
import Footer from "../components/Footer";
import NextLink from "next/link";
import Linkedin from "../assets/icons/Linkedin";
import Instagram from "../assets/icons/Instagram";
import Twitter from "../assets/icons/Twitter";
import Phone from "../assets/icons/Phone";

const style = {
  wrapper: `antialiased`,
  section: `pt-[10rem] pb-[4rem] relative`,
  iconPhone: `absolute right-0 top-[50px]`,
  contentWrapper: `md:max-w-7xl mx-auto w-[100%] md:w-1/2 relative`,
  box: `mb-[10rem]`,
  primaryText: `font-montserrat uppercase text-[2.25rem] font-medium pb-[2rem]`,
  socials: `flex gap-[4rem]`,
  boxSocial: `flex gap-[1rem] items-center font-montserrat text-[#979797] text-[1.25rem]`,
  email: `font-montserrat text-[1.5rem] uppercase font-light text-[#979797] cursor-pointer hover:text-[#c9c9c9]`,
};

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <section className={style.section}>
          <Phone className={style.iconPhone} width="437" heigth="647" />
          <div className={style.contentWrapper}>
            <div className={style.box}>
              <h2 className={style.primaryText}>
                you can find us on social media
              </h2>
              <div className={style.socials}>
                <div className={style.boxSocial}>
                  <Linkedin
                    className={style.icon}
                    width="37"
                    height="35"
                    color="#6E1129"
                  />
                  <div>/company/rywave</div>
                </div>
                <div className={style.boxSocial}>
                  <Instagram
                    className={style.icon}
                    width="37"
                    height="36"
                    color="#6E1129"
                  />
                  <div>/rywavemusic</div>
                </div>
                <div className={style.boxSocial}>
                  <Twitter
                    className={style.icon}
                    width="42"
                    height="35"
                    color="#6E1129"
                  />
                  <div>/rywavemusic</div>
                </div>
              </div>
            </div>
            <div className={style.box}>
              <h2 className={style.primaryText}>
                also you can contact us via email
              </h2>
              <NextLink href="mailto:contact@rywave.io">
                <span className={style.email}>contact@rywave.io</span>
              </NextLink>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default Contact;
