let { Schema, model } = require("mongoose")

let ExpencesCateroySchema = new Schema({
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
    }
    
})