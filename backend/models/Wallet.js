// models/Wallet.js

import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    balance: {
        type: Number,
        default: 0
    },

    type: {
        type: String,
        enum: ['cash', 'bank', 'mobile_wallet'],
        default: 'cash'
    },

    color: {
        type: String,
        default: '#000000'
    }
},
{
    timestamps: true
});

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;