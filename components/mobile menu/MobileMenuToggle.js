import { Squash as Hamburger } from "hamburger-react";

function MobileMenuToggle({
  className,
  ariaLabel = "Toggle navigation",
  onClick,
  isOpen,
}) {
  return (
    <span className={`${className}`}>
      <Hamburger
        color={isOpen ? "#fff" : "#000"}
        toggled={isOpen}
        toggle={onClick}
        label={ariaLabel}
        distance="sm"
        duration={0.3}
        size={32}
      />
    </span>
  );
}

export default MobileMenuToggle;
