const express = require('express');
const router = express.Router();
const {adminLogin, adminRegister, assignTask, createUser, getAllUser, logoutAdmin} = require("../controllers/admin");

// Admin login route
router.post('/login', adminLogin);

// Admin registration route
router.post('/register', adminRegister);

// Route to create an employee
// router.post('/employees', adminController.createEmployee);

//Route to logout
router.get('/logout', logoutAdmin);
// Route to assign a task to an employee
router.post('/tasks', assignTask);

// Route to create a user (admin functionality)
router.post('/user', createUser);

//Route to get all users data
router.get('/users', getAllUser);

module.exports = router;
