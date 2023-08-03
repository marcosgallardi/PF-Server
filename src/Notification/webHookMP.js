// const axios = require("axios");

// const webHookMP = async (req, res) => {
//   try {
//     const mpResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${req.body.data.id}`, {
//       headers: {
//         Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
//       },
//     });
//     console.log("CONSTANTE COPADAAAAAAAAAAAAA", mpResponse.data);
//     return mpResponse.data.status;
//   } catch (error) {
//     console.error("Error:", error.message);
//   }

//   res.status(200).send("ok");
// };

// module.exports = webHookMP;

const axios = require("axios");
const ticketUpdate = require("../Controllers/putPedido");
const { User, Ticket } = require("../db");
const ticketByUserId = require("../Controllers/ticketByUserId");
const getUserIdFromDatabase = require("../functions/getUserIdByEmail");

const webHookMP = async (req, res) => {
  try {
    const mpResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${req.body.data.id}`, {
      headers: {
        Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
      },
    });
    const idPedido = mpResponse.data.description.split("-")[1];
    const ticketUpdate = await Ticket.findOne({ where: { idPedido: idPedido } });

    ticketUpdate.status = mpResponse.data.status;
    await ticketUpdate.save();

    console.log("CONSTANTE COPADAAAAAAAAAAAAA", mpResponse.data.status, "", mpResponse.data.payer);
  } catch (error) {
    console.error("Error:", error.message);
  }

  res.status(200).send("ok");
};

module.exports = webHookMP;
