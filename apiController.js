const API = require('../models/apiModel');

exports.getAllAPIs = async (req, res) => {
  const apis = await API.findAll();
  res.json(apis);
};

exports.addAPI = async (req, res) => {
  try {
    const newAPI = await API.create(req.body);
    res.status(201).json(newAPI);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add API' });
  }
};
