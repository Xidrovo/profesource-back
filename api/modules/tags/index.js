const TagsController = require("./tags-controller");
module.exports = (app) =>{
    app.route("/tags/register")
        .post(TagsController.publish);
    app.route("/tags/consult")
        .get(TagsController.consult);
    app.route("/tags/update/:idTag")
        .put(TagsController.update);
    app.route("/tags/delete/:idTag")
        .delete(TagsController.clean);
};