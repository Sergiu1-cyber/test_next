
export default function Form() {



  return (
    <form>
      <h3>Form</h3>
      <label htmlFor="cistig">Cistig</label>
      <input type="radio" id="cistig" name="operatia" value="cistig" />
      <label htmlFor="cheltui">Cheltui</label>
      <input type="radio" id="cheltui" name="operatia" value="cheltui" />
      <label htmlFor="tipul"></label>
      <select name="" id="tipul">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label htmlFor="suma">Suma</label>
      <input type="number" id="suma" />
    </form>
  )
}
