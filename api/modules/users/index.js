const UsersController = require("./users-controller");
module.exports = (app) =>{
    app.route("/users/register")
        .post(UsersController.publish);
};