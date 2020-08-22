async function consult(req,res,next){
  const tags = await global.db.Tags;
  return tags.findAll({})
    .then(tags => res.status(200).send(tags))
    .catch(error => res.status(400).send(error))
}
async function publish(req, res, next) {
  // crear Tags
  const tag = await global.db.Tags;
  return tag
    .create(req.body)
    .then(tag => res.status(200).send(tag))
    .catch(error => res.status(400).send(error))
}
async function update(req, res, next) {
  const {body} = req;
  return await global.db.Tags
    .update(
      {...body},
      {
        //condition to identify our target tag
        where: { idTag: body.idTag },
        returning: true, //needed for affectedRows to be populated
        plain: true,// makes sure that the returned instances are just plain objects
      }
    )
    .then((body) => res.status(200).send(body))
    .catch((error) => res.status(400).send(error));
}

async function clean(req, res, next){
  const {body} = req;
  return await global.db.Tags
    .destroy({
      where:{
        idTag: body.idTag,
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
