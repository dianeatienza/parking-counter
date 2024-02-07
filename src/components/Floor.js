import ParkingSlot from "./ParkingSlot";
import { Button } from "react-bootstrap";
import ParkModalForm from "./ParkModalForm";
import React, { useEffect, useState } from "react";
import parkingSlots from "../parkingSlots.json";
import ErrorModal from "./ErrorModal";

export default function Floor() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [slotAvailability, setSlotAvailability] = useState(new Array(27).fill(true));
    const [parkedCars, setParkedCars] = useState([]);
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

    // const handleFormSubmit = (e, plateNumber, slotNumber) => {
    //     console.log(plateNumber, slotNumber);
    //     setParkedCars([...parkedCars, {slotNumber, plateNumber}]);
    //     e.preventDefault();
    // }

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
        const slotData = parkingSlots.find(slot => slot.slotNumber === slotNumber);

        // Validate slot number
        if (!slotData) {
            setErrorMessage("Please input a valid slot number.");
            setShowErrorModal(true);
            return;
        }

        // Check if the slot is already occupied
        if (!slotAvailability[parkingSlots.indexOf(slotData)]) {
            setErrorMessage("Sorry, the slot is already occupied. Please choose a different one.");
            setShowErrorModal(true);
            return;
        } else {
            // Slot number is valid and available, proceed to park the car
            const randomCarNumber = Math.floor(Math.random() * (20)) + 1;
            setParkedCars([...parkedCars, { slotNumber, plateNumber, randomCarNumber }]);
            const updatedSlotAvailability = [...slotAvailability];
            updatedSlotAvailability[parkingSlots.indexOf(slotData)] = false;
            setSlotAvailability(updatedSlotAvailability);
        };
    };

    


    useEffect(()=> {
        console.log(parkedCars);
    }, [parkedCars]);

   
    return (
        <>
            <h1 className="fw-bold parking-counter">Parking Counter</h1>
            <section className="car-floor d-flex">
                {parkingSlots.map((slot) => (
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
