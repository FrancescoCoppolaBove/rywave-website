import React, { useState } from "react";
import Arrow from "../../assets/icons/Arrow";

const style = {
  section: `py-[10rem]`,
  container: `max-w-7xl  mx-auto justify-center items-center flex flex-col`,
  contentWrapper: `w-3/4`,
  title: `text-brand-red uppercase font-montserrat text-[3rem] mb-[3rem] font-normal relative before:content-['FAQ'] before:text-[4rem] before:absolute before:font-astro-space before:top-[-30px] before:left-[-15px] before:z-[-1] before:text-transparent before:text-stroke`,
  faqsContainer: `max-w-7xl`,
  faqContainer: `mb-[2rem] p-[1rem] bg-[#141414]`,
  faqHeader: `flex justify-between font-montserrat text-[1.25rem] font-medium`,
  question: ``,
  button: ``,
  buttonIcon: ``,
  answer: `pt-[2rem] font-montserrat font-normal text-[1rem] leading-[1.625rem]`,
};

const Faq = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <h2 className={style.title}>faq</h2>
          <div className={style.faqsContainer}>
            <div className={style.faqContainer}>
              <div className={style.faqHeader}>
                <h3 className={style.question}>
                  What blockchain are you using?
                </h3>
                <button
                  onClick={() => {
                    setOpen1(!open1);
                  }}
                  className={style.button}
                >
                  <Arrow
                    width="16"
                    height="8"
                    className={open1 ? "rotate-180" : null}
                  />
                </button>
              </div>

              {open1 && (
                <p className={style.answer}>
                  We are utilizing the Immutable X smart contracts (making EVM
                  compatible) for the minting site. The ecosystem will be
                  carried out on either Solana or a subnet of Ethereum,
                  Avalanche or Near.
                </p>
              )}
            </div>
            <div className={style.faqContainer}>
              <div className={style.faqHeader}>
                <h2 className={style.question}>How do you utilize NFTs?</h2>
                <button
                  onClick={() => {
                    setOpen2(!open2);
                  }}
                  className={style.button}
                >
                  <Arrow
                    width="16"
                    height="8"
                    className={open2 ? "rotate-180" : null}
                  />
                </button>
              </div>

              {open2 && (
                <p className={style.answer}>
                  NFTs serve as the perfect utilizor of music tracks by
                  providing ownership, exclusivity, tying the digital asset to
                  the physical (tickets). On the Discotheque, NFTs can be
                  streamed, shared or subject to licensing agreements.
                </p>
              )}
            </div>
            <div className={style.faqContainer}>
              <div className={style.faqHeader}>
                <h2 className={style.question}>How can I join?</h2>
                <button
                  onClick={() => {
                    setOpen3(!open3);
                  }}
                  className={style.button}
                >
                  <Arrow
                    width="16"
                    height="8"
                    className={open3 ? "rotate-180" : null}
                  />
                </button>
              </div>

              {open3 && (
                <p className={style.answer}>
                  As an artist you can join by filling out the artist from at
                  the start of the page. It will guide you through all the
                  information. After that, you&apos;ll be receiving further
                  information from the team on next steps. As someone who enjoys
                  music, feel free to join our Discord community along all the
                  artists, the activity and a holistic music experience.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
