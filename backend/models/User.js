// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    provider: {
        type: String,
        default: "local"
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: false,
        minlength: 6
    },

    avatar: {
        type: String,
        default: "default.png"
    },

    currency: {
        type: String,
        default: "PKR"
    },

    isVerified: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;