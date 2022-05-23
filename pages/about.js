import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import Aim from "../components/about/Aim";
import Programs from "../components/about/Programs";

const style = {
  wrapper: `antialiased`,
};

const About = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <Hero />
        <Aim />
        <Programs />
        <Footer />
      </>
    </div>
  );
};

export default About;
