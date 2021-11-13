const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const channelSchema = new Schema(
  {
    channelname: REQUIRED_STRING,
    notes: {
      type: String,
      default: "",
    },
    invites: [
      {
        userid: REQUIRED_STRING,
        username: REQUIRED_STRING,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Channel", channelSchema);
