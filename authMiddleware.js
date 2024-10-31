const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

module.exports = function (req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
};
