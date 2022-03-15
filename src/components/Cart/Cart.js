import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
import { useState } from 'react';

const Cart = (props) => {
  const [isCheckout,setIsCheckout]=useState(false);
  const cartCtx=useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem=cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const cartOrderItemHandler=userdata=>{
    fetch('https://react-custom-a7155-default-rtdb.firebaseio.com/orders.json',{
      method:'post',
      body: JSON.stringify({
        user : userdata,
        orderedItems: cartCtx.items
      })
    })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
      ))}
    </ul>
  );
        const checkoutHandler=()=>{
          setIsCheckout(true);
        }
        const modalAction=()=>{
          return(
          <div className={classes.actions}>
        <button className={classes['button--alt'] } onClick={props.onClose}>Close</button>
        {hasItem && <button className={classes.button} onClick={checkoutHandler}>Order</button>}
      </div>
        );
      }
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <CheckOut onConfirm={cartOrderItemHandler} onCancel={props.onClose}/>}
      {!isCheckout&& modalAction()}
      
    </Modal>
  );
};

export default Cart;