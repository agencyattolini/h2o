import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BackgroundImage from "./image/BackgroundImage";

export default function Hero({ data, mini, header }) {
  const h1Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, {
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <BackgroundImage
      className="h-screen"
      containerClassName="h-screen w-full  z-20 relative flex items-end justify-start px-5 lg:px-16 pb-4 md:pb-8"
      style={{ aspectRatio: data.hero.aspectRatio }}
      image={data.hero}
      key={data.hero}
      sizes="max(100vw, 100vh)"
      loading="eager"
      alt=""
      id="chi-siamo"
    >
      <div className="">
        <h1
          className={`uppercase ${
            mini ? "text-4xl md:text-5xl" : "text-6xl"
          } md:text-7xl  text-[#7DC0CB] will-change-[filter] font-normal pb-2 font-display`}
        >
          {data.headingOne}
        </h1>
        <p className="max-w-[31.25rem] text- md:text-xl">{data.textOne}</p>

        <div className="flex items-center justify-start flex-1 mt-8 space-x-4 lg:mt-32">
          {header.socials.map(({ item }) => (
            <a
              key={item.icon}
              href={item.link}
              target="_blank"
              className="duration-200 focus-visible:opacity-60 hover:opacity-60"
              rel="noopener noreferrer"
            >
              <img src={item.icon} alt="social" className="w-auto h-7" />
            </a>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
}
