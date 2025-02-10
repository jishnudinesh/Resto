import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "./menuContext";
import Dishes from "../components/Dishes";
import Header from "../components/Header";

const List = () => {
    const { data } = useContext(MenuContext)
    const [list, setList] = useState([]);
    const [tab, setTab] = useState();
    const [categorylist, setCategorylist] = useState([]);


    useEffect(() => {
        if (tab) {
            setCategorylist(list.find((f) => tab === f.menu_category_id).category_dishes)
        }

    }, [tab]) //eslint-disable-line



    useEffect(() => {
        if (data) {
            let items = data.table_menu_list.map((i) => i)
            setList(items)
            setTab(items[0].menu_category_id)
        }
    }, [data])
    return (
        <>
            <div className="sticky">
                <Header />
                <div className="tabs">
                    {list.map((i) => {
                        return (<>
                            <span onClick={() => setTab(i.menu_category_id)} className={tab === i.menu_category_id ? 'active tab' : 'tab'}>{i.menu_category}</span>
                        </>)


                    })}


                </div>
            </div>
            <div style={{marginTop: '150px'}}>
            <hr class="solid"></hr>
            {categorylist.map((i) => (
                <>
                    <Dishes dish={i} key={i.dish_id} />
                    <hr class="solid"></hr>
                </>

            ))}
            </div>
        </>




    )
}
export default List;