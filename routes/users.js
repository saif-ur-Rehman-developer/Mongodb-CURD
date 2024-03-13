const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Firstdb')

const newArticle =new mongoose.Schema({
    Title: String,
    Discription: String,
    Author: String 
})

module.exports = mongoose.model("Articles",newArticle)