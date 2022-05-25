import NextLink from "next/NextLink";
import { useRouter } from "next/router";

const style = {
  wrapper: `bg-brand-background h-24 flex justify-between items-center max-w-7xl mx-auto sm:px-[2rem]`,
  logoContainer: `flex items-center cursor-pointer gap-2`,
  logo: `pb-[0.5rem]`,
  rywave: `font-astro-space text-[1.2rem]`,
  headerItems: `flex items-center justify-center`,
  headerItem: `text-[#FAF6EB] px-9 font-regular font-montserrat cursor-pointer hover:text-[#F51651] uppercase`,
};

const Header = () => {
  const router = useRouter();
  const route = router.pathname;

  return (
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
  );
};

export default Header;
