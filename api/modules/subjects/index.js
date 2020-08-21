const SubjectsController = require("./subjects-controller");
module.exports = (app) =>{
    app.route("/subjects/register")
        .post(SubjectsController.publish);
};