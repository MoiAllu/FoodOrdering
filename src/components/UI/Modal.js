
import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop= props=>{
    return<div className={classes.backdrop}></div>
}
const Overlay=props=>{
    return<div>
        <div className={classes.modal}></div>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays');
const Modal = props=>{
    <Fragment>
        {ReactDOM.createPortal(<Backdrop></Backdrop>,portalElement)};
        {ReactDOM.createPortal(<Overlay/>,portalElement)};
    </Fragment>

}
export default Modal;