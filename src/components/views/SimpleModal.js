import {Modal,Button} from 'react-bootstrap';
import React from "react";

function SimpleModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="qp-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {props.hasOwnProperty(`secondaryText`) &&
                <button className="general-btn grey-btn" onClick={props.onHide}>{props.secondaryText}</button>
                }
                {props.hasOwnProperty(`primaryText`) &&
                <button className="general-btn" onClick={props.primaryAction}>{props.primaryText}</button>
                }
            </Modal.Footer>
        </Modal>
    );
}

export default SimpleModal
