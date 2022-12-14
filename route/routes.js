const router = require("express").Router();

router.use("/", require("./home"));
router.use("/about", require("./about"));
router.use("/contact", require("./contact"));

let players = [
  {
    name: "batman",
    dob: "1/1/1989",
    gender: "male",
    city: "gotham",
    sports: ["swimming"],
  },
  {
    name: "superman",
    dob: "1/09/1976",
    gender: "male",
    city: "metropolis",
    sports: ["soccer"],
  },
  {
    name: "cyborg",
    dob: "1/1/1990",
    gender: "male",
    city: "central city",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  let bodyName = req.body.name;

  const { name, dob, city, gender, sports } = req.body;
  if (!name || !dob || city || gender || sports) {
    return res.send("All fields name, dob, city, gender, sports are mendatory");
  }

  let play = players.find((x) => x.name === bodyName);

  if (play) {
    res.send({ data: players, status: true });
  } else {
    //just push the body object to the players object
    players.push(req.body);
    res.json({ data: players, status: true });
  }
});

module.exports = router;
