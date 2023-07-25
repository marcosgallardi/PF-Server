const enviarCorreo = require("../Notification/nodemailer");
const { User } = require("../db");

const mailCreate = async (order, userId) => {
  const { idPedido } = order;

  console.log(order)

  const { name, email } = await User.findOne({
    where: {
      id: userId,
    },
  });

  const contenido = `Hola ${name}. Muchas Gracias por elegirnos. Recibimos tu pedido correctamente, ahora mismo estamos preparándolo. 
  Su N° de orden: ${idPedido}
  
  El tiempo de demora es 30 minutos, debe retirarlo en calle falsa 123. 
  De todas maneras le avisaremos cuando esté listo. 
  Por cualquier duda o consulta puede responder este mensaje, también puede comunicarse a nuestro WhatsApp 11526781902 o bien llamarnos al 11325681890
   `;
   let destinatario = email;
   let asunto = "Su pedido esta en proceso!";

return  enviarCorreo(destinatario, asunto, contenido);
 
};

module.exports = mailCreate;
