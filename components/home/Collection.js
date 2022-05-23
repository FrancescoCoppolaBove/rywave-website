import React, { useRef } from "react";

const style = {
  section: `pt-[10rem] border-y-4 border-[#F51651]`,
  container: `relative max-w-7xl px-6 mx-auto before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../../assets/images/background-our-collection.png') before:bg-cover before:z-[10000000]`,
  title: `text-center z-[100] text-brand-red uppercase font-montserrat text-[3rem] font-normal relative before:content-['Our_collection'] before:text-[4rem] before:absolute before:font-astro-space before:top-[-30px] before:right-[-110px] before:left-[-100px] before:z-[-1] before:text-transparent before:text-stroke`,
  contentWrapper: `pt-[10rem] pb-[15rem] grid gap-8 md:grid-cols-2`,
  textContainer: ``,
  header: `font-montserrat text-[2rem] pb-[2rem] text-[#3CB9FC]`,
  p: `font-montserrat text-[1rem] text-normal leading-8`,
  carouselContainer: `flex items-center justify-start w-full h-full sm:py-8`,
  innerContainer: `w-full relative flex items-center justify-center`,
  forward: `absolute z-[30] left-[-100px] ml-10 focus:outline-none focus:bg-gray-400`,
  sliderContainer: `w-full h-full mx-auto overflow-x-hidden overflow-y-hidden`,
  slider: `h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700`,
  imgContainer: `flex flex-shrink-0 realtive w-full sm:w-auto`,
  image: `rounded-[30px] object-cover object-center w-full`,
};

const Collection = () => {
  const prevButtonRef = useRef(null);
  const sliderRef = useRef(null);
  let defaultTransform = 0;

  const slide = () => {
    console.log("prevButtonRef", prevButtonRef);
    defaultTransform = defaultTransform - 398;

    if (Math.abs(defaultTransform) >= sliderRef.current.scrollWidth / 1.7) {
      defaultTransform = 0;
      sliderRef.current.style.transform =
        "translateX(" + defaultTransform + "px)";
    }
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Our collection</h2>
        <div className={style.contentWrapper}>
          <div className={style.textContainer}>
            <h3 className={style.header}>v01 By RYWAVE</h3>
            <p className={style.p}>
              We have decided the best possible way for our
              <br /> community to obtain the benefits we offer, is to
              <br /> launch a collection of 5555 non-fungible tokens.
              <br />
              By purchasing a piece of our collection, you not only
              <br /> get an outstanding piece of art but also an
              <br /> exclusive ticket to take advantage of all our events
              <br /> and utilites.
            </p>
          </div>
          <div className={style.carouselContainer}>
            <div className={style.innerContainer}>
              <button
                onClick={slide}
                ref={prevButtonRef}
                className={style.forward}
              >
                {" "}
                {"<"}{" "}
              </button>
              <div ref={sliderRef} className={style.sliderContainer}>
                <div className={style.slider}>
                  <div className={style.imgContainer}>
                    <img
                      className={style.image}
                      alt="prima immagine"
                      src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    />
                  </div>
                  <div className={style.imgContainer}>
                    <img
                      className={style.image}
                      alt="prima immagine"
                      src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    />
                  </div>
                  <div className={style.imgContainer}>
                    <img
                      className={style.image}
                      alt="prima immagine"
                      src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    />
                  </div>
                  <div className={style.imgContainer}>
                    <img
                      className={style.image}
                      alt="prima immagine"
                      src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
