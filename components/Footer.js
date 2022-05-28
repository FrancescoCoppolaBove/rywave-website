import Discord from "../assets/icons/Discord";
import Linkedin from "../assets/icons/Linkedin";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import Twitter from "../assets/icons/Twitter";
import TikTok from "../assets/icons/TikTok";
import NextLink from "next/link";
import Arrow from "../assets/icons/Arrow";

const style = {
  footer: `relative pb-[3rem] pt-[8rem] shadow-[0_-6px_24px_5px_rgba(0,0,0,0.8)]`,
  footerContainer: `border-t-2 border-[#59081D] max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8`,
  footerGrid: `flex flex-col items-center gap-8 md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`,
  logo: `mr-5 h-full p-[1rem]`,
  linkMap: `grid grid-cols gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3`,
  headerLink: `font-montserrat text-[1rem] text-[#E5E6DF]`,
  nav: `flex flex-col mt-4 space-y-2`,
  link: `font-montserrat text-[1rem] text-[#6C6C6C] cursor-pointer hover:text-brand-red`,
  bottomFooterContainer: `flex flex-col md:flex-row  align-center md:justify-between pt-[50px] text-center`,
  socialContainer: `flex gap-10 md:gap-6 pt-[2rem] md:pt-0 justify-center`,
  icon: `cursor-pointer`,
  copyright: `font-montserrat text-[#6C6C6C] text-[0.9rem]`,
  backToTop: `absolute bottom-[16rem] right-[5rem] w-[60px] h-[60px] md:hidden items-center justify-center sm:flex lg:flex`,
  backToTopButton: `w-[60px] h-[60px] bg-[#1D1D1D] flex items-center justify-center`,
};

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerGrid}>
          <div className={style.logo}>
            <img
              width="100"
              heigth="100"
              src="images/logo-footer.png"
              alt="logo rywave"
            />
          </div>
          <div className={style.linkMap}>
            <div>
              <p className={style.headerLink}>Company</p>
              <nav className={style.nav}>
                <NextLink href="/about">
                  <a className={style.link}>About</a>
                </NextLink>
                <a className={style.link}>White Paper</a>
              </nav>
            </div>
            <div>
              <p className={style.headerLink}>Product</p>
              <nav className={style.nav}>
                <a className={style.link}>Programs</a>
                <NextLink href="/utilites">
                  <a className={style.link}>Utilites</a>
                </NextLink>
              </nav>
            </div>
            <div>
              <p className={style.headerLink}>Resources</p>
              <nav className={style.nav}>
                <NextLink href="/terms">
                  <a className={style.link}>Terms of Use</a>
                </NextLink>
                <NextLink href="/contact">
                  <a className={style.link}>Contact</a>
                </NextLink>
                <NextLink href="/faq">
                  <a className={style.link}>FAQs</a>
                </NextLink>
              </nav>
            </div>
          </div>
        </div>
        <div className={style.bottomFooterContainer}>
          <p className={style.copyright}>© 2022 Rywave | Powered by Rywave </p>
          <div className={style.socialContainer}>
            <TikTok
              className={style.icon}
              width="18"
              height="18"
              color="#6E1129"
            />
            <Linkedin
              className={style.icon}
              width="19"
              height="18"
              color="#6E1129"
            />
            <Instagram
              className={style.icon}
              width="19"
              height="19"
              color="#6E1129"
            />
            <Facebook
              className={style.icon}
              width="18"
              height="18"
              color="#6E1129"
            />
            <Discord
              className={style.icon}
              width="24"
              height="17"
              color="#6E1129"
            />
            <Twitter
              className={style.icon}
              width="22"
              height="18"
              color="#6E1129"
            />
          </div>
        </div>
      </div>
      <div className={style.backToTop}>
        <button className={style.backToTopButton} onClick={goToTop}>
          <Arrow width="25" height="17" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
