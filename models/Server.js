const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const serverSchema = new Schema(
  {
    servername: REQUIRED_STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Server", serverSchema);
