const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/StringAsArray');
const jwt = require('jsonwebtoken');
const authConfig = ('../../config/auth');

module.exports = {
    async store(req, res) {
        const { name, email, password, techs } = req.body;

        let dev = await Dev.findOne({ email })

        const techsArray = parseStringAsArray(techs);

        if (!dev) {
            dev = await Dev.create({ name, email, password, techs: techsArray });
        }

        return res.json({
            dev,
            token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn, })
        });
    },
}