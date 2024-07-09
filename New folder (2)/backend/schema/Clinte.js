let { Schema, model} = require("mongoose");

let ClientSchema = new Schema({
    id: {
        type :Schema.Types.ObjectId,
    },
    type:{
        type: String,
        enum: ["Individual", "Company"],
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        required: true, 
    },
    peoples:[{
        type: Schema.Types.ObjectId,
        ref: "Peoples"
    }],
    Qutaions:[{
        type: Schema.Types.ObjectId,
        ref: "Quotation"
    }],
    QoutaionsNo: [{
        type: String,
        ref: "Quotation"
    }]
});

let Client = model("Client", ClientSchema);

export default Client

