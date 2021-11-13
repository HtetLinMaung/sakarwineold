const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const reactSchema = new Schema(
  {
    icon: REQUIRED_STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = model("React", reactSchema);
