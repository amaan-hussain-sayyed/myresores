let { Schema, model } = require("mongoose")

let PurchaseCategorySchema = new Schema({
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

let PurchaseCategory = model('PurchaseCategory', PurchaseCategorySchema)