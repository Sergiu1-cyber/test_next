
export default function OperationForm() {
    return (
        <form className="flex flex-col" action="">
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
            <label htmlFor="operatia">Operatia</label>
            <input type="text" name="operatia" id="operatia" placeholder="operatia" className="border-2 border-solid border-black mb-2" />
            <input type="submit" value="salvez" className="bg-blue-500" />
        </form>
    );
}
