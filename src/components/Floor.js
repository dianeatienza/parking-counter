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
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
                <ParkingSlot></ParkingSlot>
            </section>
            <Button className="add-new-car btn-warning fw-bold" onClick={showModal}>PARK A CAR</Button>

            {/* To render ParkModalForm only when modal is visible */}
            {isModalVisible && <ParkModalForm showModal={isModalVisible} onclose={closeModal} />}
        </>
    )
}
