import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "../assets/icons/Faq";

const style = {
  wrapper: ``,
  section: `pt-[5rem] pb-[2rem] relative`,
  icon: `absolute top-0 right-0 bottom-0 z-[-1]`,
  contentWrapper: `max-w-7xl mx-auto w-1/2`,
  title: `font-montserrat text-[2.25rem] uppercase pb-[5rem]`,
  faqContainer: `mb-[2rem]`,
  question: `font-montserrat text-[1.25rem] font-medium pb-[1rem]`,
  answer: `font-montserrat text-[#979797] text-[1rem] leading-8`,
};

const Faqs = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <section className={style.section}>
        <Faq width="596" height="695" className={style.icon} />
        <div className={style.contentWrapper}>
          <h1 className={style.title}>Frequently Asked Questions</h1>
          <div className={style.faqContainer}>
            <h3 className={style.question}>What blockchain are you using?</h3>
            <p className={style.answer}>
              We are utilizing the Immutable X smart contracts (making EVM
              compatible) for the minting site. The ecosystem will be carried
              out on either Solana or a subnet of Ethereum, Avalanche or Near.
            </p>
          </div>
          <div className={style.faqContainer}>
            <h3 className={style.question}>How do you utilize NFTs?</h3>
            <p className={style.answer}>
              NFTs serve as the perfect utilizor of music tracks by providing
              ownership, exclusivity, tying the digital asset to the physical
              (tickets). On the Discotheque, NFTs can be streamed, shared or
              subject to licensing agreements.
            </p>
          </div>
          <div className={style.faqContainer}>
            <h3 className={style.question}>How can I join?</h3>
            <p className={style.answer}>
              As an artist you can join by filling out the artist from at the
              start of the page. It will guide you through all the information.
              After that, you&apos;ll be receiving further information from the
              team on next steps. As someone who enjoys music, feel free to join
              our Discord community along all the artists, the activity and a
              holistic music experience.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faqs;
