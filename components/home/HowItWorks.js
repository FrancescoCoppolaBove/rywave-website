const style = {
  section: ``,
  contentWrapper: `max-w-7xl mx-auto`,
  donut: `relative w-[300px] h-[300px] rounded-[100%]`,
  center: `absolute bg-[#181818] text-center top-0 left-0 bottom-0 right-0 w-[230px] h-[230px] m-auto rounded-[50%] flex flex-col items-center justify-center`,
  subTitle: `text-[1.5rem] font-astro-space`,
  howItWorks: `font-montserrat text-[1rem]`,
  donutChildContainer: `absolute`,
  lineContainer: ``,
  slice1: `bg-[#270911] rotate-[0deg]`,
  slice2: `bg-[#7A122E]`,
  slice3: `bg-[#BD4666]`,
  slice4: `bg-[#CE718A] rotate-[300deg]`,
  line1: ``,
  line2: ``,
  line3: ``,
  line3: ``,
  text1: ``,
  text2: ``,
  text3: ``,
  text4: ``,
  topic: ``,
  p: ``,
};

const HowItWorks = () => {
  return (
    <section className={style.section}>
      <div className={style.contentWrapper}>
        <div className={style.donut}>
          <div className={`${style.slice1}` + " portion-block"}>
            <div className="circle"></div>
          </div>
          <div className={`${style.slice2}` + " portion-block"}>
            <div className="circle"></div>
          </div>
          <div className={`${style.slice3}` + " portion-block"}>
            <div className="circle"></div>
          </div>
          <div className={`${style.slice4}` + " portion-block"}>
            <div className="circle"></div>
          </div>

          {/* <div className={style.center}>
            <span className={style.subTitle}>Rywave</span>
            <span className={style.howItWorks}>How it works</span>
          </div> */}
          {/* <div className={`${style.donutChildContainer} ${style.text1}`}>
            <div className={`${style.line1} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Fill out the form</h3>
              <p className={style.p}>
                {" "}
                - Fill out artist form and join our community
              </p>
            </div>
          </div>
          <div className={`${style.donutChildContainer} ${style.text1}`}>
            <div className={`${style.line1} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Copyright</h3>
              <p className={style.p}>
                - Your music will be protected by both our internal and the
                integrated general copyright protocol and the AI music
                similiarity comparing tool, all of which assure your music
                remains in your hands.
              </p>
            </div>
          </div>
          <div className={`${style.donutChildContainer} ${style.text1}`}>
            <div className={`${style.line1} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Music and NFTs</h3>
              <p className={style.p}>
                - Songs are published as NFTs on the Discotheque to form
                &quot;smart&quot; licensing agreements, to own your authentic
                collectible albums, and as a ticket for real-world events.
              </p>
            </div>
          </div>
          <div className={`${style.donutChildContainer} ${style.text1}`}>
            <div className={`${style.line1} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Insights Platform</h3>
              <p className={style.p}>
                - Once a Ryder, you&apos;ll have access to your personal
                Insights Platform for artistic management.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
