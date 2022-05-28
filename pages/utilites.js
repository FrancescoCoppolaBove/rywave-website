import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/utilites/Hero";
import Roadmap from "../components/utilites/Roadmap";

const style = {
  wrapper: `antialiased`,
};

const Utilites = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <Hero />
        <Roadmap />
        <Footer />
      </>
    </div>
  );
};

export default Utilites;
