const router = require("express").Router();

router.post("/", (req, res) => {
  const dat = req.body.name;
  res.send("Hello, " + dat);
});

module.exports = router;
