import {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
//import Cart from '../Cart/Cart';
const HeaderCartButton = (props) => {
    const CartCtx=useContext(CartContext);
    const numberOfCartContext=CartCtx.item.reduce((curNumber,items)=>{
        return curNumber+ items.amount;
    },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartContext}</span>
    </button>
  );
};

export default HeaderCartButton;