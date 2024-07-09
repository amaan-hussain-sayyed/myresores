let { Schema, model } = require('mongoose')

let MeterailsCategorySchema = new Schema({
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
    parentId: {
        type: Schema.Types.ObjectId,
    },
    MeterailsId: [{
        type: Schema.Types.ObjectId,
        ref: "Meterails"
    }]
})

let MeterailsCategory = model('MeterailsCategory', MeterailsCategorySchema)