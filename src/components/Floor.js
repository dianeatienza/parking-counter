import ParkingSlot from "./ParkingSlot";
import { Button } from "react-bootstrap";
import ParkModalForm from "./ParkModalForm";
import React, { useEffect, useState } from "react";
import parkingSlots from "../parkingSlots.json";
import ErrorModal from "./ErrorModal";

export default function Floor() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [slotAvailability, setSlotAvailability] = useState(new Array(27).fill(true));
    const [parkedCars, setParkedCars] = useState(parkingSlots);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleCloseErrorModal = () => {
        console.log("handle close error modal is working!!");
        setShowErrorModal(false);
        setErrorMessage("");
    };


    const handleFormSubmit = (e, plateNumber, slotNumber) => {
        console.log('HandleFormSubmit is Working!!! :)');
        e.preventDefault();

        // Validate plate number
        if (plateNumber.length === 0 || plateNumber.length > 7) {
            console.log("there must be an error!");
            setErrorMessage("Invalid Plate Number");
            setShowErrorModal(true);
            return;
        }

        // Find the slot in the parkingSlots array
        const slotData = parkedCars.find(slot => (slot.slotNumber === slotNumber && slot.isAvailable));

        const newParkedCar = parkedCars.map(slot => {
            const randomCarNumber = Math.floor(Math.random() * (20)) + 1;
            if(slot.slotNumber === slotNumber && slot.isAvailable) {
                slot.isAvailable = false;
                slot.plateNumber = plateNumber;
                slot.randomCarNumber = randomCarNumber;
            }
            return slot;
        });
        console.log(newParkedCar, newParkedCar)

        // Validate slot number
        if (!slotData) {
            setErrorMessage("OOPS! The slot is either invalid ir occupied.");
            setShowErrorModal(true);
            return;
        }

        setParkedCars(newParkedCar);
        closeModal();

    };

    


    useEffect(()=> {
        console.log(parkedCars);
    }, [parkedCars]);

   
    return (
        <>
            <h1 className="fw-bold parking-counter">Parking Counter</h1>
            <section className="car-floor d-flex">
                {parkedCars && parkedCars.map((slot) => (
                    <ParkingSlot key={slot.slotNumber} slotData={slot} />
                ))}
            </section>
            <Button className="add-new-car btn-warning fw-bold" onClick={showModal}>
                PARK A CAR
            </Button>

            {/* To render ParkModalForm only when modal is visible */}
            {isModalVisible && <ParkModalForm showModal={isModalVisible} onclose={closeModal} onSubmit={handleFormSubmit} />}

            {/* // Render the error modal component conditionally based on showErrorModal state */}
             {showErrorModal && <ErrorModal show={true} errorMessage={errorMessage} onClose={() => setShowErrorModal(false)} />}
        </>
    );
}
