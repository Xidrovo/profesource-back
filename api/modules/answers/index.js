const AnswersController = require("./answers-controller");
module.exports = (app) =>{
    app.route("/answers/register")
        .post(AnswersController.publish);
    app.route("/answers/consult")
        .get(AnswersController.consult);
    app.route("/answers/consultByPost/:id_Post")
        .get(AnswersController.consultByPost);
    app.route("/answers/update/:idAnswer")
        .put(AnswersController.update);
    app.route("/answers/delete/:idAnswer")
        .delete(AnswersController.clean);
};