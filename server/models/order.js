const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    items: [
        {
            name: { type: String, required: true },            
            price: { type: Number, required: true },
            product: {
                type: String,
                required: true
            }
            // product: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     required: true,
            //     ref: "Product"
            // }
        }
    ],
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
}, {timestamps: true})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;