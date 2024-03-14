"use client"

import { useState } from "react";
import Meniu from "./Meniu";

export default function NavigationBarr() {

    const [showMeniu, setShowMeniu] = useState(false)

    function TogleMeniu() {
        setShowMeniu(!showMeniu)
    }

    return (
        <div className="bg-green-400">
            <h3
                onClick={TogleMeniu}
            >Navigation</h3>
            <div className={showMeniu ? 'block' : 'hidden'}>
                <Meniu />
            </div>
            
        </div>
    );
}

