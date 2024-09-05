const { sumNumbers, multiplyNumbers } = require('../models/mathModel');

const sum = (req, res) => {
  if (!req.body.nums || !Array.isArray(req.body.nums)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const sum = sumNumbers(req.body.nums);
  res.json({ sum });
};

const multiply = (req, res) => {
  if (!req.body.nums || !Array.isArray(req.body.nums)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const product = multiplyNumbers(req.body.nums);
  res.json({ multiply: product });
};

module.exports = { sum, multiply };
