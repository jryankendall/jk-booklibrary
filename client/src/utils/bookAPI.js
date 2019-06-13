import axios from 'axios';
require("dotenv").config();

var API_KEY = process.env.REACT_APP_API_KEY;


export default {
    get: {
        all: () => {
            return axios.get("/api/books");
        },
        byId: (id) => {
            return axios.get("/api/books" + id);
        },
        byTitle: (bookObject) => {
            return axios.get("/api/books/title", bookObject);
        }
    },
    add: {
        one: (book) => {
            return axios.post("/api/books", book);
        }
    },

    google: {
        one: (bookObject) => {
            let searchTerm = bookObject.data.title.replace(/ /g, "+");
            return axios.get(`volumes?q=${searchTerm}&key=${API_KEY}`, {
                baseURL: "https://www.googleapis.com/books/v1/"
            })
        }
    }
}