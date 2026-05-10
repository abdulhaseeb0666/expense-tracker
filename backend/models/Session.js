// models/Session.js

import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    refreshToken: {
        type: String,
        required: true
    },

    userAgent: {
        type: String
    },

    ipAddress: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    },

    expiresAt: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

const Session = mongoose.model( 'Session', sessionSchema );

export default Session;