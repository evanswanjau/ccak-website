import React, { useState } from "react";
import { DropDown } from "../Components/navBar/dropDown";
import { MenuBar } from "../Components/navBar/menuBar";
import { TopBar } from "../Components/navBar/topBar";

export const NavBar = () => {
    const [dropDown, setDropDown] = useState({ show: false, category: "" });

    return (
        <div>
            <TopBar setDropDown={setDropDown} />
            <MenuBar setDropDown={setDropDown} />
            <DropDown dropDown={dropDown} setDropDown={setDropDown} />
        </div>
    );
};

export default NavBar;
