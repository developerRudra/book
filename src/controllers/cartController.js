const Cart = require("../models/cartModel");
const Book = require("../models/bookModel");

exports.createCart = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const findBook = await Book.findById(bookId);
    const createData = await Cart.create({
      userId,
      bookId,
      price: findBook?.price,
    });
    return res.status(201).json({
      success: true,
      message: "Cart Create Successfully.",
      data: {
        cartData: createData,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.quentityUpdate = async (req, res) => {
  try {
    const { cartId } = req.query;
    const checking = await Cart.findById(cartId);

    const findOneUpdate = await Cart.findByIdUpdate(
      { _id: cartId },
      {
        $set: {
          quentity: checking + 1,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Quentity Update Successfully",
      data: {
        cartData: findOneUpdate,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.quentityRemove = async (req, res) => {
  try {
    const { cartId } = req.query;
    const checking = await Cart.findById(cartId);

    const findOneUpdate = await Cart.findByIdUpdate(
      { _id: cartId },
      {
        $set: {
          quentity: checking - 1,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Remove Update Successfully",
      data: {
        cartData: findOneUpdate,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
