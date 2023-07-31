const axios = require("axios");

const webHookMP = async (req, res) => {
  const mercadopago = require("mercadopago");
  try {
    const constanteCopada = await axios.getaxios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.id}`,
      {
        headers: {
          Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
        },
      }
    );
    console.log(constanteCopada)
  } catch (error) {
    console.error("Error:", error.message);
  }

  res.status(200).send("ok");
};

module.exports = webHookMP;
