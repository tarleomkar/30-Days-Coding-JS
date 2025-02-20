const express = require('express');
const app = express();

let books = [
    {id: 1, title: 'Book 1', author: 'Author 1'},
    {id: 2, title: 'Book 2', author: 'Author 2'}
];


app.use(express.json());

// read
const getBooks = (req, res) => {
    res.json(books)
};

// get book by id
const getBookById = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if(book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' })
    }
};

// create
const createBooks = (req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
}

// update
const updateBooks = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);

    if(index !== -1) {
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else {
        res.status(404).json({error: 'no books find'}); 
    }
}

// delete
const deleteBooks = (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if(index !== -1) {
        const deletedBook = books[index];
        // books.slice(index, 1);
        books.splice(index, 1);
        res.json(deletedBook);
    }
    else {
        res.status(404).json({error: 'no books find'});
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBooks,
    updateBooks,
    deleteBooks
}