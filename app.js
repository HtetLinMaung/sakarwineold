require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketio = require("./socket");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/sakarwine/auth", require("./controllers/auth-controller"));

mongoose
  .connect(process.env.DB_CONNECTION, {})
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log(`Server listening on port ${PORT}`)
    );
    const io = socketio.init(server, {
      cors: {
        // origin: "http://150.95.82.125:4200",
        orign: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
    io.on("connection", (socket) => {
      console.log(socket);
    });
  })
  .catch((err) => {
    console.log(err);
  });
