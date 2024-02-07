const express = require('express');
const router = express.Router();
const {loginUser, viewTasks, updateTaskStatus, logoutUser} = require("../controllers/user");
const authenticateToken = require("../middlewares/authMiddleware");

// User login route
router.post('/login', loginUser);

//User Logout route
router.get('/logout', logoutUser);

// Route to view tasks assigned to the user
router.get('/tasks', authenticateToken, viewTasks);

// Route to update task status
router.put('/tasks/:taskId', authenticateToken, updateTaskStatus);

module.exports = router;