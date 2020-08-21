async function publish(req, res, next) {
    // crear subject
    const subject = await global.db.Subjects.create({
        Subject_name:"Desarrollo de Aplicaciones Webs y Móviles",
        status: true,
    });
    return res.send(subject);
  }
  
  module.exports = {
    publish,
  };
  