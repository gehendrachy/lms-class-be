import BookSchema from "./bookSchema.js";

export const getAllBooks = () => {
    return BookSchema.find();
  }

// create Book function
export const createNewBook = (BookObj) => {
  return BookSchema(BookObj).save();
};

// get Book by email
export const getBookById = async (id) => {
  return BookSchema.findOne({ id });
};

// update Book
export const updateBook = async (filter, obj) => {
  return await BookSchema.findOneAndUpdate(filter, obj);
};

// delete function
