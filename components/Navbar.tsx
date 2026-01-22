"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navbarItems";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="w-full border-b border-cyan-glow">
        <div className="max-w-360 mx-auto px-6 h-20 flex items-center  justify-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center  mx-auto  md:mx-0 gap-4">
            <div
              className="w-10 h-10 bg-white"
              style={{
                maskImage: "url(/azapkaan_logo.svg)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            ></div>

            <Link href="/" className="text-cyan-glow text-2xl font-semibold">
              Alperen Sakin
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden  items-center md:flex md:flex-row gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-title-grey text-2xl font-semibold hover:text-cyan-glow transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <div className="hidden items-center md:flex gap-6 border-l border-cyan-glow pl-6">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  className="w-10 h-10 bg-title-grey hover:bg-cyan-glow transition-all duration-300"
                  key={social.key}
                  href={social.href}
                  style={{
                    maskImage: social.maskImage,
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                ></Link>
              ))}
            </div>
          </ul>

          {/* Mobile menu button */}
          <div
            onClick={() => toggleMenu()}
            className="md:hidden h-10 w-10 bg-title-grey   hover:bg-cyan-glow transition-all duration-300"
            style={{
              maskImage: `${isOpen ? "url(/close-icon.svg)" : "url(/menu-icon.svg)"}`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className="md:hidden fixed top-20 left-0 w-full z-50"
      >
        <ul className="md:hidden flex flex-col items-center justify-center  gap-8 py-6 bg-black/95 backdrop-blur-md border-b border-cyan-glow">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              onClick={() => setIsOpen(false)}
              className="text-title-grey text-2xl font-semibold hover:text-cyan-glow transition-all duration-300"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          {/* Social Links */}
          <li className="flex w-full justify-center gap-6 border-t border-cyan-glow pt-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-title-grey hover:bg-cyan-glow transition-all duration-300"
                key={social.key}
                href={social.href}
                style={{
                  maskImage: social.maskImage,
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
              ></Link>
            ))}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
