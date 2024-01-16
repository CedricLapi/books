
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
},

author: {
    type: String,
    required: [true, "Author is required"],
    minlength: [3, "Author must be at least 3 characters long"]
},

pages: {
    type: Number,
    required: [true, "Pages is required"],
    min: [10, "Pages must be at least 1 page long"]
},

publishYear: {
    type: Number,
    required: [true, "Publish Year is required"],
    min: [1800, "Publish Year must be at least 1800"]
},

genre: {
    type: String,
    required: [true, "Genre is required"],
}



},    
    { timestamps: true });

const Book = mongoose.model('Book', BookSchema)
module.exports = Book