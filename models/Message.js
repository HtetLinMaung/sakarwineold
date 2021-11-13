const { Schema, model } = require("mongoose");
const { REQUIRED_STRING } = require("../constants/mongoose-constants");

const messageSchema = new Schema(
  {
    server: {
      type: Schema.Types.ObjectId,
      ref: "Server",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "Channel",
    },
    userid: REQUIRED_STRING,
    username: REQUIRED_STRING,
    text: REQUIRED_STRING,
    reacts: [
      {
        react: {
          type: Schema.Types.ObjectId,
          ref: "React",
        },
        userid: {
          ...REQUIRED_STRING,
          unique: true,
        },
      },
    ],
    attachments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Attachment",
      },
    ],
    replyto: {
      type: String,
      default: "",
    },
    mentionto: [
      {
        type: String,
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Message", messageSchema);
