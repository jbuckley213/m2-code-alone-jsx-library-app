const express = require("express");
const router = express.Router();
const Book = require("./../models/Book.model")
const Author = require("./../models/Author.model")

router.post("/add", (req, res, next)=>{
    const { bookid }= req.query;

    const {name, lastName, nationality, birthday, pictureUrl } = req.body;

    Author.create({name, lastName, nationality, birthday, pictureUrl}).then((createdAuthor) =>{

        const pr = Book.findByIdAndUpdate
    })
})