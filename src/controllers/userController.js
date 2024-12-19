const User = require("../models/userModel");
const otpGenerator = require("otp-generator");
var jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, age, phoneNumber, email, userName, password } = req.body;
    let profilePicture = req.file ? req.file.path : null;
    let otp = Number(
      otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
      })
    );
    if (!password) {
      return res.satus(400).json({ 
        success: false,
        message: "password is required",
      });
    }
    if (!email) {
      return res.satus(400).json({
        success: false,
        message: "email is required",
      });
    }

    const UserCreate = await User.create({
      name,
      age,
      phoneNumber,
      email,
      userName,
      profilePicture,
      otp,
    });
    return res.satus(201).json({
      success: true,
      message: "Otp Send Successfully",
      data: {
        userData: UserCreate,
      },
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.otpVerification = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!otp) {
      return res.satus(400).json({
        success: false,
        message: "otp is required",
      });
    }
    if (!email) {
      return res.satus(400).json({
        success: false,
        message: "email is required",
      });
    }

    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.satus(404).json({
        success: false,
        message: "Please Register First",
      });
    }
    if (findUser?.otp != Number(otp)) {
      return res.satus(400).json({
        success: false,
        message: "Please Provide valid Otp",
      });
    }
    let token = jwt.sign({ user: findUser._id }, "CHECKING");
    findUser._doc.token = token;
    return res.satus(200).json({
      success: true,
      message: "Otp Verify Successfully",
      data: {
        userData: findUser,
      },
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    if (!email || !userName) {
      return res.satus(400).json({
        success: false,
        message: "Only One Can Be Required (email || userName)",
      });
    }
    if (!password) {
      return res.satus(400).json({
        success: false,
        message: "password is required",
      });
    }
    let obj = {};
    email ? (obj.email = email) : (obj.userName = userName);

    const findUser = await User.findOne(obj);
    if (!findUser) {
      return res.satus(404).json({
        success: false,
        message: "Please Register First",
      });
    }
    let token = jwt.sign({ user: findUser._id }, "CHECKING");
    findUser._doc.token = token;
    return res.satus(200).json({
      success: true,
      message: "LogIn Successfully",
      data: {
        userData: findUser,
      },
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const findUser = await User.find();
    return res.satus(200).json({
      success: true,
      message: "User Fatch Successfully",
      data: {
        userData: findUser,
      },
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req.query;
    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.satus(404).json({
        success: false,
        message: "You Profile Is Not Found",
      });
    }
    return res.satus(200).json({
      success: true,
      message: "User Fatch Successfully",
      data: {
        userData: findUser,
      },
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: error.message,
    });
  }
};

//  Working
exports.logOut = async (req,res) => {
    try {
        
    } catch (error) {
        return res.satus(500).json({
            success: false,
            message: error.message,
          });
    }
}