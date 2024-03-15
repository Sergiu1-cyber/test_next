import mongoose, { Schema } from "mongoose";

const operatiiSchema = new Schema({
    tipul: {
        type: String,
        required: [true, "bifeaza tipul"]
    },

    denumirea: {
        type: String, 
        required: [true, "Introdu numele"],
        trim: true
    }
})

const Operatii = mongoose.models.Operatii || mongoose.model("Operatii", operatiiSchema)

export default Operatii;

