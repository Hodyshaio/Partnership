const mongoose = require('mongoose');
const User = require('../../../Server/Mongoose/Schemas/user');

module.exports = {
    getAllUsers: (req, res) => {
        User.find().then((users)=>{
            res.status(200).json({
                users
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
    },
    createUser: (req, res) => {
        const { userName, password,email,status,categoryList,
            profilePicture,contactsList } = req.body;
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            userName,
            password,
            email,
            status,
            categoryList,
            profilePicture,
            contactsList
        });
        user.save().then(() => {
            res.status(200).json({
                message: 'Create a new User'
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
        console.log('(create user - server)');
    },
    updateUser: (req, res) => {
        const UserID = req.params.UserID

        res.status(200).json({
            message: `Update User - ${UserID}`
        })
    },
    deleteUser: (req, res) => {
        const UserID = req.params.UserID

        res.status(200).json({
            message: `Delete User - ${UserID}`
        })
    }
}