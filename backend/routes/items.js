const router = require("express").Router();

//get model
const ItemService = require("../services/items");

//get all profiles
router.route("/get").get(async (req, res) => {
  const { filter } = req.body;
  const result = await ItemService.get(filter);
  res.json(result);
});

router.route("/getAll").get(async (req, res) => {
  const { filter } = req.body;
  const result = await ItemService.getAll(filter);
  res.json(result);
});

router.route("/create").post(async (req, res) => {
  const { data } = req.body;
  const result = await ItemService.create(data);
  res.json(result);
});

router.route("/update").post(async (req, res) => {
  const { filter, data } = req.body;
  const result = await ItemService.update(filter, data);
  res.json(result);
});

// router.route("/delete").post(async (req, res) => {
//   const { filter } = req.body;
//   const result = await ItemService.deleteOne(filter);
//   res.json(result);
// });

// router.route("/deleteAll").post(async (req, res) => {
//   const { filter } = req.body;
//   const result = await ItemService.deleteAll(filter);
//   res.json(result);
// });

module.exports = router;
