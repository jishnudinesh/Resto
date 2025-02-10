import React, { useContext, useState } from "react";
import "../styles/Style.css"
import { MenuContext } from "../menu/menuContext";

const Dishes = ({ dish }) => {
    // console.log(dish.dish_id);

    const { oderDetails, setOrderDetails } = useContext(MenuContext)
    const [value, setValue] = useState(oderDetails.find((i) => i.dish_id === dish.dish_id)?.count || 0);

    const sub = () => {
        if (value > 0) {
            setValue(value - 1)
            if (oderDetails.length && oderDetails.find((i) => i.dish_id === dish.dish_id)) {
                setOrderDetails(oderDetails.map((i) => {
                    if (i.dish_id === dish.dish_id) {
                        return {
                            dish_id: dish.dish_id,
                            count: i.count - 1
                        }
                    } else {
                        return i
                    }
                }))

            }
        }
    }

    const add = () => {
        setValue(value + 1)
        if (oderDetails.length && oderDetails.find((i) => i.dish_id === dish.dish_id)) {
            setOrderDetails(oderDetails.map((i) => {
                if (i.dish_id === dish.dish_id) {
                    return {
                        dish_id: dish.dish_id,
                        count: i.count + 1
                    }
                } else {
                    return i
                }
            }))

        } else {
            setOrderDetails([...oderDetails, { dish_id: dish.dish_id, count: 1 }])
        }


    }

    console.log(oderDetails, 'order detilas');

    return (
        // <div>
        //     <p>Spinach Salad</p>
        //     <p>SAR 7.95</p>
        //     <p>fresh spinach,mushrooms,</p>
        //     <span>
        //     <button onClick={sub}>-</button>
        //     <p>{value}</p>
        //     <button onClick={add}>+</button>
        //     <p>Customization available</p>
        //     </span>
        //     <p className="align-middle">15 Clories</p>
        //     <p className="align-right">image</p>

        // </div>

        <div class="Row">
            <div class="Column">
                <div className="dish-container">
                    <p><span>{dish.dish_Type === 1 ? <img alt="loading" width={15} height={15} src='nov.png' /> : <img alt="loading" width={15} height={15} src='veg.png' />}</span>{dish.dish_name}</p>
                    <p>{dish.dish_currency + ' ' + dish.dish_price}</p>
                    <p>{dish.dish_description}</p>




                    {dish.dish_Availability ? <div className="counter-container">
                        <button onClick={sub} className="counter-button">-</button>
                        <p className="counter-value">{value}</p>
                        <button onClick={add} className="counter-button">+</button>
                    </div> : <p className="customization">Not available</p>}

                    {dish.addonCat.length ? <p className="customization">Customization available</p> : <></>}


                </div>
            </div>
            <div class="Column">
                <div className="info-container">
                    <p className="calories">{dish.dish_calories} calories</p>
                </div>
            </div>
            <div class="Column"><p className="image"><img alt="loading" width={80} height={80} src={dish.dish_image} /></p></div>
        </div>














    )
}
export default Dishes;