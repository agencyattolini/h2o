import React, { forwardRef } from "react";

const Spinner = (
  { color = "border-gray-300", size = "md", loadingText, className, ...props },
  ref
) => {
  const SIZES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
    custom: "",
  };

  return (
    <>
      <div
        className={`spin-container inline-block ${
          loadingText ? "relative" : "absolute"
        } border-2 rounded-full ${color} ${SIZES[size]} ${className}`}
        ref={ref}
        {...props}
      >
        <div className="absolute p-0 overflow-hidden whitespace-no-wrap border-0 spin"></div>
      </div>
      <style jsx>{`
        .spin-container {
          animation: 0.45s linear 0s infinite normal none running spinning;
          border-bottom-color: transparent !important;
          border-left-color: transparent !important;
        }

        .spin-container .spin {
          clip: rect(0px, 0px, 0px, 0px);
          height: 1px;
          width: 1px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          margin: -1px;
        }

        @keyframes spinning {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default forwardRef(Spinner);
