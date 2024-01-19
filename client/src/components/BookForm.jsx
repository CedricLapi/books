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

    const changeHandler = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/books', book)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Create a book</h1>
        <form className='md-col-4 offset-4' onSubmit={submitHandler}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input type="text" className='form-control' id='title' name="title" onChange={changeHandler} />
            </div>

            <div className="mb-3">
            <label htmlFor="author" className="form-label">Author:</label>
            <input type="text" className='form-control' id='author' name="author" onChange={changeHandler} />
            </div>

            <div className="mb-3">
            <label htmlFor="pages" className="form-label">Pages:</label>
            <input type="number" className='form-control' id='pages' name="pages" onChange={changeHandler} />
            </div>

            <div className="mb-3">
            <label htmlFor="publishYear" className="form-label">PublishYear:</label>
            <input type="number" className='form-control' id='publishYear' name="publishYear" onChange={changeHandler} />
            </div>

            <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre:</label>
            <input type="text" className='form-control' id='genre' name="genre" onChange={changeHandler} />
            </div>

            <button type="submit" className='btn btn-primary'>Create a Book</button>

        </form>
    </div>
  )
}

export default BookForm