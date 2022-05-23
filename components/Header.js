import Link from "next/Link";
import Image from "next/Image";
import rywaveLogo from "../assets/images/rywave-logo.png";
import { useRouter } from "next/router";

const style = {
  wrapper: `bg-brand-background h-24 flex justify-between max-w-7xl mx-auto sm:px-[2rem]`,
  logoContainer: `flex items-center cursor-pointer`,
  headerItems: `flex items-center justify-end`,
  headerItem: `text-[#FAF6EB] px-9 font-regular font-montserrat cursor-pointer hover:text-[#F51651] uppercase`,
};

const Header = () => {
  const router = useRouter();
  const route = router.pathname;

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image alt="rywave logo" src={rywaveLogo} height={40} width={170} />
        </div>
      </Link>
      <div className={style.headerItems}>
        <Link href="/">
          <div
            className={`${style.headerItem} ${
              route === "/" ? "text-[#F51651]" : ""
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`
              ${style.headerItem}
              ${route === "/about" ? "text-[#F51651]" : ""}`}
          >
            About
          </div>
        </Link>
        <Link href="/utilites">
          <div
            className={`
              ${style.headerItem}
              ${route === "/utilites" ? "text-[#F51651]" : ""}`}
          >
            Utilites
          </div>
        </Link>
        <div className={style.headerItem}>White Paper</div>
      </div>
    </div>
  );
};

export default Header;
