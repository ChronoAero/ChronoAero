import React from "react";

export const UnderConstruction = () => {
    return <div className="grid place-items-center">
        <div className="grid place-content-center">
            <img className="text-subcontrast h-40 p-6 pixel" src="./view/public/construction.png" alt="Construction Image"/>
        </div>
        <div className="text-subcontrast font-mono">This section is under development... I'll make it available soon</div>
    </div>
}