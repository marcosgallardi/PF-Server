const mailRejected = async (userId, order) => {
  try {
    const { name, email } = await User.findOne({
      where: {
        id: userId,
      },
    });

    const contenido = `Hola ${name}. Lamentablemente tu pedido con N° de orden ${order} ha sido rechazado.
      Si tienes alguna duda o consulta, por favor contáctanos a través de nuestro WhatsApp 11526781902 o llámanos al 11325681890.
      `;
    const destinatario = email;
    const asunto = "Tu pedido ha sido rechazado";

    return enviarCorreo(destinatario, asunto, contenido);
  } catch (error) {
    console.error("Error sending rejection email:", error.message);
  }
};
module.exports = mailRejected;
