const mongoose = require('mongoose');

//                    Validation = V

const imagesSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
    linkToImage: {   
        type: String
    },
    questionsID: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    descriptionImage: { type: String }
});

module.exports = mongoose.model('Image', imagesSchema);