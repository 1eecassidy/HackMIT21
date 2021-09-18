const express = require("express");
const router = express.Router();

// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const bcrypt = require("bcrypt");
// const _ = require("lodash");

//give email and password and we will log in
router.post("/login", async (req, res) => {
});

router.post("/register", async (req, res) => {
});

// function validate(req) {
//   const schema = {
//     username: Joi.string().min(4).max(255).required(),
//     password: Joi.string().min(4).max(255).required(),
//   };

//   return Joi.validate(req, schema);
// }

module.exports = router;
