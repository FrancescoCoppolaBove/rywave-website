const style = {
  section: `py-[10rem] antialiased relative bg-[#0C0C0C]`,
  contentWrapper: `max-w-7xl mx-auto`,
  text: `font-montserrat text-[1.25rem] leading-[3rem] text-[#979797]`,
  rywave: `font-montserrat uppercase`,
};

const Aim = () => {
  return (
    <section className={style.section}>
      <div className={style.contentWrapper}>
        <p className={style.text}>
          We aim towards creating new possibilites for artistic expression
          instead of going for conventional music practices.
          <span className={style.rywave}> Rywave</span> can serve as a new
          founding music platform, travelling beyond the limits of current music
          labeling. Therefore, new genres will be established. Community members
          will decide what each genre will contain or express through voting.
        </p>
      </div>
    </section>
  );
};

export default Aim;
