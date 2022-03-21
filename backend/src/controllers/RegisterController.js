const Register = require('../models/Register');

module.exports = {
  async store(req, res) {
    const { dev_id } = req.headers;
    const { freela_id } = req.params;
    const { date } = req.body;

    const register = await Register.create({
      dev: dev_id,
      freela: freela_id,
      date,
    });

    await register.populate('freela').populate('dev').execPopulate();

    return res.json(register);
  }
};