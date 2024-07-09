let { Schema, model } = require("mongoose")

let ProductCategorySchema = new Schema({
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
    ProductId: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    ParentId: [{
        type: Schema.Types.ObjectId,
        ref: "Category",
    }]
})

let ProductCategory = model("ProductCategory", ProductCategorySchema)