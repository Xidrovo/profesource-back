const PostsController = require("./posts-controller");
console.log(PostsController)
module.exports = (app) =>{
    app.route("/posts/register")
        .post(PostsController.publish);
};