const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const attachmentSchema = new Schema(
  {
    dataurl: REQUIRED_STRING,
    filetype: REQUIRED_STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Attachment", attachmentSchema);
