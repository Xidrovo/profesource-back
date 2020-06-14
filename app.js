const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serverApp = () => {
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
