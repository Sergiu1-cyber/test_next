import mongoose, { Schema } from "mongoose";

const operatieSchema = new Schema({
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

export default mongoose.models.Operatii || mongoose.model("Operatii", operatieSchema);

