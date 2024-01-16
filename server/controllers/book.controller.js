
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
    }



}