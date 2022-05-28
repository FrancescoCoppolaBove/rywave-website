import Hamburger from "../assets/icons/Hamburger";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const style = {
  wrapper: `bg-brand-background h-24 flex justify-between items-center max-w-7xl mx-auto px-[2rem]`,
  logoContainer: `flex items-center cursor-pointer gap-2`,
  logo: `pb-[0.5rem]`,
  rywave: `font-astro-space text-[1.2rem]`,
  headerItems: `md:flex items-center justify-center hidden`,
  mobileMenuIcon: `md:hidden cursor-pointer`,
  menuMobile: `flex-col gap-4 md:hidden`,
  headerItem: `text-[#FAF6EB] px-9 font-regular font-montserrat cursor-pointer hover:text-[#F51651] uppercase`,
};

const Header = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const router = useRouter();
  const route = router.pathname;

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <NextLink href="/">
          <div className={style.logoContainer}>
            <img
              className={style.logo}
              src="/images/logo.png"
              alt="logo rywave"
              width="30"
            />
            <span className={style.rywave}>rywave</span>
            {/* <Image alt="rywave logo" src={rywaveLogo} height={40} width={170} /> */}
          </div>
        </NextLink>
        {/* Mobile Button Menu */}
        <div
          className={style.mobileMenuIcon}
          onClick={() => setMenuMobileOpen(!menuMobileOpen)}
        >
          <Hamburger width="19" height="18" color="#6E1129" />
        </div>

        {/* Desktop Menu */}
        <div className={style.headerItems}>
          <NextLink href="/">
            <div
              className={`${style.headerItem} ${
                route === "/" ? "text-[#F51651]" : ""
              }`}
            >
              Home
            </div>
          </NextLink>
          <NextLink href="/about">
            <div
              className={`
              ${style.headerItem}
              ${route === "/about" ? "text-[#F51651]" : ""}`}
            >
              About
            </div>
          </NextLink>
          <NextLink href="/utilites">
            <div
              className={`
              ${style.headerItem}
              ${route === "/utilites" ? "text-[#F51651]" : ""}`}
            >
              Utilites
            </div>
          </NextLink>
          <div className={style.headerItem}>White Paper</div>
        </div>
      </div>
      {/* Menu Mobile */}
      <div
        className={`${style.menuMobile} ${menuMobileOpen ? "flex" : "hidden"}`}
      >
        <NextLink href="/">
          <div
            className={`${style.headerItem} ${
              route === "/" ? "text-[#F51651]" : ""
            }`}
          >
            Home
          </div>
        </NextLink>
        <NextLink href="/about">
          <div
            className={`
              ${style.headerItem}
              ${route === "/about" ? "text-[#F51651]" : ""}`}
          >
            About
          </div>
        </NextLink>
        <NextLink href="/utilites">
          <div
            className={`
              ${style.headerItem}
              ${route === "/utilites" ? "text-[#F51651]" : ""}`}
          >
            Utilites
          </div>
        </NextLink>
        <div className={style.headerItem}>White Paper</div>
      </div>
    </header>
  );
};

export default Header;
