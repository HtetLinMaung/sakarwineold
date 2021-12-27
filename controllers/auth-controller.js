const express = require("express");
const { INTERNAL_SERVER_ERROR } = require("../constants/response-constants");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/get-app-token", async (req, res) => {
  try {
    const token = jwt.sign(
      {
        userid: "",
        username: "",
      },
      process.env.SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json(INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
