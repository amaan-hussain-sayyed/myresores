let { mongoose, Schema } = require("mongoose")

let CosmonProdctsSchema = new Schema({
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
    },
    ClientId: {
        type: Schema.Types.ObjectId,
    }
})