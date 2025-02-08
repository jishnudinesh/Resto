import React from "react";
import MenuContextProvider from "./menuContext";
import List from "./List";
import "../styles/Style.css"
const MainMenu = () => {




    return (
        <div className="page-container ">
            <MenuContextProvider>
                <List />
            </MenuContextProvider>
        </div>
    )
}
export default MainMenu;