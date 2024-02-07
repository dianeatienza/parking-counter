import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";


export default function ErrorModal({ show, errorMessage, onClose }) {

    return (
        <Modal show={show} onHide={onClose} >
            <Modal.Header closeButton>
                <Modal.Title>Error Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="btn-secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};