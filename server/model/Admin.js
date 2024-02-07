const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
    specialKey: { type: String, required: true } // Special key for admin registration
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
