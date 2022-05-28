const style = {
  containerSection: `antialiased`,
  contentWrapper: `max-w-[95rem] mx-auto flex flex-col items-center`,
  container: `w-full`,
  section: `py-[10rem] relative`,
  line: `w-[190px] h-[5px] absolute bg-[#350A16]`,
  firstLine: `top-[50%] right-[0]`,
  secondLine: `top-[50%] left-[0]`,
  circle: `w-[17px] h-[17px] bg-[#F51651] rounded-[50%] absolute`,
  firstSection: `border-r-[5px] border-[#350A16]`,
  secondSection: `border-l-[5px] border-[#350A16]`,
  fifthSection: `border-r-[5px] border-[#350A16] border-b-[5px]`,
  firstCircle: `top-[49%] right-[175px]`,
  secondCircle: `top-[49%] left-[175px]`,
  heading: `text-center pb-[4rem] z-[100] text-brand-red font-montserrat text-[3rem] font-normal relative before:text-[4rem] before:absolute before:font-astro-space before:top-[-30px] before:text-transparent before:text-stroke before:z-[-1]`,
  firstHeading: `before:content-['Nft_as_a_ticket'] before:left-[32%]`,
  secondHeading: `before:content-['Giveaways_AMAs_&_Podcasts'] before:left-[13%]`,
  thirdHeading: `before:content-['Community_Counsel'] before:left-[25%]`,
  fourthHeading: `before:content-['Help_of_the_Design_Team'] before:left-[20%]`,
  fifthHeading: `before:content-['Liquidity_Pool'] before:left-[32%]`,
  sixthHeading: `before:content-['Music_Instruction'] before:left-[27%]`,
  seventhHeading: `before:content-['Music_Courses'] before:left-[31%]`,
  eighthHeading: `before:content-['Artists_Promotion'] before:left-[26%]`,
  ninthHeading: `before:content-['Future_Projects'] before:left-[29%]`,
  tenthHeading: `before:content-['Headphones_WOO!'] before:left-[27%]`,
  containerText: `flex justify-center `,
  text: `font-montserrat text-[1rem] text-[#979797] leading-[2.5rem]`,
};

const RoadMap = () => {
  return (
    <section className={style.containerSection}>
      <div className={style.contentWrapper}>
        <div className={style.container}>
          <div className={`${style.section} ${style.firstSection}`}>
            <div className={`${style.line} ${style.firstLine}`}></div>
            <div className={`${style.circle} ${style.firstCircle}`}></div>
            <div className={`${style.heading} ${style.firstHeading}`}>
              NFT as a Ticket
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                Partnering up with community selected festivals, concerts or
                clubs and the holders
                <br /> of our NFT will be able to use their unique token as an
                exclusive ticket to enter.
              </p>
            </div>
          </div>
          <div className={`${style.section} ${style.firstSection}`}>
            <div className={`${style.line} ${style.firstLine}`}></div>
            <div className={`${style.circle} ${style.firstCircle}`}></div>
            <div className={`${style.heading} ${style.secondHeading}`}>
              Giveaways, AMAs &amp; Podcasts
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                Of course there will be no shortage of giveaways in our
                community. Our parents
                <br /> taught us to give back, TOO! We will host weekly AMAs to
                explain and answer every
                <br /> question you may have, while our future podcasts will be
                more focused on
                <br /> announcing and solving music problems with the help of
                crypto.
              </p>
            </div>
          </div>
          <div className={`${style.section} ${style.firstSection}`}>
            <div className={`${style.line} ${style.firstLine}`}></div>
            <div className={`${style.circle} ${style.firstCircle}`}></div>
            <div className={`${style.heading} ${style.thirdHeading}`}>
              Community Counsel
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                A minority of engaging community members will be asked to
                represent the
                <br />
                <span className={style.rywave}>Rywave</span> community counsel
                which will participate in important decision making.
              </p>
            </div>
          </div>
          <div className={`${style.section} ${style.firstSection}`}>
            <div className={`${style.line} ${style.firstLine}`}></div>
            <div className={`${style.circle} ${style.firstCircle}`}></div>
            <div className={`${style.heading} ${style.fourthHeading}`}>
              Help of the Design Team
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                As part of the community, our designers can help you envision
                the next step of
                <br /> your musical project. We will offer graphic designers and
                3D artists to help you <br /> create digital music videos,
                albums and more.
              </p>
            </div>
          </div>
          <div className={`${style.section} ${style.fifthSection}`}>
            <div className={`${style.line} ${style.firstLine}`}></div>
            <div className={`${style.circle} ${style.firstCircle}`}></div>
            <div className={`${style.heading} ${style.fifthHeading}`}>
              Liquidity Pool
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                Our focus is on providing artists the best financial head start
                possible. That is why, <br />{" "}
                <span className={style.rywave}>Rywave</span> will gather a
                reserved pool of cryptocurrency to give back to the uprising
                <br /> artists.
              </p>
            </div>
          </div>
          <div
            className={`${style.section} ${style.sixthSection} ${style.secondSection}`}
          >
            <div className={`${style.line} ${style.secondLine}`}></div>
            <div className={`${style.circle} ${style.secondCircle}`}></div>
            <div className={`${style.heading} ${style.sixthHeading}`}>
              Music Instruction
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                We believe an artist can never learn enough about their craft.
                <span className={style.rywave}> Rywave</span> will be
                <br /> partnering up with worldwide music instructors and
                enabling holders to have <br /> online music lessons free of
                charge.
              </p>
            </div>
          </div>
          <div
            className={`${style.section} ${style.seventhSection} ${style.secondSection}`}
          >
            <div className={`${style.line} ${style.secondLine}`}></div>
            <div className={`${style.circle} ${style.secondCircle}`}></div>
            <div className={`${style.heading} ${style.seventhHeading}`}>
              Music Courses
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                With our ever growing social media community, we will offer
                weekly promotion
                <br /> contests, where every one gets a fair chance. Every week
                there will be different
                <br /> instructions on how to participate.
              </p>
            </div>
          </div>
          <div
            className={`${style.section} ${style.eighthSection} ${style.secondSection}`}
          >
            <div className={`${style.line} ${style.secondLine}`}></div>
            <div className={`${style.circle} ${style.secondCircle}`}></div>
            <div className={`${style.heading} ${style.eighthHeading}`}>
              Artists Promotion
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                With our ever growing social media community, we will offer
                weekly promotion
                <br /> contests, where every one gets a fair change. Every week
                there will be different <br /> instructions on how to
                participate.
              </p>
            </div>
          </div>
          <div
            className={`${style.section} ${style.ninthSection} ${style.secondSection}`}
          >
            <div className={`${style.line} ${style.secondLine}`}></div>
            <div className={`${style.circle} ${style.secondCircle}`}></div>
            <div className={`${style.heading} ${style.ninthHeading}`}>
              Future Projects
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                The community plays a big part in our future. Holders will be
                able to cast their vote
                <br /> on who we collaborate with, and what type of project we
                move on with in later
                <br />
                stages.
              </p>
            </div>
          </div>
          <div
            className={`${style.section} ${style.tenthSection} ${style.secondSection}`}
          >
            <div className={`${style.line} ${style.secondLine}`}></div>
            <div className={`${style.circle} ${style.secondCircle}`}></div>
            <div className={`${style.heading} ${style.tenthHeading}`}>
              Headphones, WOO!
            </div>
            <div className={style.containerText}>
              <p className={style.text}>
                Upon gaining the desired number of members, we will partner with
                again -<br />
                community selected headphone company and designing our own
                <span className={style.rywave}>Rywave</span>
                <br /> Headphones! There will be a big discount floating around
                for holders. Every artist
                <br /> needs good sound quality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
