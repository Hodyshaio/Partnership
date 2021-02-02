const mongoose = require('mongoose');

const lotteryProductsSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'LotteryProducts' },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    descriptionProduct: {type: String},
    imageID: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
    linkToImage: {   // <-------- it's right for image from laptop ?
        type: String}
});

module.exports = mongoose.model('LotteryProducts', lotteryProductsSchema);

//Lottery product 