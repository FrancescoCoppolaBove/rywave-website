import Header from "../components/Header";
import Footer from "../components/Footer";
import NextLink from "next/Link";
import NotFound from "../assets/404Illustration";

const style = {
  wrapper: `antialiased`,
  section: `pt-[10rem] pb-[25rem]`,
  contentWrapper: `max-w-7xl mx-auto w-1/2 relative`,
  title: `text-[8rem] font-montserrat text-medium`,
  text: `text-[#979797] font-montserrat text-[1.5rem]`,
  action: `mt-[4rem] text-[2rem] uppercase font-montserrat font-medium border-[#F51651] rounded-[30px] border-[5px] w-[400px] text-center py-[1rem] cursor-pointer`,
  illustration: `absolute right-[40px] top-[-20px] z-[-1]`,
};

const PageNotFound = () => {
  return (
    <div className={style.wrapper}>
      <>
        <Header />
        <section className={style.section}>
          <div className={style.contentWrapper}>
            <h2 className={style.title}>Whoops!</h2>
            <p className={style.text}>
              We&apos;re not sure how you got here...
              <br />
              But you may be lost in blockchain
            </p>
            <NextLink href="/">
              <div className={style.action}>back to home</div>
            </NextLink>

            <div className={style.illustration}>
              <NotFound />
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default PageNotFound;
