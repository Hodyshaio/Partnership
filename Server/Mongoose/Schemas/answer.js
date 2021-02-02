const mongoose = require('mongoose');

const answersSchema = mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    questionsID: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    publicationAnswerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    answerNum: { type: Number }, 
    datePublicationAnswer: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answer', answersSchema);