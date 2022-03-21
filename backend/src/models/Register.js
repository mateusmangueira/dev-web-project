const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  dev: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dev'
  },
  freela: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freela'
  }
});

module.exports = mongoose.model('Register', RegisterSchema);