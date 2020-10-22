let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//const { router } = require('../config/app');

//connect to book model
let Book = require('../models/book');

/* get book for the book list page - READ operation */
router.get('/', (req, res, next) => {
    Book.find((err, BookList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', BookList: BookList});
        }
    });
}); 

/* get ROUTE for displaying the add page - CREATE operation */

router.get('/add', (req, res, next) => {
    res.render('book/add', {title: 'Add book'})

});

/* get ROUTE for processing the add page - CREATE operation */

router.post('/add', (req, res, next) => {
    let newBook = Book ({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price,
    });

Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });
});

/* get ROUTE for displaying the edit page - UPDATE operation */

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });
});

/* post ROUTE for processing the edit page - UPDATE operation */

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price,
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });
});

/* get ROUTE for DELETION - DELETE operation */

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });

});

module.exports = router;