
const BookController = require('../controllers/book.controller');

module.exports = (app) => {

    //GET ALL BOOKS
    app.get('/api/books', BookController.getAllBooks);

    //GET ONE BOOK
    app.post('/api/books', BookController.createBook);

}