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
    const description = mpResponse.data.description;
    console.log("DATAAAAAAAAAAAAAAAAAAAAA", mpResponse.data);
    console.log("description____________________", description);
    // const userId = await getUserIdFromDatabase(userEmail);
    // console.log("USER_________________", userId);
    // if (!userId) {
    //   throw new Error(`User not found`);
    // } else {
    //   const tickets = await ticketByUserId(userId);
    //   await Ticket.update(
    //     { status: mpResponse.data.status },
    //     { where: { idPedido: tickets[tickets.length - 1].idPedido } }
    //   );
    // }
    console.log("CONSTANTE COPADAAAAAAAAAAAAA", mpResponse.data.status, "", mpResponse.data.payer);
  } catch (error) {
    console.error("Error:", error.message);
  }

  res.status(200).send("ok");
};

module.exports = webHookMP;
