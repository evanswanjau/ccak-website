import React, { useState, useEffect } from "react";
import { DropDown } from "../components/navBar/dropDown";
import { MenuBar } from "../components/navBar/menuBar";
import { TopBar } from "../components/navBar/topBar";
import { Drawer } from "../components/navBar/drawer";
import { HamburgerMenu } from "../components/navBar/hamburgerMenu";

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
    }, [lastScrollY]); // eslint-disable-line

    return (
        <div className="fixed z-40 flex w-full">
            <div className="w-full hidden lg:block">
                {topBar && (
                    <TopBar dropDown={dropDown} setDropDown={setDropDown} />
                )}
                <MenuBar dropDown={dropDown} setDropDown={setDropDown} />
                <DropDown dropDown={dropDown} setDropDown={setDropDown} />
            </div>
            <div className="w-full lg:hidden">
                <HamburgerMenu setMobile={setMobile} />
                {mobile && <Drawer mobile={mobile} setMobile={setMobile} />}
            </div>
        </div>
    );
};

export default NavBar;
