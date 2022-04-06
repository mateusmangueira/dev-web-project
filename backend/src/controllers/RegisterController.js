const Register = require("../models/Register");
const Freela = require("../models/Freela");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { dev_id } = req.body;
    const { freela_id } = req.params;

    const register = await Register.create({
      dev: dev_id,
      freela: freela_id,
      date: new Date(),
    });

    return res.json(register);
  },

  async approve(req, res) {
    const { register_id } = req.params;
    const register = await Register.findById(register_id).populate('freela').exec;
    register.approved = true;
    await register.save();

    const freela = await Freela.findById(register.freela._id);
    freela.registered_devs = registered_devs + 1;
    await freela.save();
    return res.json(register, freela);
  },

  async reject(req, res) {
    const { register_id } = req.params;
    const register = await Register.findById(register_id).populate('freela');
    register.approved = false;
    await register.save();

    const freela = await Freela.findById(register.freela._id);
    freela.registered_devs = registered_devs - 1;
    await freela.save();
    return res.json(register, freela);
  },

  async index(req, res) {
    const registers = await Register.find();
    return res.json(registers);
  }
};
