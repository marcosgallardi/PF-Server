const enviarCorreo = require("../Notification/nodemailer");

const mailReservation = async ({name,email}) => {

  const contenido = `Hola ${name}. Muchas Gracias por elegirnos. su reservacion se realizo correctamente, 
  por cualquier consulta puede comunicarse a nuestro WhatsApp 11526781902 o bien llamarnos al 11325681890
  este es un mensaje automatizado, no es necesario responder`;
  let destinatario = email;
  let asunto = "Gracias por registrarse";
  return enviarCorreo(destinatario, asunto, contenido);
};

module.exports = mailReservation;