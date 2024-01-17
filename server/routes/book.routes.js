
const BookController = require('../controllers/book.controller');

module.exports = (app) => {

    //GET ALL BOOKS
    app.get('/api/books', BookController.getAllBooks);

    //CREATE A BOOK
    app.post('/api/books', BookController.createBook);

    //GET A BOOK
    app.get('/api/books/:id', BookController.getOneBook);

    //UPDATE A BOOK
    app.put('/api/books/:id', BookController.updateBook);

    //DELETE A BOOK
    app.delete('api/books/:id', BookController.deleteBook);

    


}