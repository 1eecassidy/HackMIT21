const router = require("express").Router();

//get model
const ItemService = require("../services/items");

//get all profiles
router.route("/get").get(async (req, res) => {
  const { filter } = req.body;
  const result = await ItemService.get(filter);
  res.json(result);
});

router.route("/showFeed").get(async (req, res) => {
  const { filter } = req.body;
  const result = await ItemService.getAll(filter);
  res.json(result);
});

router.route("/bidForItem").post(async (req, res) => {
  const { data } = req.body;
  const { userId, bid, itemId } = data;
  if (userId === null || bid === null) {
    res.status(400).json({ error: "userId,bid value missing" });
  }
  const result = await ItemService.addItemToCart(userId, itemId, bid);
  res.json(result);
});

router.route("/createItem").post(async (req, res) => {
  const { data } = req.body;
  const {
    userId, //reqd
    name, //reqd
    description,
    size,
    imageUrl,
    endDate, //reqd
    category,
    itemCondition,
    startBid, //reqd
  } = data;

  if (
    userId === null ||
    startBid === null ||
    endDate === null ||
    name === null
  ) {
    res.status(400).json({ error: "userId,bid value missing" });
  }
  const result = await ItemService.createItem(
    userId,
    name,
    description,
    size,
    imageUrl,
    endDate,
    category,
    itemCondition,
    startBid
  );
  res.json(result);
});

router.route("/update").post(async (req, res) => {
  const { filter, data } = req.body;
  const result = await ItemService.update(filter, data);
  res.json(result);
});

router.route("/showCart").post(async (req, res) => {
  const { filter } = req.body;
  const { userId } = filter;
  const result = await ItemService.showCart(userId);
  res.json(result);
});

// router.route("/delete").post(async (req, res) => {
//   const { filter } = req.body;
//   const result = await ItemService.deleteOne(filter);
//   res.json(result);
// });

router.route("/deleteAll").post(async (req, res) => {
  const { filter } = req.body;
  const result = await ItemService.deleteAll(filter);
  res.json(result);
});

module.exports = router;
