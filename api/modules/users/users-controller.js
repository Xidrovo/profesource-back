async function register(req, res, next){
    //crear usuario
    const user = await global.db.Users.create({
        //Objeto del user
    });
    return res.send(user);

}

async function login(){

}

module.exports = {
    register,
    login,
};