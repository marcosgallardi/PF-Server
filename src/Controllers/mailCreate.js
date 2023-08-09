const enviarCorreo = require("../Notification/nodemailer");
const { User } = require("../db");

const mailCreate = async (userId, order) => {
  /* console.log(order); */

  const { name, email } = await User.findOne({
    where: {
      id: userId,
    },
  });

  const contenido = `Hola ${name}. Muchas Gracias por elegirnos. Recibimos tu pedido correctamente, ahora mismo estamos preparándolo. 
  Su N° de orden: ${order}
  
  El tiempo de demora puede variar, te avisaremos por este medio cuando este listo. Debe retirarlo en calle falsa 123.  
  Puede comunicarse a nuestro WhatsApp 11526781902 o bien llamarnos al 11325681890
   `;
  let destinatario = email;
  let asunto = "Su pedido esta en proceso!";

  return enviarCorreo(destinatario, asunto, contenido);
};

module.exports = mailCreate;
