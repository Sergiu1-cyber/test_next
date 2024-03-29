"use client"

import { InputOperatii } from "@/actions/InputOperatii";
import { useRef } from "react";

export default function OperationForm() {

const ref = useRef<HTMLFormElement>(null)

    return (
        <form className="flex flex-col"
            ref={ref} 
            action={async (formData) => {
            await InputOperatii(formData)
            ref.current?.reset()
        }}>
        <div className="flex">
            <div className="flex flex-col mb-2 mr-4">
                <label htmlFor="cistig">Cistig</label>
                <input type="radio" id="cistig" name="tipul" value="cistig" />
            </div>
            <div className="flex flex-col mb-2">
                <label htmlFor="cheltui">Cheltui</label>
                <input type="radio" id="cheltui" name="tipul" value="cheltui" />
            </div>
        </div>
            <label htmlFor="operatia">Operatia</label>
            <input type="text" name="operatia" id="operatia" placeholder="operatia" className="border-2 border-solid border-black mb-2" />
            <input type="submit" value="salvez" className="bg-blue-500" />
        </form>
    );
}


