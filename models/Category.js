const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const categorySchema = new Schema(
  {
    categoryname: REQUIRED_STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", categorySchema);
