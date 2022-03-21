const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/StringAsArray');

module.exports = {
    async store(req, res) {
       const {name, email, password, techs} = req.body;

       let dev = await Dev.findOne({email})

       const techsArray = parseStringAsArray(techs);

        if(!dev) {
            dev = await Dev.create({name, email, password, techs: techsArray});
        }
        return res.json(dev);
    },

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },
}