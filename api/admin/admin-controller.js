const { db } = require("../../db/mysql/models");

async function barChart(req, res, next) {
  return (consulta = await db.sequelize
    .query(
      "Select Subject_name as materia,count(Subject_name) as TotalPosts from POST group by Subject_name order by TotalPosts desc;",
      {
        type: db.sequelize.QueryTypes.SELECT,
      }
    )
    .then((consulta) => res.status(200).send(consulta))
    .catch((error) => res.status(400).send(error)));
}
async function lineChart(req, res, next) {
    return (consulta = await db.sequelize
      .query(
        "Select count(*) as NewUsers, monthname(created_at) as Mes from USER where state = true group by(mes);",
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )
      .then((consulta) => res.status(200).send(consulta))
      .catch((error) => res.status(400).send(error)));
  }
  async function lineChart2(req, res, next) {
    return (consulta = await db.sequelize
      .query(
        "Select count(USER.username) as Usuarios, POST.Subject_name as Materia From POST join USER on POST.username = USER.username join SUBJECT on POST.Subject_name = SUBJECT.Subject_name group by Materia order by Usuarios desc;",
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )
      .then((consulta) => res.status(200).send(consulta))
      .catch((error) => res.status(400).send(error)));
  }

module.exports = {
  barChart,
  lineChart,
  lineChart2,
};
