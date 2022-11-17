import React from "react";


const Modal = props => {
    if (!props.show) {
        return null
    }
    return(
        <div className="modal">
            <div className="modal-content">
            <div className="modal-content">
                <h4 className="modal-title">Modal Title</h4><span><img onClick={props.onClose}></img></span>
            </div>
            <div className="modal-body">
                <div className="btn-primary"></div>
                <div className="btn-primary"></div>
            </div>
            </div>
        </div>
    )
}
export default Modal