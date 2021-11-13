const express = require("express");
const { INTERNAL_SERVER_ERROR } = require("../constants/response-constants");
const router = express.Router();

router.post("/get-app-token", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
