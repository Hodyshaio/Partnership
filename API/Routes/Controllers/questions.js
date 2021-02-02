const mongoose = require('mongoose');
const Question = require('../../../Server/Mongoose/Schemas/question');

module.exports = {
    getAllQuestions: (req, res) => {
        Question.find().then((questions)=>{
            res.status(200).json({
                questions
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
    },
    createQuestion: (req, res) => {
        debugger;
        const { questionText, category,
            //  imagesList,
            timer, datePublicationQuestion } = req.body;
        const question = new Question({
            _id: new mongoose.Types.ObjectId(),
            questionText,
            // imagesList,
            timer,
            category,
            datePublicationQuestion
        });
        question.save().then(() => {
            res.status(200).json({
                message: 'Create a new Question'
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
        console.log('(create question - server)');
    },
    updateQuestion: (req, res) => {
        const QuestionID = req.params.QuestionID

        res.status(200).json({
            message: `Update Question - ${QuestionID}`
        })
    },
    deleteQuestion: (req, res) => {
        const QuestionID = req.params.QuestionID

        res.status(200).json({
            message: `Delete Question - ${QuestionID}`
        })
    }
}