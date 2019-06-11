const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//This route called on "/api/books/"
router.route("/")
    .get(booksController.get.all)
    .post(booksController.add.one);

router.route("/:id")
    .get(booksController.get.byId);

router.route("/title")
    .get(booksController.get.byTitle);

module.exports = router;