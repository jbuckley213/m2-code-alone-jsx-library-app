const express = require("express");
const reviewsRouter = express.Router();
const Book = require("./../models/Book.model")
const Author = require("./../models/Author.model")

reviewsRouter.post("/add", (req, res, next)=>{
    const { bookid }= req.query;

    const {review } = req.body;

    Book.findByIdAndUpdate(bookid, {review:review}).then((updatedBook) =>{
        res.redirect(`/books/details/${updatedBook._id}`)

    }).catch((error) => console.log(error))
})

module.exports = reviewsRouter