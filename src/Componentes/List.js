import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";


function List(){
    
    const items = useSelector( state => state)

    return(
        <ul>
            {items.map(item => <ItemList key={item.id} item={item}></ItemList>)}
        </ul>
    )
}
        
export default List;