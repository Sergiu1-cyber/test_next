"use client"

import { useRef } from "react";
import { OnSubmit } from "@/actions/InputForm"; 

export default function Form() {

const ref = useRef<HTMLFormElement>(null)

  return (
    <form ref={ref} id="form_1" className="border-2 border-solid border-blue-500 p-5" action={async (formData) => {
      await OnSubmit(formData)
      ref.current?.reset()
    }}>
      <div className="flex flex-col">
        <h3>Salvez Operatiile</h3>
        <div className="flex">
          <div className="flex flex-col mb-2 mr-4">
            <label htmlFor="cistig">Cistig</label>
            <input type="radio" id="cistig" name="operatia" value="cistig" />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="cheltui">Cheltui</label>
            <input type="radio" id="cheltui" name="operatia" value="cheltui" />
          </div>
        </div>
      <label htmlFor="tipul">Tipul</label>
      <select name="tipul" id="tipul" form="form_1" className="mb-2">
        <option >operatia</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label htmlFor="suma">Suma</label>
      <input type="number" id="suma" name="suma" placeholder="suma" className="border-2 border-solid border-black mb-2"/>
      <input type="submit" value="incarc" className="bg-blue-500" />
      </div>
    </form>
  )
}
