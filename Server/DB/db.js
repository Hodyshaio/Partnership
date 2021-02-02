const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Partnership_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connection.....!');
});

// const articlesRoutes = require('../../API/Routes/articles');
const questionsRoutes = require('../../API/Routes/questions');
const usersRoutes = require('../../API/Routes/users');
const categoriesRoutes = require('../../API/Routes/category');

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//http://localhost:3000
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes
// app.use('/articles', articlesRoutes); // DELETE
app.use('/questions', questionsRoutes);
app.use('/users', usersRoutes);
app.use('/category', categoriesRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;