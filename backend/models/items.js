const Sequelize = require("sequelize-cockroachdb");
const { sequelize } = require("../server");
const UserModel = require("./users");

// Define the Item model for the "Items" table.
const Item = sequelize.define("Item", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sellerId: {
    type: Sequelize.INTEGER,
    // references: {
    //   // This is a reference to another model
    //   model: UserModel,

    //   // This is the column name of the referenced model
    //   key: "id",

    //   // This declares when to check the foreign key constraint. PostgreSQL only.
    //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    // },
  },
  currentBidderId: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  currentBid: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  isSold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  category: {
    type: Sequelize.STRING,
  },
  itemCondition: {
    type: Sequelize.STRING,
    defaultValue: "New",
  },
});

module.exports = Item;
