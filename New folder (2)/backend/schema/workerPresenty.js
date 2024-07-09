
let { Schema, model } = require("mongoose")

let WorkerPresentySchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    data: {
        type: Date
    },
    workerId: {
        type: Schema.Types.ObjectId,
    },
    isPresent: {
        type: Boolean
    },
    isgivenAmount: [
        {
            type: {
                type: Schema.Types.ObjectId,
                ref:"ExpenseCategory"
            }
        }
    ],
    Salary: {
        type: Boolean
    },


})