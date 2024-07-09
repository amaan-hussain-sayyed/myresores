let { Schema, model } = require("mongoose")

let ProductSchema = new Schema({
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
    withMaterial: {
        type: Object
    },
    withOutMaterials: [{
        type:Object
    }],
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})

let Product = model("Product", ProductSchema)