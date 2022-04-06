const Dev = require('../models/Dev');

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

module.exports = {
    async store(req, res) {
        try {
            const { email, password } = req.body;

            let dev = await Dev.findOne({ email });

            const { _id } = dev;

            if (dev.password === password) {
                return res.json({
                    dev,
                    token: jwt.sign({ _id }, authConfig.secret, { expiresIn: authConfig.expiresIn, })
                });
            }
            return res.json("Erro no login")
        } catch (error) {
            return res.json(error);
        }
    },

    async create(req, res) {
        try {
            const { name, email, password, techs } = req.body;

            let dev = await Dev.findOne({ email });

            if (!dev) {
                dev = await Dev.create({ name, email, password, techs });
            }

            return res.json({ dev });

        } catch (error) {
            return res.json(error)
        }
    },

    async update(req, res) {
        const { _id } = req.params;
        const { name, email, password, techs } = req.body;
        const dev = await Dev.findById(_id);
        await dev.updateOne(req.body);
        return res.json({
            name,
            email,
            techs,
        });

    },

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    }

}