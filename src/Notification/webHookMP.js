const axios = require("axios");
const mailCreate = require("../Controllers/mailCreate");
const mailRejected = require("../Controllers/mailRejected");
const { Ticket } = require("../db");

const {io} = require("../app")




const webHookMP = async (req, res) => {
  try {
    const mpResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${req.body.data.id}`, {
      headers: {
        Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
      },
    });
    /* console.log("TITULOOOOOOOOOOOOOOOOOO", mpResponse.data.title); */

    const idPedido = mpResponse.data.description.split("-")[1];
    const ticketUpdate = await Ticket.findOne({ where: { idPedido: idPedido } });

    if (mpResponse.data.status === "approved") {
      ticketUpdate.status = "Aprobado";
      await mailCreate(ticketUpdate.idUser, idPedido);
    } else if (mpResponse.data.status === "rejected") {
      ticketUpdate.status = "Rechazado";
      
      await mailRejected(ticketUpdate.idUser, idPedido);
    }
    
    await ticketUpdate.save();

    io.emit("ticketCreated",ticketUpdate.status)

    /* console.log("CONSTANTE COPADAAAAAAAAAAAAA", mpResponse.data.status); */
  } catch (error) {
    console.error("Error:", error.message);
  }

  res.status(200).send("ok");
};

module.exports = webHookMP;
