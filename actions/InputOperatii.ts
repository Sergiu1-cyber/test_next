"use server"

export async function InputOperatii(formData: FormData) {

    const operatii = {
        tipul: formData.get("tipul"),
        denumirea: formData.get("operatia")
    }

    console.log(
        `form data is: \n
          ${JSON.stringify(operatii)}`
      )
    
}

