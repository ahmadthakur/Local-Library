const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("respond with a resource");
});

module.exports = router;
