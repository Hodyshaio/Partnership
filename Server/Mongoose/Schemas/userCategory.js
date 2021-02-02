const mongoose = require('mongoose');

const userCategorySchema = mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('UserCategory', userCategorySchema);