const userModel = require("../model/userModel");

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExist = await userModel.findOne({
      email,
      password,
    });

    console.log(isExist);

    if (!isExist) {
      return res.status(200).json({
        message: "user not found",
        error: true,
      });
    }

    res.status(200).json({
      message: "Login successful",
      data: isExist,
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
    });
  }
};
module.exports = LoginController;
