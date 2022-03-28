const Register = require("../models/Register");

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

    await register.populate("freela").populate("dev").execPopulate();
    const freela = await Freela.find({ _id: freela_id });

    freela = {
      ...rest,
      registered_devs: registered_devs + 1,
    };

    await freela.save();

    return res.json(register);
  },
};
