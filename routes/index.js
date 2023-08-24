const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/layouts/index.ejs");
});

module.exports = router;
