import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimWrapper({ children, delay = 0, ...props }) {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.from(
          containerRef.current,
          {
            duration: 0.6,
            delay: 0.2 + delay,
            autoAlpha: 0,
            ease: "power3.out",
            y: 20,
            scrollTrigger: {
              trigger: containerRef.current,
              // markers: true,
              start: "top 85%",
              end: "bottom bottom",
            },
          },
          300
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
}
