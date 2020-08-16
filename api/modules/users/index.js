const UsersController = require("./users-controller");

module.exports = (app) => {
  app.route("/users/register")
    .post(UsersController.register);

  app.route("/users/login")
    .post(UsersController.login);
};
