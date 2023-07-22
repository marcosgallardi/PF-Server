const { User } = require("../db");
const { Op } = require("sequelize");

//la validacion NO deberia ser con el name, sino con el email
const postUser = async ({ name, lastName, email, password, birthDate, phoneNumber }) => {
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
  const newUser = await User.create({
    name,
    lastName,
    email,
    password,
    birthDate,
    phoneNumber,
  });
  //   if (!name || !description || !releaseDate || !rating || !genres || !platforms) {
  //     throw new Error("Todos los campos son requeridos.");
  //   }

  return newUser;
};

module.exports = postUser;
