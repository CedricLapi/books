
const Book = require('../models/book.model');


module.exports = {

    //GET ALL BOOKS
    getAllBooks: (req, res) => {
        Book.find()
            .then((allBooks) => {
                res.json(allBooks);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    //CREATE ONE BOOK
    createBook: (req, res) => {
        Book.create(req.body)
        .then((newBook) => {
            res.json(newBook);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    //GET ONE BOOK
    getOneBook: (req, res) => {
        Book.findById(req.params.id)
        .then((oneBook) => {
            res.json(onebook);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    //UPDATE ONE BOOK
    updateBook: (req, res) => {

        const id =req.params.id;
        Book.findOneAndUpdate({ _id: id}, req.body, {
            new: true, runValidators: true})
        .then((updatedBook) => {
            res.json(updatedBook);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    //DELETE ONE BOOK
    deleteBook: (req, res) => {

        const id = req.params.id;
        Book.deleteOne({ _id: id })
        .then((deletedBook) => {
            res.json(deletedBook);
        })
        .catch((err) => {
            res.json(err);
        })
    }



}