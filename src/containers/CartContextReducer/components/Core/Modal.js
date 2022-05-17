import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css"

const Backdrop = props => { 
  return <div className={classes.backdrop} aria-hidden="true" onClick={props.onClose}></div>
}; 

const ModalOverlay = props => { 
  return <div className={classes.modal}>
    <div className={classes.content}>{ props.children }</div>
  </div>;
};

const Modal = (props) => {

  const portalElement = document.getElementById("overlays");
  
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement 
      )}
    </Fragment>
  );

}

export default Modal;