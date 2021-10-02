const User = require("../models/User");
const bcrypt = require("bcryptjs");
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
exports.addNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const HashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: HashedPassword,
    });
    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server ERROR",
      });
    }
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return (
        res.status(404),
        json({
          success: false,
          error: "No User Found",
        })
      );
    }
    await user.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      data: "Server Error",
    });
  }
};
