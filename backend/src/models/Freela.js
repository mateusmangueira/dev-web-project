const mongoose = require('mongoose');

const FreelaSchema = new mongoose.Schema({
   photo: String,
   company: String,
   hour_price: Number,
   techs: [String],
   registered_devs: Number,
},{
    toJSON: {
        virtuals:true,
    }
});
FreelaSchema.virtual('photo_url').get(function() {
    return `http://192.168.0.102:3333/files/${this.photo}`
})

module.exports = mongoose.model('Freela', FreelaSchema);