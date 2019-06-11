const db = require("../models");

module.exports = {
    get: { 
        all: (req, res) => {
            console.log(req);
            
            db.Book
                .find({}, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(422).json(err);
                    }
                    
                    console.log(result);
                    res.status(200).json(result);
            })
        },
        byId: (req, res) => {
            console.log(req);
            
            db.Book
                .findById(req.params.id, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(422).json(err);
                    }
                    
                    console.log(result);
                    res.status(200).json(result);
                })
        },
        byTitle: (req, res) => {
            let bookTitle = req.body.title;

            db.Book
                .find({ title: bookTitle }, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(422).json(err);
                    }

                    console.log(result);
                    res.status(200).json(result);
                })
        }
    },

    add: { 
        one: (req, res) => {
            let newBook = req.body;
            console.log(newBook);
            
            db.Book
                .create(newBook)
                .then( document => {
                    console.log(document);
                    
                    res.status(200).json(document);
                })
                .catch(err => res.status(422).json(err));
        }
    }
}