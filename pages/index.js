import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Core from "../components/home/Core";
import Mission from "../components/home/Mission";
import Collection from "../components/home/Collection";
import Faq from "../components/home/Faq";
import HowItWorks from "../components/home/HowItWorks";

const style = {
  wrapper: `antialiased overflow-hidden`,
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <Hero />
        <Core />
        <HowItWorks />
        <Mission />
        <Collection />
        <Faq />
        <Footer />
      </>
    </div>
  );
};

export default Home;
