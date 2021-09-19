const Sequelize = require("sequelize-cockroachdb");
const { sequelize } = require("../server");

// Define the User model for the "Users" table.
const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isSeller: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  socials: {
    type: Sequelize.JSON,
    defaultValue: {},
  },
  itemsSold: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE),
    defaultValue: [],
  },
  itemsPurchased: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE),
    defaultValue: [],
  },
  totalValueSold: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  totalValueSoldPerMonth: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  totalValuePurchased: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  totalValuePurchasedPerMonth: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0,
  },
  charity: {
    type: Sequelize.STRING,
    defaultValue: "ABC Charity",
  },
});

// console.log(" we are making user model");

module.exports = User;
