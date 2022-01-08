import React from "react";
import Card from "./Card"
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../Actions/listAction";

// ------------Images------------ //
import Trash from '../Assets/trash-bin.png'
import On from '../Assets/oncheck.png'
import Of from '../Assets/offcheck.png'

function DoneImg(props){
    if(props.done){
        return (<img alt="done" src={On}></img>)
    }else{
        return (<img alt="ondone" src={Of}></img>)
    }
}


function ItemList(props){

    const dispatch = useDispatch()


    return(
            <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                {/* Chama a função que deleta os items, passando o próprio item como argumento */}
                <div id='buttons'>
                <button id="butCheck" onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                <button id="butTrash" onClick={()=>{dispatch(deleteItem(props.item.id))}}><img alt="delete" src={Trash}></img></button>
                </div>
            </Card>
            </li>)}

export default ItemList;