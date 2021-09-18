const router = require("express").Router();

//get model
const ItemService = require("../services/items");

// get all users
router.route("/").get((req, res) => {});

// Get feed for the user
router.route("/showFeed").post(async (req, res) => {
  const data = req.body;
  const response = ItemService.showFeed(data);
  res.data(response);
});

router.route("/addUser").post(async (req, res) => {});

module.exports = router;
