const AuthService = require('../services/AuthService');

module.exports = () => {
  const controller = {};

  controller.getToken = async (req, res) => {
    const token = AuthService();

    return res.status(200).json({ token });
  };

  return controller;
};
