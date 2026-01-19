"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navbarItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="w-full border-b border-cyan-glow">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center relative justify-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center absolute mx-auto md:relative md:mx-0 gap-4">
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
            onClick={() => handleClose()}
            className="md:hidden h-10 w-10 bg-title-grey absolute right-6 hover:bg-cyan-glow transition-all duration-300"
            style={{
              maskImage: `${isOpen ? "url(/close-icon.svg)" : "url(/menu-icon.svg)"}`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
