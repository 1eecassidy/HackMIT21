const UserModel = require("../models/users");

class User {
  static async get(filter) {
    const result = await UserModel.findOne({
      where: filter,
    });

    return result;
  }

  //fix
  static async getAll(filter) {
    const result = await UserModel.findAll({
      where: filter,
    });
    return result;
  }

  static async create(data) {
    const result = await UserModel.create(data);
    return result;
  }

  static async update(filter, data) {
    const result = await UserModel.update(data, {
      where: filter,
    });
    return result;
  }

  static async deleteOne(filter) {}
  static async deleteAll(filter) {
    const result = await UserModel.delete({
      where: filter,
    });
    return result;
  }
}

module.exports = User;
