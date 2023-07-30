const enviarCorreo = require("../Notification/nodemailer");

const mailRegister = async (nombre,email) => {

  const contenido = `Hola ${nombre}. Muchas Gracias por elegirnos. su usuario se ha creado correctamente, 
  por cualquier consulta puede comunicarse a nuestro WhatsApp 11526781902 o bien llamarnos al 11325681890
  este es un mensaje automatizado, no es necesario responder`;
  let destinatario = email;
  let asunto = "Gracias por registrarse";
  return enviarCorreo(destinatario, asunto, contenido);
};

module.exports = mailRegister;