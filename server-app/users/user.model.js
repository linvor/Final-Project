const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    description: { type: String, required: true },
    position: { type: String, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    companies: [
        {
        companyName: String,
    }
]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);