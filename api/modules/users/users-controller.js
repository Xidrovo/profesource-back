async function publish(req, res, next) {
  // crear user
  const user = await global.db.User.create({
    username: "fponce",
    name: "Freddy",
    lastName: "Ponce",
    email: "fponce@espol.edu.ec",
    password: "pruebaAdmin1234",
    state: true,
    // username: "cxcarvaj",
    // name: "Carlos",
    // lastName:"Carvajal",
    // email:"cxcarvaj@espol.edu.ec",
    // password:"pruebaAdmin123",
    // state:true,
  });
  return res.send(user);
}

module.exports = {
  publish,
};
