const mercadopago = require("mercadopago");

const postMP = async (id,picture_url,title, description, unit_price, quantity) => {
  mercadopago.configure({
    access_token:
      "TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523",
  });

  const preference = {
    items: [
      {
        id,
        title,
        description,
        picture_url,
        unit_price: Number(unit_price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      //a donde va el cliente una vez que la compra finaliza, poner url de railway
      success: "https://pf-front-end-grupo3.vercel.app/",
      failure: "https://pf-front-end-grupo3.vercel.app/home",
      pending: "https://pf-front-end-grupo3.vercel.app/home",
    },
    auto_return: "approved",
  };

  try {
    let response = await mercadopago.preferences.create(preference);
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = postMP;
