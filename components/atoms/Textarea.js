import React, { forwardRef } from "react";

const Textarea = (
  {
    className,
    maxLength = "180",
    rows = "6",
    wrap = "hard",
    style = "w-full text-base outline-none focus:outline-none align-middle shadow-none box-border appearance-none transition-colors duration-200",
    ...props
  },
  ref
) => {
  return (
    <>
      <textarea
        ref={ref}
        className={`${style} ${className}`}
        maxLength={maxLength}
        rows={rows}
        wrap={wrap}
        {...props}
      ></textarea>
      <style jsx>{`
        textarea {
          line-height: normal;
          padding: 0.375rem 0.625rem;
          min-height: 6.25rem;
        }

        textarea::placeholder {
          line-height: normal !important;
        }

        textarea::-moz-placeholder {
          line-height: normal !important;
        }

        textarea::-webkit-input-placeholder {
          line-height: normal !important;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
