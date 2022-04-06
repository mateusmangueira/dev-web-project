const Dev = require("../models/Dev");
const Freela = require("../models/Freela");

module.exports = {
  async index(req, res) {
    const freelas = await Freela.find();
    return res.json(freelas);
  },

  async store(req, res) {
    const { company, hour_price, techs } = req.body;

    const freela = await Freela.create({
      company,
      hour_price,
      techs: techs.toString().split(",").map((tech) => tech.trim()),
      registered_devs: 0,
    });
    return res.json(freela);
  },
};
