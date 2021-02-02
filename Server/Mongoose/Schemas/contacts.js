const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contacts' }, 
    contactName: {type: String},
    email: {type: String}
});

module.exports = mongoose.model('Contacts', contactsSchema);