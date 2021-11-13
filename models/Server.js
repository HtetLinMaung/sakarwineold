const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constant");

const serverSchema = new Schema(
  {
    servername: REQUIRED_STRING,
  },
  {
    timestamps: true,
  }
);
