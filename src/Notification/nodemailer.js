const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "smtp.forwardemail.net",
  // port: 465,
  //secure: true,
  service: "gmail",
  auth: {
    user: "elfestinonline2003@gmail.com",
    pass: "ffnuwktbhlsglynm",
  },
  tls: {
    // Si el servidor de correo utiliza un certificado autofirmado, puedes desactivar la verificación
    rejectUnauthorized: false,
    // O bien, puedes proporcionar el certificado directamente (ruta al archivo o contenido del certificado)
    // Si utilizas un certificado autofirmado, este debe estar presente en la ruta especificada
    // ca: [fs.readFileSync("/path/to/ca.pem")],
  },
});

const enviarCorreo = (destinatario, asunto, contenido) => {
  const mailOptions = {
    from: "elfestinonline2003@gmail.com",
    to: destinatario,
    subject: asunto,
    text: contenido,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
};

module.exports = enviarCorreo;
