import React, { useState, useEffect } from "react";
import { DropDown } from "../Components/navBar/dropDown";
import { MenuBar } from "../Components/navBar/menuBar";
import { TopBar } from "../Components/navBar/topBar";
import { Drawer } from "../Components/navBar/drawer";
import { HamburgerMenu } from "../Components/navBar/hamburgerMenu";

export const NavBar = () => {
    const [dropDown, setDropDown] = useState({ show: false, category: "" });
    const [mobile, setMobile] = useState(false);
    const [topBar, setTopBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setTopBar(false);
            } else {
                // if scroll up show the navbar
                setTopBar(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        setTimeout(function () {
            if (typeof window !== "undefined") {
                window.addEventListener("scroll", controlNavbar);

                // cleanup function
                return () => {
                    window.removeEventListener("scroll", controlNavbar);
                };
            }
        }, 500);
    }, [lastScrollY]);

    return (
        <div className="fixed z-40 flex w-full">
            <div className="w-full hidden md:block">
                {topBar && (
                    <TopBar dropDown={dropDown} setDropDown={setDropDown} />
                )}
                <MenuBar dropDown={dropDown} setDropDown={setDropDown} />
                <DropDown dropDown={dropDown} setDropDown={setDropDown} />
            </div>
            <div className="w-full md:hidden">
                <HamburgerMenu setMobile={setMobile} />
                {mobile && <Drawer mobile={mobile} setMobile={setMobile} />}
            </div>
        </div>
    );
};

export default NavBar;
