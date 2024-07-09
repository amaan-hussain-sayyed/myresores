let { Schema, model } = require("mongoose")

let WorksDetailsSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },  
    Date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
    },
    Rate: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
    },
    Amount: {
        type: Number
    },
    workerId: [{
        type: Schema.Types.ObjectId,
        ref: "Workers"
    }],
    peopleId: {
        type: Schema.Types.ObjectId,
        ref: "Peoples"
    },
    isBilled: {
        type: Boolean,
        default: false
    },
    ispaid: {
        type: Boolean,
        default: false
    },
    QoutedOn: {
        type: Date
    },
   QoutaionId: {
       type: Schema.Types.ObjectId
    },
    ClientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    }
})