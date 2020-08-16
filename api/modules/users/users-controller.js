async function register(req, res, next) {
  // crear usuario
  const user = await global.db.Users.create({
    name: "Edison",
    lastName: "Mora",
    email: "edison@mora.com"
  });
  return res.send(user);
}

async function login() {}

module.exports = {
  register,
  login,
};
