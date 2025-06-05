import React from 'react';
import './Alert.css';

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.alerttype} alert-dismissible fade show`} role="alert">
            <strong>{props.alerttype}!</strong>{props.message} 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.closeAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
