const router = require("express").Router();

const UserService = require("../services/users");

//get all profiles
router.route("/get").get(async (req, res) => {
  const { filter } = req.body;
  const result = await UserService.get(filter);
  res.json(result);
});

router.route("/getAll").get(async (req, res) => {
  const { filter } = req.body;
  const result = await UserService.getAll(filter);
  res.json(result);
});

router.route("/addUser").post(async (req, res) => {
  const { data } = req.body;
  const result = await UserService.create(data);
  res.json(result);
});

// router.route("/update").post(async (req, res) => {
//   const { filter, data } = req.body;
//   const result = await UserService.update(filter, data);
//   res.json(result);
// });

// router.route("/delete").post(async (req, res) => {
//   const { filter } = req.body;
//   const result = await UserService.deleteOne(filter);
//   res.json(result);
// });

router.route("/deleteAll").post(async (req, res) => {
  const { filter } = req.body;
  const result = await UserService.deleteAll(filter);
  res.json(result);
});

module.exports = router;
