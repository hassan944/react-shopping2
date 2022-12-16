import { useReducer } from "react";


let initialState = {count: 0}
 
function reducer(state,action){
    switch(action.type){
        case "add":
        return {count:state.count + 1};
        case "remove":
            return{count:state.count - 1};
    }
}
export function ShoppingCart(){

    
    const[state, dispatch]= useReducer(reducer,initialState);

function AddClick(){
    dispatch({type:"add"});
}
function RemoveClick(){ 
    
dispatch({type:"remove"});
}

    return(
        <div>
            <h3><span className="bi bi-cart4"></span>Your Cart[{state.count}] </h3>
        <button onClick={AddClick}>add</button>
        <button onClick={RemoveClick}>Remove</button>
        </div>

    )
}