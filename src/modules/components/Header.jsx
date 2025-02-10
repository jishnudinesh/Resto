import React, {  useContext } from "react";
import { MenuContext } from "../menu/menuContext";

const Header = () => {
    const { data, order } = useContext(MenuContext)
    return (
        <div className="header">
            <span><h3>{data?.restaurant_name}</h3>   </span>

            <span className="align-right">
                My Orders
                <span className="cart"><img alt="loading" height={25} width={25} src={'cart.jpg'} /><span className="cart__badge">{order}</span></span>
            </span>
        </div >


    )
}
export default Header;