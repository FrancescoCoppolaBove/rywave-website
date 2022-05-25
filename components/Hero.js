const style = {
  wrapper: `container max-w-lg mx-auto text-center md:max-w-none md:text-center`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/images/background-Hero.png')] before:bg-cover before:z-[-1]`,
  copyContainer: `w-1/2 justify-center text-center`,
  title: `relative text-white text-[72px] font-astro-space`,
  subTitle: `font-montserrat text-[#6C6C6C] text-[24px]`,
  actionsContainer: `my-[50px] flex justify-center`,
  button: `btn font-montserrat text-[18px] py-[1rem] px-[2rem] rounded-lg`,
  buttonPrimary: `bg-brand-blue bg-brand-cyan mr-10 text-[#1C1C1C]`,
  buttonSecondary: `border-solid border-brand-red border-2 text-[#FAF6EB]`,
};

const Hero = () => {
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
            <button className={`${style.button} ${style.buttonPrimary}`}>
              Become an Artist
            </button>
            <button className={`${style.button} ${style.buttonSecondary}`}>
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
