const SubjectsController = require("./subjects-controller");
module.exports = (app) =>{
    app.route("/subjects/register")
        .post(SubjectsController.publish);
    app.route("/subjects/consult")
        .get(SubjectsController.consult);
    app.route("/subjects/update/:Subject_name")
        .put(SubjectsController.update);
    app.route("/subjects/delete/:Subject_name")
        .delete(SubjectsController.clean)
};