const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwtUtils");
const Admin = require("../model/Admin");
const User = require("../model/User");
const Task = require("../model/Task");

exports.adminLogin = async (req, res) => {
  const { adminname, password, specialKey } = req.body;

  try {
    const admin = await Admin.findOne({ adminname });

    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the user is an admin and validate the special key
    if (admin.specialKey !== specialKey) {
      return res.status(401).json({ message: "Invalid special key" });
    }
    // console.log(admin)

    const token = generateToken({
      id: admin._id,
      username: admin.username,
      role: "admin",
    });
    res.json({ token });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.adminRegister = async (req, res) => {
  const { adminname, email, password, specialKey } = req.body;

  try {
    // Validate special key
    // console.log(typeof(process.env.ADMIN_SPECIAL_KEY), typeof(specialKey));
    if (specialKey !== process.env.ADMIN_SPECIAL_KEY) {
      return res.status(401).json({ message: "Invalid special key" });
    }

    const existingAdmin = await Admin.findOne({ adminname });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      adminname,
      email,
      password: hashedPassword,
      specialKey,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error during admin registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// exports.createEmployee = async (req, res) => {
//     const { employeeName, employeeId } = req.body;

//         try {
//             // Create employee logic (you need to define this)
//             const newEmployee = new User({ username: employeeName, employeeid: employeeId });
//             await newEmployee.save();
//             res.status(201).json({ message: 'Employee created successfully' });
//         } catch (error) {
//             console.error('Error creating employee:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
// };

exports.assignTask = async (req, res) => {
  const { username, description } = req.body;

  try {
    const employee = await User.findOne({ username });

    // console.log(username, employee, description);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const newTask = new Task({ description, assignedTo: employee._id });
    await newTask.save();

    res.status(201).json({ message: "Task assigned successfully" });
  } catch (error) {
    console.error("Error assigning task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
