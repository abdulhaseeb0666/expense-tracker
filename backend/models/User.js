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
        enum: ["local", "google"],
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

    otp: String,
    
    otpExpires: Date,
    
    isVerified: {
        type: Boolean,
        default: false
    },

    currency: {
        type: String,
        default: "USD"
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