const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  techs: [String],
  avatar_url: {
    type: String
  },
}
);

module.exports = model('Dev', DevSchema);