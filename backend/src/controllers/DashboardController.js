const Freela = require('../models/Freela');

module.exports = {
  async show(req, res) {
    const { dev_id } = req.params;

    const freelas = await Freela.find({ dev: dev_id });

    return res.json(freelas);
  }
}