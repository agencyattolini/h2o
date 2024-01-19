import React from "react";
import PropTypes from "prop-types";

const Label = ({
  className,
  style = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
  htmlFor,
  label,
  ...props
}) => {
  return (
    <label className={`${style} ${className}`} htmlFor={htmlFor} {...props}>
      {label}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Label;
