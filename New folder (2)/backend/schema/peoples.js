let {Schema, model}= require("mongoose")

let PeoplesSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    ClintId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    }
})


let Peoples = model("Peoples", PeoplesSchema)

