async function consult(req,res,next){
  const posts = await global.db.Posts;
  return posts.findAll({})
    .then(posts => res.status(200).send(posts))
    .catch(error => res.status(400).send(error))
}
async function publish(req, res, next) {
  const post = await global.db.Posts;
  return post
    .create(req.body)
    .then(post => res.status(200).send(post))
    .catch(error => res.status(400).send(error))
}
async function update(req, res, next) {
  const {body} = req;
  return await global.db.Posts
    .update(
      {...body},
      {
        //condition to identify our target Post
        where: { idPost: body.idPost },
        returning: true, //needed for affectedRows to be populated
        plain: true,// makes sure that the returned instances are just plain objects
      }
    )
    .then((body) => res.status(200).send(body))
    .catch((error) => res.status(400).send(error));
}
async function clean(req, res, next){
  const {body} = req;
  return await global.db.Posts
    .destroy({
      where:{
        idPost: body.idPost,
      }
    })
    .then((body) => res.sendStatus(200).send(body))
    .catch((error) => res.sendStatus(400).send(error));

}

module.exports = {
  consult,
  publish,
  update,
  clean,
};
