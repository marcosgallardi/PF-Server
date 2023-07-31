const axios = require("axios");

const webHookMP = async (req, res) => {
  const mercadopago = require("mercadopago");
  try {
    console.log('REQ.DATAAAAAAAAAAAAAAAAAAAAAAAA',req.data)
    const constanteCopada = await axios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        headers: {
          'Authorization': `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
        },
      }
    );
    console.log('CONSTANTE COPADAAAAAAAAAAAAA',constanteCopada)
    console.log('REQ.BODY.DATAAAAAAAAAAAAAAAA PITOOOOOOOOOOOOO',req.body.data)
  } catch (error) {
    console.error("Error:", error.message);
  }

  res.status(200).send("ok");
};

module.exports = webHookMP;
