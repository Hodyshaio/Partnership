const mongoose = require('mongoose');
const Category = require('../../../Server/Mongoose/Schemas/category');

module.exports = {
    getAllCategories: (req, res) => {
        category.find().then((categories)=>{
            res.status(200).json({
                categories
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
    },
    createCategory: (req, res) => {
        const { categoryName } = req.body;
        const category = new Category({
            categoryName
        });
        category.save().then(() => {
            res.status(200).json({
                message: 'Create a new category'
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
        console.log('(create category - server)');
    },
    updateCategory: (req, res) => {
        const categoryID = req.params.categoryID

        res.status(200).json({
            message: `Update category - ${categoryID}`
        })
    },
    deleteCategory: (req, res) => {
        const categoryID = req.params.categoryID

        res.status(200).json({
            message: `Delete category - ${categoryID}`
        })
    }
}