import Corn from "../../assets/images/Corn";

const style = {
  section: `antialiased pt-[5rem] pb-[10rem] relative overflow-hidden`,
  contentWrapper: `max-w-7xl mx-auto px-[3rem]`,
  headingContainer: `w-2/3`,
  heading: `text-montserrat text-[2.25rem] uppercase text-[#E5E6DF]`,
  subTitle: `text-montserrat text-[#979797] text-[1.25rem] leading-10`,
  listContainer: `pt-[5rem] flex`,
  leftList: `w-1/2`,
  rightList: `w-1/2`,
  li: `text-[1.25rem] font-montserrat text-[#FFFFFF] font-medium pb-[3rem]`,
  illustrationContainer: `absolute top-[13rem] right-[4rem] flex flex-col items-center z-[-3]`,
  cornSmall: ``,
};

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.contentWrapper}>
        <div className={style.headingContainer}>
          <h1 className={style.heading}>What to expect from our platform</h1>
          <p className={style.subTitle}>
            Rywave promises and delivers on providing useful bonuses to both
            musicians
            <br /> and music anthusiasts.
          </p>
        </div>
        <div className={style.listContainer}>
          <div className={style.leftList}>
            <ul className={style.ul}>
              <li className={style.li}>NFT as a Ticket</li>
              <li className={style.li}>Giveaways, AMAs &amp; Podcasts</li>
              <li className={style.li}>Community Counsel</li>
              <li className={style.li}>Help of the Design Team</li>
              <li className={style.li}>Liquidity Pool</li>
            </ul>
          </div>
          <div className={style.rightList}>
            <ul className={style.ul}>
              <li className={style.li}>Music Instruction</li>
              <li className={style.li}>Music Courses</li>
              <li className={style.li}>Artists Promotion</li>
              <li className={style.li}>Future Projects</li>
              <li className={style.li}>Headphones, WOO!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.illustrationContainer}>
        <Corn width="380" height="663" />
      </div>
    </section>
  );
};

export default Hero;
