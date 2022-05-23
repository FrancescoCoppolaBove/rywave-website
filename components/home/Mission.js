import { useState } from "react";

import Equality from "../../assets/icons/Equality";
import Promotion from "../../assets/icons/Promotion";
import Transparency from "../../assets/icons/Transparency";
import DifferenceIllustration from "../../assets/images/diffrenceIllustration.svg";

const style = {
  section: `pt-[20rem] pb-[20rem] relative`,
  container: `max-w-7xl mx-auto`,
  contentWrapper: `relative items-center md:flex md:space-x-6`,
  empty: `md:w-1/2`,
  illustration: ``,
  polygon: `absolute top-[300px] left-[-240px] z-[1] lg:visible invisible`,
  differenceIllustration: `w-[407px] h-[385px] absolute z-[100] left-[30px] top-[330px] lg:visible invisible`,
  textContainer: `relative z-[10000]`,
  headerContainer: `grid grid-cols-3 gap-8 pb-[5rem]`,
  titleContainer: `flex items-center font-montserrat uppercase text-[1.5rem] pb-[10px]`,
  anchor: `flex items-center`,
  icon: `mr-[1rem] text-[#EEE345]`,
  pContainer: `text-left`,
  p: `pb-[1rem] font-montserrat text-[1rem]`,
};

const Mission = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <img alt="polygon" src="images/Polygon.png" className={style.polygon} />
        <DifferenceIllustration className={style.differenceIllustration} />
        <div className={style.contentWrapper}>
          <div className={style.empty}></div>
          <div className={style.textContainer}>
            <ul className={style.headerContainer} role="tablist">
              <li
                className={`${style.titleContainer} ${
                  openTab === 1
                    ? "border-b-[1px] border-b-[#3183F5]"
                    : "border-b-0 "
                }`}
              >
                <a
                  className={style.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                >
                  <Equality
                    className={style.icon}
                    color={openTab === 1 ? "#3183F5" : "#E5E6DF"}
                  />
                  <div>Equality</div>
                </a>
              </li>
              <li
                className={`${style.titleContainer} ${
                  openTab === 2
                    ? "border-b-[1px] border-b-[#3183F5]"
                    : "border-b-0 "
                }`}
              >
                <a
                  className={style.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                >
                  <Promotion
                    className={style.icon}
                    color={openTab === 2 ? "#3183F5" : "#E5E6DF"}
                  />
                  <div>Promotion</div>
                </a>
              </li>
              <li
                className={`${style.titleContainer} ${
                  openTab === 3
                    ? "border-b-[1px] border-b-[#3183F5]"
                    : "border-b-0 "
                }`}
              >
                <a
                  className={style.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                >
                  <Transparency
                    className={style.icon}
                    color={openTab === 3 ? "#3183F5" : "#E5E6DF"}
                  />
                  <div>Transparency</div>
                </a>
              </li>
            </ul>
            <div className={style.pContainer}>
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p className={style.p}>
                  Our artists become creators of intellectual property and the
                  creators of their own artistic presence, putting them in the
                  drivers seat.
                </p>
                <p className={style.p}>
                  The insights platform showcases all revenue the artist
                  produces on our network, along with their streaming data and
                  crowdfounding resources.
                </p>
                <p className={style.p}>
                  Copyright infringment playing an important role in the music
                  industry, we believe it is crucial to maintain ownership of
                  music, we made it a part of the network.
                </p>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                <p className={style.p}>SECONDO TEST</p>
                <p className={style.p}>
                  The insights platform showcases all revenue the artist
                  produces on our network, along with their streaming data and
                  crowdfounding resources.
                </p>
                <p className={style.p}>
                  Copyright infringment playing an important role in the music
                  industry, we believe it is crucial to maintain ownership of
                  music, we made it a part of the network.
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                <p className={style.p}>TERZO TESTO</p>
                <p className={style.p}>
                  The insights platform showcases all revenue the artist
                  produces on our network, along with their streaming data and
                  crowdfounding resources.
                </p>
                <p className={style.p}>
                  Copyright infringment playing an important role in the music
                  industry, we believe it is crucial to maintain ownership of
                  music, we made it a part of the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
