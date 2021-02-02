const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    // questionID: { type: Schema.Types.ObjectId, ref: 'Question' },
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    questionText: { type: String },
    imagesList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'image' }], //  require: [true, 'images list required!']
    timer: {type: Date,expires: String},
    datePublicationQuestion: {
        type: Date,
        default: new Date()
    },
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'LotteryProducts' },
    publicationQuestionID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Question', questionsSchema);