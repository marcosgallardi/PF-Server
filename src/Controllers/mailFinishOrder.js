const enviarCorreo = require("../Notification/nodemailer");
const { User } = require("../db");
const mailFinishOrder = async (ticket) => {
  // console.log("lo que llega por ticket", ticket);
  const { idUser } = ticket.dataValues;

  const { name, email } = await User.findOne({
    where: {
      id: idUser,
    },
  });
  // console.log("lo que llega name y email", name, email)
  const contenido = `Hola de nuevo ${name}. Tu pedido esta listo!
  Gracias por comprar en el Festin Online!`;
  let destinatario = email;
  let asunto = "Su pedido esta listo!";

  return enviarCorreo(destinatario, asunto, contenido);
};

module.exports = mailFinishOrder;
