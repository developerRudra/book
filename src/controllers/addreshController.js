const Addresh = require("../models/addreshModel");

exports.addAddresh = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      userId,
      addresh1,
      addresh2,
      city,
      pincode,
      state,
      landmark,
    } = req.body;
    const addreshCreate = await Addresh.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      userId,
      addresh1,
      addresh2,
      city,
      pincode,
      state,
      landmark,
    });
    return res.status(201).json({
      success: true,
      message: "New Addresh Create Successfully",
      data: {
        addreshData: addreshCreate,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateAddresh = async (req, res) => {
  try {
    const { addreshId } = req.query;
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      addresh1,
      addresh2,
      city,
      pincode,
      state,
      landmark,
    } = req.body;
    const addreshUpdate = await Addresh.findByIdAndUpdate(
      { _id: addreshId },
      {
        $set: {
          firstName,
          lastName,
          phoneNumber,
          email,
          addresh1,
          addresh2,
          city,
          pincode,
          state,
          landmark,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Addresh Update Successfully",
      data: {
        addreshData: addreshUpdate,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllAddreshByUserId = async (req, res) => {
  try {
    const { userId } = req.query;

    const addreshFindByUserId = await Addresh.find({
      userId: userId,
      disable: false,
    });
    return res.status(200).json({
      success: true,
      message: "Get All Addresh",
      data: {
        addressData: addreshFindByUserId,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleAddreshById = async (req, res) => {
  try {
    const { addreshId } = req.query;
    const findAddreshById = await Addresh.findById(addreshId);
    if (!findAddreshById) {
      return res.status(404).json({
        success: false,
        message: "Addresh Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Addresh Fatch Successfully",
      data: {
        addreshData: findAddreshById,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteAddresh = async (req, res) => {
  try {
    const { addreshId } = req.query;
    const findAddreshById = await Addresh.updateOne(
      { _id: addreshId },
      { $set: { disable: true } },
      { new: true }
    );
      return res.status(200).json({
        success: true,
        message: "Addresh deleted Successfully",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
