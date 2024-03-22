"use server"

export async function InputOperatii(formData: FormData) {

    const operatia = {
        tipul: formData.get("tipul"),
        denumirea: formData.get("operatia")
    }

//      const res = await fetch(`${process.env.URL}api/operatii`, {
      const res = await fetch(`${process.env.URL}api/operatii`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(operatia)
      });
    
      const {msg} = await res.json()

      console.log(msg)
}

