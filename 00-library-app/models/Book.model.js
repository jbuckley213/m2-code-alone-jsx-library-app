const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema(
    {
        title: String,
        description: String,
        rating: Number,
        author:String,
        authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
      },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    }
)

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;