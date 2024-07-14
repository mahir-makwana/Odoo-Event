const express = require("express");
const router = express.Router();

const addBook = require("../Controller/bookController.js");
const roleMiddleware = require("../Middleware/roleMiddleware.js");
const authMiddleware = require("../Middleware/authMiddleware.js");
const LoginController = require("../Controller/authController.js");

const { getAllBooks, getBookById } = require("../Controller/bookController.js");

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.post("/login", LoginController);

module.exports = router;
