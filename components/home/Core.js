import * as URLS from "../../utils/const/urls";
import NextLink from "next/link";

const style = {
  // section: `pt-[10rem] container max-w-lg mx-auto text-center md:max-w-none md:text-center`,
  // contentWrapper: `flex relative justify-center flex-col`,
  section: `antialiased`,
  container: `max-w-7xl px-6 py-[10rem] mx-auto`,
  contentWrapper: `items-center `,
  title: `mt-[20px] text-center  before:content-['Why_our_platform'] z-[100] text-brand-red uppercase font-montserrat text-[1.25rem]  lg:text-[3rem] font-normal relative before:text-[1.5rem] md:before:text-[4rem] before:absolute before:font-astro-space before:top-[-10px] before:right-[-100px] md:before:top-[-30px] md:before:right-[-150px] before:left-[-100px] before:z-[-1] before:text-transparent before:text-stroke`,
  containerSubtitle: `flex justify-center pt-[50px] px-5 mb-10 relative`,
  subTitle: `relative text-[#F4F4F4] font-montserrat text-[1rem] md:leading-[2.5rem] lg:text-[1.25rem] font-light p-[40px] pt-0 pb-[60px] before:hidden after:hidden md:before:block md:after:block before:content-[''] before:rounded-bl-[10px] before:absolute before:bg-brand-red before: before:left-0 before:bottom-0 before:border-l-2 before:border-solid before:border-l-rose-500 before:h-[100%] after:content[''] after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-b-rose-500 after:w-[50%] before:rounded after:border-solid`,
  buttonContainer: `absolute  bottom-[-5rem] md:bottom-[-20px] left-0 right-0 mx-auto flex flex-col md:block md:flex-row md:left-[54%] gap-6 md:gap-[0]`,
  button: `text-white font-normal px-[40px] mr-[25px] py-[10px] font-montserrat text-[16px] font-light border-b border-[#00D2F2]`,
};

const Core = () => {
  const navigateToUrlTree = () => {
    window.open(URLS.URL_BECOME_A_MEMBER, "_blank").focus();
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <h2 className={style.title}>Why our platform</h2>
          <div className={style.containerSubtitle}>
            <span className={style.subTitle}>
              Due to the lack of opportunity most artists face when launching
              their music careers, our mission
              <br /> is to provide an equal network to create, share and promote
              their music.
            </span>
            <div className={style.buttonContainer}>
              <button onClick={navigateToUrlTree} className={style.button}>
                Join our community
              </button>
              <button className={style.button}>
                <NextLink href="/about">About us</NextLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
