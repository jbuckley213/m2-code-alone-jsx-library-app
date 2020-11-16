const express = require("express");
const Book = require("../models/Book.model");
const Author = require("../models/Author.model")
const booksRouter = express.Router()


booksRouter.get("/", function(req, res, next) {

   Book.find().then((allBooksFromDB)=>{

        const props = {books: allBooksFromDB }
        res.render("Books", props)
   }).catch((err)=>{
       console.log(err)
   })
})

booksRouter.get("/add", function(req, res, next){
    res.render("AddBook")
})

booksRouter.post("/add", (req, res, next) =>{
    console.log(req.body)
    const {title, author, description, rating} = req.body;

    Book.create({title, author, description, rating}).then((book)=>{
        res.redirect("/books")
    }).catch((err) => {
        console.log(err)
    })

})

booksRouter.get("/edit", (req, res, next)=>{
    const {bookid} = req.query;

    Book.findOne({_id:bookid}).then((oneBook)=>{
        const props = {oneBook: oneBook};
        res.render("EditBook", props)
    }).catch((err)=>{
        console.log(err)
    })
    
})
    

booksRouter.post("/edit", (req, res, next) =>{
    const { bookid } = req.query;
    console.log("book id query",req.query)
    const {title, author, description, rating} = req.body
    console.log("input from form", req.body)
    Book.findByIdAndUpdate(bookid, {
        title, author, description, rating},{new:true}).then((updatedBook)=>{
            console.log("Book document after the update", updatedBook);
            res.redirect("/books")
        }).catch((error)=>{
            console.log(error)
        })
})



booksRouter.get("/details/:bookId", (req, res, next) => {
    const { bookId } = req.params;
    console.log(bookId)
    Book.findById(bookId)
      .populate("authors") 
      .then((oneBook) => {
        const props = { oneBook: oneBook };
  
        res.render("BookDetails", props);
      })
      .catch((err) => console.log("Error retrieving book details: ", err));
  });


module.exports = booksRouter;