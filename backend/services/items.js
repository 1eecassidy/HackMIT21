const ItemModel = require("../models/items");
const UserService = require("../services/users");

class ItemService {
  static async get(filter) {
    const result = await ItemModel.findAll({
      where: filter,
    });
    if (result) return result[0];
    else return [];
  }

  static async getAll(filter) {
    const result = await ItemModel.findAll({
      where: filter,
    });
    return result;
  }
  static async getSellerListings(sellerId) {
    const result = await ItemModel.findAll({
      where: { sellerId },
    });
    return result;
  }

  static async showCart(userId) {
    const result = await ItemModel.findAll({
      where: { currentBidderId: userId },
    });
    return result;
  }

  static async getAll(filter) {
    const result = await ItemModel.findAll({
      where: {},
    });
    return result;
  }

  static async create(data) {
    const result = await ItemModel.create(data);
    return result;
  }

  static async createItem(
    userId,
    name,
    description,
    size,
    imageUrl,
    endDate,
    category,
    itemCondition,
    startBid
  ) {
    const result = await ItemModel.create({
      sellerId: userId,
      currentBid: startBid,
      startDate: new Date(),
      name,
      description,
      size,
      imageUrl,
      endDate,
      category,
      itemCondition,
    });
    return result;
  }

  static async addItemToCart(userId, itemId, bid) {
    const result = await this.update(
      { id: itemId },
      {
        currentBidderId: userId,
        currentBid: bid,
      }
    );

    //update the user and add the item to the items that this user has purchased
    const currentUser = await UserService.get({ id: userId });
    // currentUser = currentUser.dataValues;
    const userUpdateResult = await UserService.update(
      { id: userId },
      {
        itemsPurchased: [...currentUser.itemsPurchased, itemId],
        totalValuePurchased: currentUser.totalValuePurchased + bid,
        totalValuePurchasedPerMonth:
          currentUser.totalValuePurchasedPerMonth + bid,
      }
    );
    return result;
  }

  static async update(filter, data) {
    const result = await ItemModel.update(data, {
      where: filter,
    });
    return result;
  }

  // static async deleteOne(filter) {}
  static async deleteAll(filter) {
    const result = await ItemModel.delete({
      where: filter,
    });
    return result;
  }
}
module.exports = ItemService;
