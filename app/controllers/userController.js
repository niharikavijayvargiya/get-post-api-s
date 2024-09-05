const { getUserInfo } = require('../models/userModel');

const getUser = (req, res) => {
  const name = req.query.name;
  const user = getUserInfo(name);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
};

module.exports = { getUser };
