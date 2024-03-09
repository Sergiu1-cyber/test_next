"use server"

export async function OnSubmit(formData: FormData) {
  "use server"

  const formObject = {
    operatia: formData.get("operatia"),
    tipul: formData.get("tipul"),
    suma: formData.get("suma")
  }

  console.log(
    `form data is: \n
      ${JSON.stringify(formObject)}`
  )
}


