const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeneficiarySchema = new Schema({
    person_registered: {
        type: Schema.Types.ObjectId, 
        ref: "Person",
        required: true,
    },
    program_enrolled: {
        type: Schema.Types.ObjectId, 
        ref: "Program",
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["", "", "", "",],
    },
    benefit_requested: { type: Boolean, required: true },
    benefit_received: { type: Boolean, required: true },
    date_received: { type: Date, required: true },
    device_used: {
        type: Schema.Types.ObjectId, 
        ref: "Device",
        required: true,
    },
});

module.exports = mongoose.model("Beneficiary", BeneficiarySchema, "beneficiaries");