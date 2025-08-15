"use client"
import { Reveal } from "@/common/Reveal/Reveal";
import React, { useState, useEffect, useRef } from "react";
import HamburgerButton from "./components/HamburgerButton/HamburgerButton";
import Logo from "./components/Logo/Logo";
import { NAVBAR_LINKS } from "@/constants";
import PopUp from "./components/PopUp/PopUp";
import MobileLinks from "./components/MobileLinks/MobileLinks";
import useNavbar from "@/customHooks/useNavbar/useNavbar";

const NavbarComponent = ()=>{
    const { menuOpen, setMenuOpen, isScrolled, showMenu, navRef } = useNavbar();

    return(<>
    <nav ref={navRef} className={`fixed top-0 inset-x-0 z-[1000] duration-300 ${
        isScrolled || menuOpen ? "bg-neutral-800/35 backdrop-blur-xs shadow-lg " : "bg-transparent "
      } ${isScrolled?"py-4":"py-6"} ${menuOpen ? "max-h-[400px]" : "max-h-[80px]"} ${showMenu && 'overflow-hidden'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <HamburgerButton isOpen={menuOpen} setIsOpen={setMenuOpen} />
          <Logo/>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block me-4">
                <div className="flex space-x-4">
                  {NAVBAR_LINKS.map((link, index)=>(
                    <a key={`desktop-${index}`} href={link.href} className="hover:md:translate-y-1 duration-100 ease-in px-0 py-2 text-balance font-extralight text-white after:content-[''] after:block after:w-full after:scale-x-0 after:h-1 after:rounded-2xl after:bg-amber-600 hover:after:scale-x-100 after: transition-transform after:duration-200 after:origin-left active:after:w-1/4">
                      <Reveal>
                        {link.name}
                      </Reveal>
                    </a>
                  ))}
                </div>
            </div>
            <PopUp/>
          </div>
        </div>
      </div>
      {showMenu && <MobileLinks/>}
    </nav>
    </>)
   }
   
   export default NavbarComponent