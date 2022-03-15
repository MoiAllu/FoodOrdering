import { useRef,useState } from 'react';
import classes from './CheckOut.module.css';

const isEmpty=input=>input.trim()==='';

const isCharsFive=input=>input.trim().length===5;

const Checkout = (props) => {
    const nameInputRef=useRef();
    const addressInputRef=useRef();
    const postalcodeInputRef=useRef();
    const cityInputRef=useRef();
    
    const [formIsValid,setFormIsValid]=useState({
        name:true,
        address:true,
        postalcode:true,
        city:true
    });


  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredAddress=addressInputRef.current.value;
    const enteredPostalCode=postalcodeInputRef.current.value;
    const enteredCity=cityInputRef.current.value;

    const enteredNameIsValid=!isEmpty(enteredName);
    const enteredAddressIsValid=!isEmpty(enteredAddress);
    const enteredCityIsValid=!isEmpty(enteredCity);
    const enteredPostalCodeIsValid=isCharsFive(enteredPostalCode);

    setFormIsValid({
        name:enteredNameIsValid,
        address:enteredAddressIsValid,
        postalcode:enteredPostalCodeIsValid,
        city:enteredCityIsValid
    })
    props.onConfirm({
        name: enteredName,
        address: enteredAddress,
        postalcode: enteredPostalCode,
        city:enteredCity
    })
  };
  const nameControlClasses=`${classes.control} ${formIsValid.name ? '': classes.invalid}`;
  const addressControlClasses=`${classes.control} ${formIsValid.address ? '': classes.invalid}`;
  const postcodeControlClasses=`${classes.control} ${formIsValid.postalcode ? '': classes.invalid}`;
  const cityControlClasses=`${classes.control} ${formIsValid.city ? '': classes.invalid}`;

  return (
    <form className={nameControlClasses} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formIsValid.name && <p>Please Enter a valid name!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={addressInputRef}/>
        {!formIsValid.address && <p>Please Enter a valid address!</p>}
      </div>
      <div className={postcodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalcodeInputRef}/>
        {!formIsValid.postalcode && <p>Please Enter a valid Postal Code(must 5-digit long)!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formIsValid.city && <p>Please Enter a valid City!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;