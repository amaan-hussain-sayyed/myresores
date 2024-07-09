
let {Schema, model} = require("mongoose")
const { Client } = require("socket.io/dist/client")

let QuotationSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    QoutaionNo: {
        type: String,
        required: true
    },
   ClientId: {
       type: Schema.Types.ObjectId,
       ref: "Client"
    },
    Date: {
        type: Date,
        required: true
    },
    trasportaionCahged: {
        VehiaNo: {
            type: String,
        },
        description: {
            type: String
        },
        Amount: {
            type: Number
        }
    },
    item: [{
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
    }
    ],
    OthersCharges: [
        {
            description: {
                type: String,
            },
            Amount: {
                type: Number
            }
        }
    ],
    gst: {
        type: Number
    },
    TotalAmount: {
        type: Number
    },
    Status: {
        type: String,
        default: "Pending",
        enum: ["Not Paid Yet", "Upto25%", "Upto50%", "Upto75%", "paid",],
    },
    stage: {
        type: String,
        default: "draft",
        enum: ["draft", "sent"]
    },
    payments: [{
        Date: {
        type: Date
        },
        Amount: {
            type: Number
        },
        Method: {
            Type: String,
            default: "Cash",
            enum: ["Cash", "Cheque", "Bank Transfer", "Others"]
        },
        massage: {
            type: String
        },
        givenById: {
            type: Schema.Types.ObjectId,
            ref: "Peoples"
        },
        recevidebyId: {
            type: Schema.Types.ObjectId,
            ref: "Peoples"
        }
    }],
    Balances: {
        type: Number
    }

    
})