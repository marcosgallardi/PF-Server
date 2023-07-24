const mercadopago = require("mercadopago");

const postMP = async (title, description, unit_price, quantity) => {
  mercadopago.configure({
    access_token:
      "TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523",
  });

  const preference = {
    items: [
      {
        title,
        description,
        unit_price: Number(unit_price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      //a donde va el cliente una vez que la compra finaliza, poner url de railway
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    auto_return: "approved",
  };

  try {
    let response = await mercadopago.preferences.create(preference);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = postMP;
