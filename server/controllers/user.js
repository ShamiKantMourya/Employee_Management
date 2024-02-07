const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwtUtils");
const User = require("../model/User");
const Task = require("../model/Task");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password)

  try {
    const user = await User.findOne({ username }).select("+password");

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const option = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const token = generateToken({
      id: user._id,
      username: user.username,
      role: user.role,
    });
    res.status(200).cookie("token", token, option).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.viewTasks = async (req, res) => {
  try {
    // Get tasks assigned to the user
    // console.log(req.user.id);
    const tasks = await Task.find({ assignedTo: req.user.id });
    res.json(tasks);
  } catch (error) {
    console.error("Error while fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    // Update task status
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    console.error("Error while updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logoutUser = async(req,res) => {
  try {
      res.status(200).cookie("token", null,{expires: new Date(Date.now()), httpOnly: true}).json({
          success: true,
          message: "Logout Successfully"
      })
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message,
      })
  }
};