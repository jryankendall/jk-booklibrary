import axios from 'axios';

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
    }
}