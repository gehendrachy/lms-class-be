import express from "express";
import { createNewBook, getAllBooks } from "../models/book/bookModel.js";



const router = express.Router();

// singup
//create new book
router.post("/", async (req, res, next) => {
  try {
    const book = await createNewBook(req.body);

    book?._id
      ? res.json({
          status: "success",
          message: "Book created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create a book, try again later",
        });
  } catch (error) {
    next(error);
  }
});

// get book detail
router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();

    res.json({
      status: "success",
      message: "Book Details",
      book: books,
    });
    
  } catch (error) {
    const errObj = {
        status: "error",
        message: "Error",
        error: {
          code: 500,
          details: error.message || "Error fetching book details",
        },
      };
  
    res.json(errObj);
  }
});

export default router;
