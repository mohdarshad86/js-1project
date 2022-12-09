const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello from about");
});

module.exports = router;
