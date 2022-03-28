const Dev = require("../models/Dev");
const Freela = require("../models/Freela");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const freelas = await Freela.find({ techs: tech });

    return res.json(freelas);
  },

  async store(req, res) {
    const { company, techs, hour_price } = req.body;

    const freela = await Freela.create({
      company,
      hour_price,
      techs: techs.split(",").map((tech) => tech.trim()),
      registered_devs: 0,
    });
    return res.json(freela);
  },
};
