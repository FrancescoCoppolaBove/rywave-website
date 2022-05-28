import * as URLS from "../utils/const/urls";
import Linkedin from "../assets/icons/Linkedin";
import Instagram from "../assets/icons/Instagram";
import Discord from "../assets/icons/Discord";
import Twitter from "../assets/icons/Twitter";
import React, { useEffect } from "react";

const style = {
  wrapper: `px-[2rem] md:px-0 container max-w-lg mx-auto text-center md:max-w-none md:text-center`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/images/background-Hero.png')] before:bg-cover before:z-[-1]`,
  copyContainer: `w-[100%] md:w-1/2 justify-center text-center`,
  title: `relative text-white text-[2.25rem] md:text-[3.375rem] lg:text-[4.5rem] font-astro-space`,
  subTitle: `font-montserrat text-[#979797] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]`,
  actionsContainer: `my-[50px] flex flex-col gap-10 md:flex-row justify-center`,
  button: `btn font-montserrat text-[18px] py-[1rem] px-[2rem] rounded-lg uppercase font-medium`,
  buttonPrimary: `bg-brand-blue bg-brand-cyan mr-0 md:mr-10 text-[#1C1C1C]`,
  buttonSecondary: `border-solid border-brand-red border-2 text-[#FAF6EB] font-medium`,
  socialContainer: `hidden lg:flex absolute top-[24rem] left-[100px] flex flex-col gap-10 z-[100000000]`,
  socialLink: `cursor-pointer`,
  icon: `cursor-pointer`,
};

const Hero = () => {
  const navigateToForm = () => {
    window.open(URLS.URL_FORM_REGISTRATION, "_blank").focus();
  };
  const navigateToUrlTree = () => {
    window.open(URLS.URL_BECOME_A_MEMBER, "_blank").focus();
  };

  const navigateUrl = (url) => {
    console.log("NAVIGAAA");
    if (typeof window !== undefined) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.copyContainer}>
          <div className={style.title}>
            When <span className="text-brand-cyan">Music</span>
            <br /> Meets <span className="text-brand-red">Crypto</span>
          </div>
          <div className={style.subTitle}>
            The first truly open music sharing platform connecting the artist to
            the listener.
          </div>
          <div className={style.actionsContainer}>
            <button
              className={`${style.button} ${style.buttonPrimary}`}
              onClick={navigateToForm}
            >
              Become a Ryder
            </button>
            <button
              className={`${style.button} ${style.buttonSecondary}`}
              onClick={navigateToUrlTree}
            >
              Become a Member
            </button>
          </div>
        </div>
      </div>
      <div className={style.socialContainer}>
        <div onClick={() => navigateUrl(URLS.URL_LINKEDIN)}>
          <Linkedin
            className={style.icon}
            width="19"
            height="18"
            color="#6E1129"
          />
        </div>
        <div onClick={() => navigateUrl(URLS.URL_INSTAGRAM)}>
          <Instagram
            className={style.icon}
            width="19"
            height="19"
            color="#6E1129"
          />
        </div>
        <div>
          <Discord
            className={style.icon}
            width="24"
            height="17"
            color="#6E1129"
          />
        </div>
        <div onClick={() => navigateUrl(URLS.URL_TWITTER)}>
          <Twitter
            className={style.icon}
            width="22"
            height="18"
            color="#6E1129"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
