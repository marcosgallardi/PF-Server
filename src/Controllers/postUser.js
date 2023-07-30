const { User } = require("../db");
const { Op } = require("sequelize");
const mailRegister = require("./mailRegister");
//la validacion NO deberia ser con el name, sino con el email
const postUser = async ({ name, lastName, email, password, birthDate, phoneNumber, image }) => {
  const existingUser = await User.findOne({
    where: {
      email: {
        [Op.iLike]: email,
      },
    },
  });

  if (existingUser) {
    throw new Error("el usuario ya existe");
  }

  const newUser = {
    name,
    lastName,
    email,
    password,
    birthDate,
    phoneNumber,
    image,
  }
  mailRegister(newUser.name,newUser.email)
  const registerUser = await User.create(newUser);
  

  return registerUser;
};

module.exports = postUser;
