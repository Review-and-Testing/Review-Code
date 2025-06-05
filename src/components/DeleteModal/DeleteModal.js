import React from 'react';
import './DeleteModal.css';
import { useEffect } from 'react';

export default function DeleteModal(props) {
    useEffect(() => {
        if (props.showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        return () => {
            document.body.style.overflow = '';
        };
    }, [props.showModal]);
    
    return (
        <div>
            <div className={props.showModal ? "modal show" : "modal"} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure you want to delete this task?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={props.handleDleteOkBtnClick}>Delete</button>
                            <button type="button" className="btn btn-secondary" onClick={props.closeDeleteModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
