const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    categoryName: { type: String },
    // dadCategoryID: { type: mongoose.Schema.Types.ObjectId, ref: '' }, // ------> what write here ?
    // optional
});

module.exports = mongoose.model('Category', categoriesSchema);