import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const MenuContext = createContext();
export const MenuContextProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [order, setOrder] = useState(0);
    const [oderDetails, setOrderDetails] = useState([])
    useEffect(() => {
        if (oderDetails.length) {
            let totalCount = 0;
            oderDetails.forEach(e => {
                totalCount = totalCount + e.count
            });
            setOrder(totalCount)
        }
    }, [oderDetails])
    const getdata = () => {
        axios.get(`https://zartek-task.vercel.app/api/resto-cafe`).then((r) => {

            setData(r.data.data[0])

        }).catch((er) => console.log(er)
        )

    }


    useEffect(() => {
        getdata();

    }, [])

    return (
        <div>
            <MenuContext.Provider value={{
                data,
                order: order,
                setOrder: setOrder,
                oderDetails,
                setOrderDetails,

            }}>
                {children}
            </MenuContext.Provider>

        </div>
    )
}
export default MenuContextProvider;