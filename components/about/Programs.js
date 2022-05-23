import Beats from "../../assets/icons/Beats";
import AiProducer from "../../assets/icons/AiProducer";
import GasPredictor from "../../assets/icons/GasPredictor";

const style = {
  section: `antialiased pt-[5rem] pb-[15rem]`,
  title: `text-center text-[2.5rem] font-montserrat uppercase pb-[5rem]`,
  contentWrapper: `max-w-7xl mx-auto relative`,
  containerBeats: `w-1/2 pt-[6rem] pb-[10rem]`,
  containerBeatsIcon: `absolute rounded-[30px] p-[3.5rem] w-3/5 top-[4rem] right-[-20rem] bg-gradient-to-r from-[#550D21] to-[#0A0A0A]`,
  beatsBox: `w-2/5 flex flex-col items-center`,
  rywave: `uppercase font-medium`,
  text: `font-montserrat text-[1.125rem] leading-[2.25rem] text-[#979797]`,
  iconText: `pt-[1rem] text-[2.5rem] font-astro-space`,
  containerProducerIcon: `flex justify-end absolute top-[5rem] rounded-[30px] p-[3.5rem] left-[-20rem] w-3/5 bg-gradient-to-l from-[#1C4359] to-[#0A0A0A]`,
  containerProducer: `w-1/2`,
  contentWrapperProducer: `pt-[10rem] flex justify-end`,
  containerGasPredictorIcon: `absolute rounded-[30px] p-[3.5rem] w-3/5 top-[20rem] right-[-20rem] bg-gradient-to-r from-[#5B3F1B] to-[#0A0A0A]`,
  producerBox: `w-1/2 flex flex-col items-center`,
  gasPredictorBox: `w-7/12 flex flex-col items-center`,
  containerGasPredictor: `w-1/2`,
  contentWrapperGasPredictor: `pt-[30rem] pb-[10rem]`,
};

const Programs = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Our Programs</h2>
      <div className={style.contentWrapper}>
        <div className={style.containerBeatsIcon}>
          <div className={style.beatsBox}>
            <Beats width="204" heigth="204" />
            <h4 className={style.iconText}>ai beats</h4>
          </div>
        </div>
        <div className={style.containerBeats}>
          <p className={style.text}>
            This platform was designed by the{" "}
            <span className={style.rywave}>Rywave</span> team in order to fully
            provide artists with the tools to cope with the process of creating
            and developing music. You can play with existing songs or use one of
            our very own beats. It utilizes a variety of essentials and
            modifications anyone can use. An important part of the AI beats is
            the recommender. When in trouble, this AI recommendation engine will
            provide you with useful suggestions on improving your track.
          </p>
        </div>
      </div>
      <div
        className={`${style.contentWrapper} ${style.contentWrapperProducer}`}
      >
        <div className={style.containerProducerIcon}>
          <div className={style.producerBox}>
            <AiProducer width="204" height="204" />
            <h4 className={style.iconText}> Ai Producer</h4>
          </div>
        </div>
        <div className={style.containerProducer}>
          <p className={style.text}>
            You will be given a chance to work directly with the ultimate music
            creator, one we have used ourselves to create the v01 collection.
            The team assembled a machine learning algorithm utilizing the LSTM
            generative adversarial network. Through the amazing contents it
            provides, we encourage you artists, to take the art of music to new
            heights.
          </p>
        </div>
      </div>
      <div
        className={`${style.contentWrapper} ${style.contentWrapperGasPredictor}`}
      >
        <div className={style.containerGasPredictorIcon}>
          <div className={style.gasPredictorBox}>
            <GasPredictor />
            <h4 className={style.iconText}>gas predictor</h4>
          </div>
        </div>
        <div className={style.containerGasPredictor}>
          <p className={style.text}>
            The cost of gas fees fluctuates with the supply and demand for
            processing power. Therefore, we wanted to provide the community with
            a cool method to create an accurate gas fee predictor using machine
            learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
