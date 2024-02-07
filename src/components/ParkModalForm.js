import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


export default function ParkModalForm({showModal, onclose, onSubmit}){

    const [plateNumber, setPlateNumber] = useState('');
    const [slotNumber, setSlotNumber] = useState('');
    

    const closeForm = () => {
        setPlateNumber('');
        setSlotNumber('');

        onclose();
    }


    useEffect(() => {

    }, []);

    return(
        <>
            <Modal show={showModal} onHide={closeForm}>
                <Form onSubmit={e => onSubmit(e, plateNumber, slotNumber)}>
                    <Modal.Header>
                        <Modal.Title>Car and Slot Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Car Plate Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={plateNumber}
                                onChange={e => setPlateNumber(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Slot Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={slotNumber}
                                onChange={e => setSlotNumber(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" size="sm" onClick={closeForm}>Close</Button>
                        <Button variant="success" type="submit">OK</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}