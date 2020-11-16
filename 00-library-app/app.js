require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser")

const booksRouter = require("./routes/booksRouter")
const authorsRouter = require("./routes/authorsRouter")
const reviewRouter = require("./routes/reviewsRouter")

const app = express();



const mongoose = require("mongoose");
const erv = require("express-react-views")

const DB_NAME = "library"

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then((x)=>{
    console.log(`Connect to DB: "${x.connections[0].name}"`)
}).catch((err) => {
    console.error("Error connecting to mongo", err)
})


// View engine setup

app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", erv.createEngine())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/books", booksRouter)
app.use("/authors", authorsRouter)
app.use("/review", reviewRouter)

app.get("/", (req, res, next)=>{
    res.render("Home")
})

module.exports = app;
