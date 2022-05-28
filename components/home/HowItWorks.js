import Donut from "../../assets/icons/Donut";
import Indicators from "../../assets/icons/Indicators";

const style = {
  section: ``,
  contentWrapper: `max-w-7xl mx-auto flex flex-col md:flex-row relative`,
  mobileTree: `md:hidden w-[5rem] border-y-[3px] border-r-[5px] border-brand-red h-[44rem] top-[3rem] left-0 absolute `,
  circle: `w-[20px] h-[20px] bg-brand-red rounded-[50%] absolute`,
  mapCircle: `w-[15px] h-[15px] bg-brand-red rounded-[50%] absolute`,
  topCircle: `right-[-10px] top-[-10px]`,
  bottomCircle: `bottom-[-10px] right-[-10px]`,
  line: `w-[2rem] h-[3px] bg-brand-red absolute`,
  firstLine: `top-[4.5rem] right-[-2rem]`,
  firstCircle: `top-[4.1rem] right-[-2rem]`,
  secondCircle: `top-[10.6rem] right-[-2rem]`,
  thirdCircle: `top-[22.6rem] right-[-2rem]`,
  fourthCircle: `top-[33.1rem] right-[-2rem]`,
  secondLine: `top-[11rem] right-[-2rem]`,
  thirdLine: `top-[23rem] right-[-2rem]`,
  fourthLine: `top-[33.5rem] right-[-2rem]`,
  title: `md:hidden text-center font-montserrat uppercase text-[#E5E6DF] pb-[3rem]`,
  donut: `hidden md:block relative w-1/2`,
  indicators: `absolute top-[4rem] left-[21.5rem]`,
  textContainer: `pl-[4rem] pr-[1rem] md:px-0 ml-0 md:ml-[1rem] pt-[1.3rem]`,
  donutChildContainer: `mb-[2rem]`,
  text1: `top-[3rem] left-[24rem]`,
  text2: `top-[8rem] left-[36.5rem]`,
  text3: ``,
  text4: ``,
  topic: `font-montserrat font-medium font-[1rem] pb-[0.5rem]`,
  p: `font-montserrat text-[0.875rem] font-normal`,
};

const HowItWorks = () => {
  return (
    <section className={style.section}>
      <div className={style.contentWrapper}>
        <div className={style.mobileTree}>
          <div className={`${style.circle} ${style.topCircle}`}></div>
          <div className={`${style.circle} ${style.bottomCircle}`}></div>
          <div className={`${style.mapCircle} ${style.firstCircle}`}></div>
          <div className={`${style.mapCircle} ${style.secondCircle}`}></div>
          <div className={`${style.mapCircle} ${style.thirdCircle}`}></div>
          <div className={`${style.mapCircle} ${style.fourthCircle}`}></div>
          <div className={`${style.line} ${style.firstLine}`}></div>
          <div className={`${style.line} ${style.secondLine}`}></div>
          <div className={`${style.line} ${style.thirdLine}`}></div>
          <div className={`${style.line} ${style.fourthLine}`}></div>
        </div>
        <h2 className={style.title}>How it works</h2>
        <div className={style.donut}>
          <Donut width="500" height="500" />
          <Indicators className={style.indicators} width="166" />
        </div>
        <div className={style.textContainer}>
          <div className={`${style.donutChildContainer} ${style.text1}`}>
            <div className={`${style.line1} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Fill out the form</h3>
              <p className={style.p}>
                - Fill out artist form and join our community
              </p>
            </div>
          </div>
          <div className={`${style.donutChildContainer} ${style.text2}`}>
            <div className={`${style.line2} ${style.lineContainer}`}></div>
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
          <div className={`${style.donutChildContainer} ${style.text3}`}>
            <div className={`${style.line3} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Music and NFTs</h3>
              <p className={style.p}>
                - Songs are published as NFTs on the Discotheque to form
                &quot;smart&quot; licensing agreements, to own your authentic
                collectible albums, and as a ticket for real-world events.
              </p>
            </div>
          </div>
          <div className={`${style.donutChildContainer} ${style.text4}`}>
            <div className={`${style.line4} ${style.lineContainer}`}></div>
            <div className={style.textContainer}>
              <h3 className={style.topic}>Insights Platform</h3>
              <p className={style.p}>
                - Once a Ryder, you&apos;ll have access to your personal
                Insights Platform for artistic management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
