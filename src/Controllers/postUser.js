const { User } = require("../db");
const { Op } = require("sequelize");
const mailRegister = require("./mailRegister");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const { JWT_SECRET_KEY } = process.env;

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
  
   // Crear el payload del token con la información del usuario que quieras incluir
   const payload = {
    userId: registerUser.id,
    name: registerUser.name,
    email: registerUser.email,
    source: 'database',
    // Puedes incluir más información aquí si lo deseas
  };

  // Firma el token con una clave secreta (puedes cambiar 'mi_clave_secreta' por tu propia clave)
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' }); // El token expirará en 1 hora


  return { registerUser, token};
};

module.exports = postUser;
