import React, { useEffect, useState } from "react";
import * as images from './images';



export default function ParkingSlot({ slotData }) {

    const [slotIsAvailable, setSlotIsAvailable] = useState(slotData.isAvailable);
    
    // const randomCarNumber = Math.floor(Math.random() * (20)) + 1;

    return(

        <>
                <div className="car-slot">
                    {!slotData.isAvailable && <div><img src={images[`image${slotData.randomCarNumber}`]} alt={`Car ${slotData.randomCarNumber}`} className="car-image"/></div>}
                    <div className="plate-number">{slotData.plateNumber}</div>
                    <div className="slot-number">{slotData.slotNumber}</div>
                </div>
        </>
    )
}