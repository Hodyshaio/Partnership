const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    // statusID: { type: Schema.Types.ObjectId, ref: 'Status' },
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Status' },
    descriptionStatus: { type: Boolean, default: false } //  require: [true, 'description status required!']    // <-------- it's right
});

module.exports = mongoose.model('Status', statusSchema);