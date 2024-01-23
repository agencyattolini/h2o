import AnimWrapper from "@components/AnimWrapper";
import Hero from "@components/Hero";
import { getFluidImage } from "@components/image/imageFunctions";
import Formic from "@components/Formic";
import BackgroundImage from "@components/image/BackgroundImage";
import { useIsLg } from "@components/utils/useMediaQuery";
import FormicMessage from "@components/FormicMessage";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";

export default function Index({ data, header }) {
  const isLg = useIsLg();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hero header={header} data={data} />
      <div
        id="dove-siamo"
        className="pt-12 pb-8 page-container md:pt-12 md:pb-8"
      >
        <h2
          className={`uppercase text-6xl md:text-7xl text-[#7DC0CB] font-normal font-display`}
        >
          {data.headingTwo}
        </h2>
      </div>
      <div className="md:flex">
        <div className="relative md:w-1/2">
          <div className="absolute flex items-center justify-center w-full px-5 center-xy">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.46)",
              }}
              className=" mdtranslate-x-1/2 backdrop-blur-lg -translate-y-[90%] md:-translate-y-[95%] rounded-3xl border-black border p-5"
            >
              <div className="flex items-center justify-center">
                <img
                  src={data.logo}
                  alt="logo"
                  className="h-auto w-36 md:w-48"
                />
              </div>
            </div>
          </div>

          <iframe
            src={data.map}
            className="w-full h-[35rem] md:h-screen"
            allowFullScreen=""
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <AnimWrapper className="flex items-center justify-center mx-5 md:w-1/2">
          <AnimWrapper className="p-4 my-12 border-2 border-[#000] lg:px-16 max-w-xl  mx-auto lg:py-8 md:my-20 rounded-3xl">
            <h2 className="text-lg md:text-base">{data.textTwo}</h2>
            <Formic />
          </AnimWrapper>
        </AnimWrapper>
      </div>
      <BackgroundImage
        imageClassName="object-cover w-full h-full object-left md:object-center"
        containerClassName="min-h-screen w-full  z-20 relative flex items-end justify-start"
        image={data.water}
        key={data.water}
        sizes="max(100vw, 100vh)"
        loading="eager"
        alt=""
        id="testimonianze"
      >
        <div className="py-0 text-white page-container !max-w-[100rem] min-h-screen  h-full flex justify-center flex-col   !space-y-0">
          <h3 className="pb-3 mr-auto text-4xl font-normal uppercase lg:ml-10 md:pb-6 md:text-7xl font-display">
            {data.headingThree}
          </h3>
          <p className="pb-8 mr-auto font-bold uppercase text-l lg:ml-10 md:pb-8 md:text-2xl">
            {data.headingFour}
          </p>
          <div className="items-center justify-center space-y-10 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-12 md:space-y-0">
            {typeof isLg === "boolean" &&
              data.itemsOne.map(({ item }, i) => (
                <AnimWrapper
                  delay={isLg ? i * 0.3 : 0}
                  key={item.heading}
                  className="flex flex-col justify-between w-full h-full max-w-sm p-5 mx-auto text-center md:max-w-md md:py-7 md:px-10 item-bg"
                >
                  <p className="pb-5 text-3xl uppercase font-display md:text-4xl">
                    {item.heading}
                  </p>
                  <img
                    src={item.icon}
                    alt={item.heading}
                    className="w-full max-h-[12rem] object-contain mx-auto  max-w-[12rem] md:max-w-none"
                  />
                  <a
                    href={item.link}
                    className="table px-8 py-4 mx-auto mt-4 capitalize border border-[rgba(255,_255,_255,_0.6)] rounded font-medium"
                  >
                    {item.button}
                  </a>
                </AnimWrapper>
              ))}
          </div>
        </div>
      </BackgroundImage>
      <div id="lascia-una-testimonianza" className="!space-y-0 page-container">
        <h4
          className={`uppercase text-4xl pb-6 md:pb-10 md:text-7xl text-[#7DC0CB] font-normal font-display`}
        >
          {data.headingFour}
        </h4>
        <div className="lg:flex lg:space-x-20">
          <div className="lg:w-[40%]">
            <AnimWrapper className="p-4 border-2 border-[#000] lg:px-8 max-w-xl  mx-auto lg:py-6 rounded-3xl">
              <FormicMessage />
            </AnimWrapper>
          </div>
          <AnimWrapper className="lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-8 text-2xl font-bold uppercase md:text-2xl">
              {data.headingSix}
            </h5>
            <div className="relative ">
              <motion.div
                animate={{ height: isOpen ? "auto" : "28.5rem" }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="space-y-8 overflow-hidden"
              >
                {data.itemsTwo.map(({ item }) => (
                  <div
                    className="flex flex-col lg:space-x-5 lg:flex-row lg:items-center"
                    key={item.name}
                  >
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-24 h-24 mb-auto"
                    />
                    <div className="mt-4 lg:mt-0">
                      <p className="pb-1 font-semibold uppercase">
                        {item.name}
                      </p>
                      <p className="">{item.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={` ${
                  isOpen ? "translate-y-16" : ""
                } absolute bottom-0 left-0 duration-200 z-20 w-full h-24`}
              >
                {!isOpen && (
                  <div className="absolute inset-0 bg-grad z-[-1] pointer-events-none" />
                )}
                <svg
                  className={`${
                    isOpen ? "rotate-180" : ""
                  } w-20 h-20 duration-200 mx-auto`}
                  viewBox="0 0 88 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.5926 34.0739C70.0246 35.5059 70.0246 37.8275 68.5926 39.2594L46.5926 61.2594C45.905 61.947 44.9724 62.3333 43.9999 62.3333C43.0275 62.3333 42.0948 61.947 41.4072 61.2594L19.4072 39.2594C17.9753 37.8275 17.9753 35.5059 19.4072 34.074C20.8391 32.642 23.1607 32.642 24.5926 34.074L43.9999 53.4812L63.4072 34.0739C64.8391 32.642 67.1607 32.642 68.5926 34.0739Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </AnimWrapper>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`../cms/pages/homepage.json`);
  const seo = await import(`../cms/config/seo.json`);
  const header = await import(`../cms/config/header.json`);

  data.default.hero = await getFluidImage(data.default.hero);
  data.default.water = await getFluidImage(data.default.water);
  return {
    props: {
      data: data.default,
      seo: seo.default,
      header: header.default,
    },
  };
}
