import CartContext from "./cart-context";
import { useReducer } from "react/cjs/react.production.min";
const defaultCartState={
    item:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.item.concat(action.item);
        const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;
        return (
            {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        )
    }
return defaultCartState
}
const CartProvider=props=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addItemChangeHandler=item=>{
        dispatchCartAction({type:'ADD' ,item:item})

    }
    const removeItemChangeHandler=id=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const cartContext={
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemChangeHandler,
        removeItem: removeItemChangeHandler 
    }
    return (
        <CartContext.Provider value={cartContext}>
         {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;