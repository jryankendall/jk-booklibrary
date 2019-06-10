const db = require("../models");

module.exports = {
    getAll: (req, res) => {
        console.log(req);
        
        db.Book.find({}, (err, result) => {
            if (err) console.log(err);
            
            res.json(result);
    })
    },

}