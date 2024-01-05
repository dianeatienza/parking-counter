import React from "react";
import * as images from './images';

export default function ParkingSlot() {

    const getRandomCar = () => {
        return Math.floor(Math.random() * (20)) + 1;
    } 
    const randomCarNumber = getRandomCar();
    return(
        <>
            <div className="car-slot">
                <div><img src={images[`image${randomCarNumber}`]} alt={`Car ${randomCarNumber}`} className="car-image"/></div>
                <div className="plate-number"></div>
            </div>
        </>
    )
}