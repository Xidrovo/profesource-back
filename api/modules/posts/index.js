const PostsController = require("./posts-controller");
// console.log(PostsController)
module.exports = (app) =>{
    app.route("/posts/register")
        .post(PostsController.publish);
    app.route("/posts/consult")
        .get(PostsController.consult);
    app.route("/posts/update/:idPost")
        .put(PostsController.update);
    app.route("/posts/delete/:idPost")
        .delete(PostsController.clean);
};