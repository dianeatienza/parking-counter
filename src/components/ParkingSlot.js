import React, { useEffect, useState } from "react";
import * as images from './images';



export default function ParkingSlot({ slotData, plateNumber }) {

    const [slotIsAvailable, setSlotIsAvailable] = useState(slotData.isAvailable);
    

    useEffect(() => {
            setSlotIsAvailable(slotData.isAvailable);
    }, [slotData]);
    
    const randomCarNumber = Math.floor(Math.random() * (20)) + 1;

    return(
        <>  
            {slotIsAvailable ? (
                <div className="car-slot">
                    <div className="plate-number"></div>
                    <div className="slot-number">{slotData.slotNumber}</div>
                </div>
            ) : (
                <div className="car-slot">
                    <div><img src={images[`image${randomCarNumber}`]} alt={`Car ${randomCarNumber}`} className="car-image"/></div>
                    <div className="plate-number">{plateNumber}</div>
                    <div className="slot-number">{slotData.slotNumber}</div>
                </div>
           )}
  
        </>
    )
}