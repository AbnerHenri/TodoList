import React from "react";
import Card from './Card'

import Arrow from '../Assets/flecha.png'

function Modal(props){

    

    return(
        <div className={ props.show ? 'modal' : 'modal hide'}>
        <img alt='return' onClick={props.onHideModal} id='imageReturn' src={Arrow}></img>

            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default Modal;