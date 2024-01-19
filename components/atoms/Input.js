import React, { forwardRef } from "react";

const Input = (
  {
    className,
    style = "outline-none appearance-none shadow-none box-border align-middle w-full",
    ...props
  },
  ref
) => {
  return (
    <>
      <input className={`${style} ${className}`} ref={ref} {...props} />
      <style jsx>{`
        input {
          line-height: normal;
          padding: 0.375rem 0.625rem;
          transition: border-color 0.2s;
        }

        input::-webkit-input-placeholder {
          line-height: normal !important;
        }
        input::placeholder {
          line-height: normal !important;
        }
        input::-moz-placeholder {
          line-height: normal !important;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Input);
