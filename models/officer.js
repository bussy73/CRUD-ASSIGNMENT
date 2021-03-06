const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

const Officer = mongoose.model('officer', officerSchema);

module.exports = Officer;