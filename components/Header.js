import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { menuScreen } from "./mobile menu/Variants";
import NavLink from "./mobile menu/NavLink";
import MobileMenuToggle from "./mobile menu/MobileMenuToggle";
import NavExtra from "./mobile menu/NavExtra";

export default function Header({ data, light }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNav() {
    setIsOpen(!isOpen);
    document.querySelector("body").style.overflow = isOpen
      ? "hidden auto"
      : "hidden";
  }
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuScreen}
            initial="hidden"
            exit="hidden"
            animate="visible"
            id="mob-menu"
            className="fixed inset-0 z-50 overflow-y-scroll text-center text-white pointer-events-auto bg-[#B3D1D6]"
          >
            <div
              id="menu-items"
              className="z-10 inline-flex flex-col items-center justify-center min-h-full text-left page-container-simple"
            >
              {data.links.map(({ item }, i) => (
                <NavLink
                  className="py-2 text-2xl font-semibold text-white lg:block"
                  order={i}
                  onClick={() => {
                    toggleNav();
                  }}
                  item={item}
                  key={item.text}
                />
              ))}
              <NavExtra
                order={data.links.length}
                playAnimation={isOpen}
                onClick={() => toggleNav()}
              >
                <div className="flex items-center space-x-6">
                  {data.socials.map(({ item }) => (
                    <a
                      key={item.icon}
                      href={item.link}
                      target="_blank"
                      className="duration-200 focus-visible:opacity-60 hover:opacity-60"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.icon}
                        alt="social"
                        className="w-auto h-7"
                      />
                    </a>
                  ))}
                </div>
              </NavExtra>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-50 flex items-center justify-between px-5 py-4 mx-auto space-x-20 lg:px-16 lg:justify-start">
        <Link className="lg:flex-" href="/">
          <img
            src={light ? data.logoLight : data.logo}
            alt="Logo"
            className="object-contain w-auto h-16 mb-3"
          />
        </Link>

        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center space-x-4">
              {data.links.map(({ item }) => (
                <li className="xl:px-2" key={item.link}>
                  <Link
                    className="text-base font-medium text-center duration-200 focus-visible:opacity-60 hover:opacity-60"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* <div className="items-center justify-end flex-1 hidden space-x-4 lg:flex">
          {data.socials.map(({ item }) => (
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
        </div> */}
        <MobileMenuToggle
          className="lg:hidden"
          isOpen={isOpen}
          onClick={() => toggleNav()}
        />
      </div>
    </header>
  );
}
