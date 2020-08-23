const AuthController = require("./authentication-controller");
module.exports = (app) =>{
    app.route("/auth/login")
        .post(AuthController.login);
    app.route("/auth/consult")
        .get(AuthController.consult);
    app.route("/tags/logout/:username")
        .delete(AuthController.logout);
};