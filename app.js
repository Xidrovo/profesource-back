const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serverApp = async () => {
  // Initialize server
  const app = express();
  const server = require("http").Server(app);
  const PORT = process.env.PORT || "8000";

  // Middlewares
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));

  // Globals
  global.logger = require("./modules/logger");

<<<<<<< Updated upstream
  // DB
  const db = require("./db/mysql/models");
  await db.connect();

  global.db = db;
  /**
 * db = {
 *   sequelize: {
 *     users: {},
 *     roles: {},
 *   }
 * };
 */

  // Require api
  const api = require("./api/modules");
  app.use("/api",api);
=======
  //DB
  const db = require('./db/mysql');
  db.connect();
>>>>>>> Stashed changes

  // Error handling middleware
  app.use((err, _req, _res, _next) => {
    global.logger.error(err);
  });

  app.set("port", PORT);
  return { app, server };
};

module.exports = {
  serverApp,
};
