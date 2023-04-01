import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Backdroup = ({ closeModal, showModal }) => {
    return <div className={`${styles.backDrop} ${showModal ? styles.showBackDrop : null}`} onClick={ closeModal }></div>;
}

const Overlay = ({children, showModal }) => {
    return (
        <div className={`${styles.ouverlay} ${showModal ? styles.showOuverlay : null}`}>
            {children}
        </div>
    );
}

const Modal = ( {children, show, close } ) => {
  return (
    <Fragment>
        {
            ReactDOM.createPortal(
                <Fragment>
                    <Backdroup closeModal={close} showModal={show} />
                    <Overlay showModal={show} >
                        {children}
                    </Overlay>
                </Fragment>,
                document.getElementById("modal")
            )
        }
    </Fragment>
  )
}

export default Modal