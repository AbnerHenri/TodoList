import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddItem } from '../Actions/listAction'

function TodoForm(props){

    const dispatch = useDispatch()

    const [text, setText] = useState('')
    
//  Puxa o valor do input 
    function HandleChange(event){
        let t = event.target.value
        setText(t)
    }

// Puxa o novo valor do text e passa de argumento para a funçao 'onAddItem' 

    function addItem(event){
        event.preventDefault();

        if(text){
            dispatch(onAddItem(text))
            setText('')
            props.onHideModal()
        }
    }


    return(
        <div>
            <form>
                <input type="text" onChange={HandleChange} value={text}></input>
                <button className="butInp" onClick={addItem}>+</button>
            </form>
        </div>
    )
}

export default TodoForm;