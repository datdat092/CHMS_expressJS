const Employee = require('../models/Employee');

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { name, role, department, contact, salary } = req.body;
  try {
    const newEmployee = new Employee({ name, role, department, contact, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

