import classes from'./CheckOut.module.css';
const CheckOut=(porps)=>{
    return(
    <form>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input id='name' type='text'></input>
        </div >
        <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input id='address' type='text'></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='postCode'>Postal Code</label>
            <input id='postCode' type='text'></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input id='city' type='text'></input>
        </div>
        <button type='button' onClick={porps.onCancel}>Cancel</button>
        <button>Confirm</button>
    </form>
    );
}
export default CheckOut;