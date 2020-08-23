const shortid = require('shortid');
async function consult(req,res,next){
    const sessions = await global.db.Session;
    return sessions.findAll({})
      .then(sessions => res.status(200).send(sessions))
      .catch(error => res.status(400).send(error))
  }
  //create new session - login user
  async function login(req, res, next) {
    // SELECT * FROM User WHERE username = username_send_by_front AND email = email_send_by_front;
    const userRegister = await global.db.User.findOne({where:{username: req.body.username, email:req.body.email}})
    if(Object.keys(userRegister).length===0){
        return res.status(404).send("Username no encontrado!");
    }else{
        const userRegister = await global.db.User.findOne({where:{password: req.body.password}})
        if(Object.keys(userRegister)!==0){
            const session = await global.db.Session;
            return session
              .create({idSession: shortid.generate() ,username: req.body.username})
              .then(session => res.status(200).send(session))
              .catch(session => res.status(400).send(session))
        }else{
            return res.status(401).send("La contraseña no coincide!"); 
        }
    }
  }
  async function logout(req, res, next){
    const {body} = req;
    return await global.db.Session
      .destroy({
        where:{
          username: body.username,
        }
      })
      .then((body) => res.sendStatus(200).send(body))
      .catch((error) => res.sendStatus(400).send(error));
  
  }
  module.exports = {
    consult,
    login,
    logout,
  };
  