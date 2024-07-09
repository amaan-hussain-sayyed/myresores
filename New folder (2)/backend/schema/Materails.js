let material = require("mongoose")

let MaterialSchema = new material.Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: [{
        size: {
            type: String,
        },
        PricePerFoot: {
            type: Number
        },
        weightPerFoot: {
            type: Number
        }
    }],
    materialCategoryId: [
        {
            type: Schema.Types.ObjectId,
            ref: "MaterialCategory"
        }
    ]

})