const ItemModel = require("../models/items");

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

  static async create(data) {
    const result = await ItemModel.create(data);
    return result;
  }

  static async update(filter, data) {
    const result = await ItemModel.update(data, {
      where: filter,
    });
    return result;
  }

  // static async deleteOne(filter) {}
  // static async deleteAll(filter) {}
}
module.exports = ItemService;
