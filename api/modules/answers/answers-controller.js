//get all answers
async function consult(req,res,next){
    const answers = await global.db.Answer;
    return answers.findAll({})
      .then(answers => res.status(200).send(answers))
      .catch(error => res.status(400).send(error))
  }
  //create new answer
  async function publish(req, res, next) {
    const answer = await global.db.Answer;
    return answer
      .create(req.body)
      .then(answer => res.status(200).send(answer))
      .catch(error => res.status(400).send(error))
  }
  async function update(req, res, next) {
    const {body} = req;
    return await global.db.Answer
      .update(
        {...body},
        {
          //condition to identify our target answer
          where: { idAnswer: body.idAnswer },
          returning: true, //needed for affectedRows to be populated
          plain: true,// makes sure that the returned instances are just plain objects
        }
      )
      .then((body) => res.status(200).send(body))
      .catch((error) => res.status(400).send(error));
  }
  async function clean(req, res, next){
    const {body} = req;
    return await global.db.Answer
      .destroy({
        where:{
          idAnswer: body.idAnswer,
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
  