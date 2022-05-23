import LogoAbout from "../../assets/icons/LogoAbout";

const style = {
  section: `antialiased py-[10rem]`,
  contentWrapper: `max-w-7xl mx-auto w-9/12 flex`,
  textContainer: `w-3/4`,
  header: `text-[4rem] font-astro-space`,
  companyTitle: `text-transparent bg-clip-text bg-gradient-to-r from-[#C33D72] to-[#6088B4]`,
  subTitle: `text-[2.5rem] font-montserrat font-medium`,
  logoContainer: `mt-[-50px]`,
};

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.contentWrapper}>
        <div className={style.textContainer}>
          <h1 className={style.header}>
            We are <span className={style.companyTitle}>Rywave</span>
          </h1>
          <span className={style.subTitle}>New genres &amp; possibilites</span>
        </div>
        <div className={style.logoContainer}>
          <LogoAbout width="252" height="216" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
