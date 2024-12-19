const Book = require("../models/bookModel");

exports.createBook = async (req, res) => {
  try {
    const { name, authorName, price, description, stock } = req.body;

    const createBookData = await Book.create(
      name,
      authorName,
      price,
      description,
      stock
    );

    return res.status(201).json({
      success: true,
      message: "Book Create Successfully",
      data: {
        bookData: createBookData,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { name, authorName, price, description, stock } = req.body;
    const { bookId } = req.query;

    const createBookData = await Book.findByIdUpdate(
      { _id: bookId },
      {
        $set: {
          name,
          authorName,
          price,
          description,
          stock,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Book Update Successfully",
      data: {
        bookData: createBookData,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { bookId } = req.query;
    const findBookById = await Book.updateOne(
      { _id: bookId },
      { $set: { disable: true } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Book deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllBook = async (req, res) => {
  try {
    const { disable } = req.query;
    let obj = {};
    if (disable != null) {
      obj.disable = disable;
    } else {
      obj.disable = false;
      // obj.stock =
    }
    const findBookById = await Book.find(obj);
    return res.status(200).json({
      success: true,
      message: "Book Find Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    const { bookId } = req.query;
    const findBookById = await Book.findById(bookId);
    return res.status(200).json({
      success: true,
      message: "Book Find Successfully",
      data: {
        bookData: findBookById,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
