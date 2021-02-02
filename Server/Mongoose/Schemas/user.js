const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    userName: {type: String},
    password: { type: String },
    email: { type: String },
    status: {      // agent or interested
        type: Boolean, default: false
    },
    categoryList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    profilePicture: { type: String },
    contactsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacts' }]
});

module.exports = mongoose.model('User', userSchema);