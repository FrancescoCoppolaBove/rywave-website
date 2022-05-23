import Discord from "../assets/icons/Discord";
import Linkedin from "../assets/icons/Linkedin";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import Twitter from "../assets/icons/Twitter";
import TikTok from "../assets/icons/TikTok";
import Link from "next/Link";
import FooterLogo from "../assets/FooterLogo";

const style = {
  footer: `pb-[3rem] pt-[8rem] shadow-[0_-6px_24px_5px_rgba(0,0,0,0.8)]`,
  footerContainer: `border-t-2 border-[#59081D] max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8`,
  footerGrid: `grid grid-cols-1 gap-8 lg:grid-cols-3`,
  logo: `mr-5 h-full`,
  linkMap: `grid grid-cols gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3`,
  headerLink: `font-montserrat text-[1rem] text-[#E5E6DF]`,
  nav: `flex flex-col mt-4 space-y-2`,
  link: `font-montserrat text-[1rem] text-[#6C6C6C] cursor-pointer hover:text-brand-red`,
  bottomFooterContainer: `flex justify-between pt-[50px]`,
  socialContainer: `grid grid-cols gap-4 lg:grid-cols-6`,
  icon: `cursor-pointer`,
  copyright: `font-montserrat text-[#6C6C6C] text-[0.9rem]`,
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerGrid}>
          <div className={style.logo}>
            <FooterLogo />
          </div>
          <div className={style.linkMap}>
            <div>
              <p className={style.headerLink}>Company</p>
              <nav className={style.nav}>
                <Link href="/about">
                  <a className={style.link}>About</a>
                </Link>
                <a className={style.link}>White Paper</a>
              </nav>
            </div>
            <div>
              <p className={style.headerLink}>Product</p>
              <nav className={style.nav}>
                <a className={style.link}>Programs</a>
                <Link href="/utilites">
                  <a className={style.link}>Utilites</a>
                </Link>
              </nav>
            </div>
            <div>
              <p className={style.headerLink}>Resources</p>
              <nav className={style.nav}>
                <Link href="/terms">
                  <a className={style.link}>Terms of Use</a>
                </Link>
                <Link href="/contact">
                  <a className={style.link}>Contact</a>
                </Link>
                <Link href="/faq">
                  <a className={style.link}>FAQs</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className={style.bottomFooterContainer}>
          <p className={style.copyright}>© 2022 Rywave | Powered by Rywave </p>
          <div className={style.socialContainer}>
            <Link href="/about">
              <TikTok
                className={style.icon}
                width="18"
                height="18"
                color="#6E1129"
              />
            </Link>
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
    </footer>
  );
};

export default Footer;
