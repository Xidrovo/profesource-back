const TagsController = require("./tags-controller");
module.exports = (app) =>{
    app.route("/tags/register")
        .post(TagsController.publish);
};