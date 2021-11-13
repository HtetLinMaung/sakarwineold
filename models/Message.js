const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constant");

const messageSchema = new Schema(
  {
    server: {
      type: Schema.Types.ObjectId,
      ref: "server",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "channel",
    },
    userid: REQUIRED_STRING,
    username: REQUIRED_STRING,
    text: REQUIRED_STRING,
    reacts: [
      {
        type: Schema.Types.ObjectId,
        ref: "message_react",
      },
    ],
    replyto: {
      type: String,
      default: "",
    },
    mentionto: [String],
  },
  { timestamps: true }
);
