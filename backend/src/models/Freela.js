const mongoose = require("mongoose");

const FreelaSchema = new mongoose.Schema(
  {
    company: String,
    hour_price: Number,
    techs: [String],
    registered_devs: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model("Freela", FreelaSchema);
