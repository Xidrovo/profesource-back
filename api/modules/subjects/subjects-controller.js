async function consult(req,res,next){
  const subjects = await global.db.Subjects;
  return subjects.findAll({})
    .then(subjects => res.status(200).send(subjects))
    .catch(error => res.status(400).send(error))
}

async function publish(req, res, next) {
  // crear subject
  const subject = await global.db.Subjects;
  const subject_Target = await subject.findAll({where:{Subject_name:req.body.Subject_name}})
  if(Object.keys(subject_Target).length===0){
    return subject
    .create(req.body)
    .then(subject => res.status(200).send(subject))
    .catch(error => res.status(400).send(error))
  }
  else{
    return res.status(409).send("Nombre de materia ya existente en la base de datos!");
  }
}
async function update(req, res, next) {
  const {body} = req;
  return await global.db.Subjects
    .update(
      {...body},
      {
        //condition to identify our target Subject
        where: { Subject_name: req.params.Subject_name },
        returning: true, //needed for affectedRows to be populated
        plain: true,// makes sure that the returned instances are just plain objects
      }
    )
    .then((body) => res.status(200).send(body))
    .catch((error) => res.status(400).send(error));
}

async function clean(req, res, next){
  const {params} = req;
  return await global.db.Subjects
    .destroy({
      where:{
        Subject_name: params.Subject_name,
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
  