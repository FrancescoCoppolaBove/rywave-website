import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/utilites/Hero";
// import RoadMap from "../components/utilites/RoadMap";

const style = {
  wrapper: `antialiased`,
};

const Utilites = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <Hero />
        {/* <RoadMap /> */}
        <Footer />
      </>
    </div>
  );
};

export default Utilites;
