const User = require('../models/User');

module.exports = {
    async store(req, res) {
       const {name, email, password} = req.body;
       let user = await User.findOne({email})    
        if(!user) {
            user = await User.create({name, email, password});
        }
        return res.json(user);
    },

    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },
}