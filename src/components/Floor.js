import ParkingSlot from "./ParkingSlot";
import { Button } from "react-bootstrap";
import ParkModalForm from "./ParkModalForm";
import React, { useEffect, useState } from "react";

export default function Floor() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <h1 className="fw-bold parking-counter">Parking Counter</h1>
            <section className="car-floor d-flex">
            <ParkingSlot floor={1} row={1} slotIndex={0} />
            <ParkingSlot floor={1} row={1} slotIndex={1} />
            <ParkingSlot floor={1} row={1} slotIndex={2} />
            <ParkingSlot floor={1} row={1} slotIndex={3} />
            <ParkingSlot floor={1} row={1} slotIndex={4} />
            <ParkingSlot floor={1} row={1} slotIndex={5} />
            <ParkingSlot floor={1} row={1} slotIndex={6} />
            <ParkingSlot floor={1} row={1} slotIndex={7} />
            <ParkingSlot floor={1} row={1} slotIndex={8} />
            <ParkingSlot floor={1} row={2} slotIndex={0} />
            <ParkingSlot floor={1} row={2} slotIndex={1} />
            <ParkingSlot floor={1} row={2} slotIndex={2} />
            <ParkingSlot floor={1} row={2} slotIndex={3} />
            <ParkingSlot floor={1} row={2} slotIndex={4} />
            <ParkingSlot floor={1} row={2} slotIndex={5} />
            <ParkingSlot floor={1} row={2} slotIndex={6} />
            <ParkingSlot floor={1} row={2} slotIndex={7} />
            <ParkingSlot floor={1} row={2} slotIndex={8} />
            <ParkingSlot floor={1} row={3} slotIndex={0} />
            <ParkingSlot floor={1} row={3} slotIndex={1} />
            <ParkingSlot floor={1} row={3} slotIndex={2} />
            <ParkingSlot floor={1} row={3} slotIndex={3} />
            <ParkingSlot floor={1} row={3} slotIndex={4} />
            <ParkingSlot floor={1} row={3} slotIndex={5} />
            <ParkingSlot floor={1} row={3} slotIndex={6} />
            <ParkingSlot floor={1} row={3} slotIndex={7} />
            <ParkingSlot floor={1} row={3} slotIndex={8} />
            
            </section>
            <Button className="add-new-car btn-warning fw-bold" onClick={showModal}>PARK A CAR</Button>

            {/* To render ParkModalForm only when modal is visible */}
            {isModalVisible && <ParkModalForm showModal={isModalVisible} onclose={closeModal} />}
        </>
    )
}
