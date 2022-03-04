import React,{Fragment} from "react";
import mealsImage from '../../assests/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton/>
        </header>
        <div  className={classes['main-image']}><img src = {mealsImage} alt='A table of delicious Food'/></div>
    </Fragment>
    

}
export default Header;