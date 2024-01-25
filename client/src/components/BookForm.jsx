import axios from 'axios'
import React, { useState } from 'react'

const BookForm = () => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        pages: '',
        publishYear: '',
        genre: ''

    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/books', book)
        .then(res => 
            {console.log(res)
                setBook({
                    title: "",
                    author: "",
                    pages: "",
                    publishYear: "",
                    genre: ""})
                })
        .catch(err => {
            //console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
}

  return (
    <div>
        <h1 className='md-col-4 offset-4'>Create a book</h1>
        <form className='md-col-4 offset-3' onSubmit={submitHandler}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input type="text" className='form-control' id='title' name="title" value={book.title} onChange={changeHandler} />
            {errors.title ? <p className="text-danger">{errors.title.message}</p> : ""}
            </div>

            <div className="mb-3">
            <label htmlFor="author" className="form-label">Author:</label>
            <input type="text" className='form-control' id='author' name="author" value={book.author} onChange={changeHandler} />
            {errors.author ? <p className="text-danger">{errors.author.message}</p> : ""}

            </div>

            <div className="mb-3">
            <label htmlFor="pages" className="form-label">Pages:</label>
            <input type="number" className='form-control' id='pages' name="pages" value={book.pages} onChange={changeHandler} />
            {errors.pages ? <p className="text-danger">{errors.pages.message}</p> : ""}

            </div>

            <div className="mb-3">
            <label htmlFor="publishYear" className="form-label">PublishYear:</label>
            <input type="number" className='form-control' id='publishYear' name="publishYear" value={book.publishYear} onChange={changeHandler} />
            {errors.publishYear ? <p className="text-danger">{errors.publishYear.message}</p> : ""}

            </div>

            <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre:</label>
            <input type="text" className='form-control' id='genre' name="genre" value={book.genre} onChange={changeHandler} />
            {errors.genre ? <p className="text-danger">{errors.genre.message}</p> : ""}

            </div>

            <button type="submit" className='btn btn-primary'>Create a Book</button>

        </form>
    </div>
  )
  }

export default BookForm;