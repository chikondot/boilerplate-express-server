// mongoose package
const mongoose = require('mongoose');

// show use of embedded schema
const userSchema = new mongoose.Schema({
    username: String,
    authenticated: Boolean,
}, {
    versionKey: false // remove __v tag in document.
});

const roomSchema = new mongoose.Schema({
    roomID: Number,
    roomPassword: String,
    roomHash: String,
    roomRequested: Number,
    roomAuthenticated: Number,
    roomMembers: [userSchema]
}, {
    timestamps: true,
    versionKey: false // remove __v tag in document.
});

// EXPORT
module.exports = mongoose.model('Room', roomSchema);