const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

exports.login = (req, res) => {
  const token = jwt.sign({ userId: 1 }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
};
