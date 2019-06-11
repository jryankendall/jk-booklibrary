const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: String,
    added: { type: Date, default: Date.now },
    link: String,
    image: String,
    isbn: { type: String, require: true }
});

const Book = mongoose.model("Book", bookSchema, "googlebooks");

module.exports = Book;
