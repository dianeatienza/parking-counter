import React, { useEffect, useState } from "react";
import * as images from './images';



export default function ParkingSlot({ floor, row, slotIndex }) {

    const [slotIsAvailable, setSlotIsAvailable] = useState(true);
    

    const getRandomCar = () => {
        return Math.floor(Math.random() * (20)) + 1;
    };
    const randomCarNumber = getRandomCar();

    const generateSlotNumber = (floor, row, slotIndex) => {
        return `${floor}${String.fromCharCode(65 + row - 1)}${slotIndex + 1}`;
    }

    const slotNumber = generateSlotNumber(floor, row, slotIndex);

    useEffect(() => {
            //here the setSlotIsAvailable should be changed to false to show the car, however only if the slot of that car has been chosen by a driver/parker.
    }, []);
    
    
    return(
        <>  
            {slotIsAvailable ? (
                <div className="car-slot">
                    <div className="plate-number"></div>
                    <div className="slot-number">{slotNumber}</div>
                </div>
            ) : (
                <div className="car-slot">
                    <div><img src={images[`image${randomCarNumber}`]} alt={`Car ${randomCarNumber}`} className="car-image"/></div>
                    <div className="plate-number"></div>
                    <div className="slot-number">{slotNumber}</div>
                </div>
           )}
  
        </>
    )
}