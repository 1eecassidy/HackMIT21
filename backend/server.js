//https://www.youtube.com/watch?v=7CqJlxBYj-M

//1) npx create-react-app
//2) create backend folder and inside, do npm init to make package.json
//3)now npm install express cors mongoose dotenv
//4) sudo npm install -g nodemon
//then craete server.js
// const config = require("config");
const pathToCRTFile = "/home/yash/.postgresql/root.crt";
const cockroachPassword = "tZL02rNcIwQKSOJM";
const express = require("express");
const cors = require("cors");
const errorMiddleWare = require("./middleware/error");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

//sequelize connection
//https://github.com/cockroachlabs/hello-world-node-sequelize/blob/main/app.js
// https://www.cockroachlabs.com/docs/v21.1/build-a-nodejs-app-with-cockroachdb-sequelize?filters=linux
const fs = require("fs");
const Sequelize = require("sequelize-cockroachdb");
const sequelize = new Sequelize({
  dialect: "postgres",
  username: "yash",
  password: cockroachPassword,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "creamy-fox-3645.defaultdb",
  dialectOptions: {
    ssl: {
      // For secure connection:
      ca: fs.readFileSync(pathToCRTFile).toString(),
    },
  },
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    //making table for user model and item model (one time)
    // const UserModel = require("./models/users");
    // UserModel.sync({ force: true });

    //making table for user model and item model (one time)
    // const ItemModel = require("./models/items");
    // ItemModel.sync({ force: true });

    // console.log("The table for the User model was just (re)created!");

    //routes
    const usersRouter = require("./routes/users");
    app.use("/users", usersRouter);
    const authRouter = require("./routes/auth");
    app.use("/auth", authRouter);
    const itemsRouter = require("./routes/items");
    app.use("/items", itemsRouter);

    //error handling middleware used at end,for routes not used!:
    app.use(errorMiddleWare);
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//app listn
app.listen(port, () => {
  console.log("Server running on port ", port);
});

//when closing the app
process.on("SIGINT", function () {});
module.exports = { sequelize };
