const express = require("express");
const {
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
  OK,
  BAD_REQUEST,
} = require("../constants/response-constants");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");

router.post("/register", async (req, res) => {
  try {
    let response = await axios.post(`${process.env.IAM}/auth/login`, {
      appid: "sakarwine",
      userid: "admin",
      password: process.env.IAM_PWD,
    });
    if (response.data.code != 200) {
      return res.status(401).json(UNAUTHORIZED);
    }
    const token = response.data.token;
    response = await axios.post(
      `${process.env.IAM}/auth/users`,
      {
        userid: req.body.userid,
        username: req.body.username,
        password: req.body.password,
        companyid: "techhype",
        companyname: "techhype",
        otpservice: "none",
        mobile: "09555555555",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.code != 200) {
      return res.status(400).json(BAD_REQUEST);
    }
    res.json(OK);
  } catch (err) {
    console.log(err);
    res.status(500).json(INTERNAL_SERVER_ERROR);
  }
});

router.get("/get-app-token", async (req, res) => {
  try {
    const response = await axios.post(`${process.env.IAM}/auth/check-token`, {
      token: req.query.token,
    });
    if (response.data.code != 200) {
      return res.status(401).json(UNAUTHORIZED);
    }
    const token = jwt.sign(
      {
        userid: response.data.data.userid,
        username: response.data.data.username,
        role: response.data.data.role,
      },
      process.env.SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.json({ ...OK, token });
  } catch (err) {
    console.log(err);
    res.status(500).json(INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
