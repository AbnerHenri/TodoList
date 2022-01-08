import React, { useEffect, useState } from 'react'
import './Styles/Todo.css'
import Modal from './Componentes/Modal';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import lottie from 'lottie-web'

// ---------Componentes--------- //

import TodoForm from './Componentes/TodoForm';
import List from './Componentes/List';

import listReducer from './Reducers/listReducer';

// ---------Animations--------- //

import MyAnimation from './Animations/42476-register (1).json'

const SAVED_ITEMS = 'savedItems'

function persistState(state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS)
    
    if(actualState){
        return JSON.parse(actualState)
    }else{
        return []
    }
}

const Store = createStore(listReducer, loadState())

Store.subscribe(()=>{
    persistState(Store.getState())
})

function App(){

    const [showModal, setShowModal] = useState(false)
    
    function onHideModal(){
        console.log('Setado')
        setShowModal(false)
    }


// -------------------------Animations------------------------- //

    let animationContainer = React.createRef()
  
    useEffect(()=>{
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: MyAnimation,
        })
    },[])

// -------------------------JSX------------------------- //

    return(
        <div className="container">
            <Provider store={Store}>

                <header>
                    <h1>Task List</h1>
                    <button className="butInp" onClick={()=>{setShowModal(true)}}>+</button>
                </header>

                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onHideModal={onHideModal}></TodoForm>
                </Modal>

                <List></List>

                <div id='Animation1' ref={animationContainer}></div>
            </Provider>
        </div>
    )
}

export default App;