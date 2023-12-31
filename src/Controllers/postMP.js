const mercadopago = require("mercadopago");

const postMP = async (title, unit_price, quantity) => {
  mercadopago.configure({
    access_token: "TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523",
  });

  const preference = {
    items: [
      {
        title,

        unit_price: Number(unit_price),
        quantity: Number(quantity),
      },
    ],

    back_urls: {
      success: "https://pf-front-end-grupo3.vercel.app/payment-success",
      failure: "https://pf-front-end-grupo3.vercel.app/payment-failed",
    },
    //   //a donde va el cliente una vez que la compra finaliza, poner url de railway
    //   success: "https://pf-front-end-grupo3.vercel.app/",
    //   failure: "https://pf-front-end-grupo3.vercel.app/home",
    //   // pending: "https://pf-front-end-grupo3.vercel.app/home",
    // },
    redirect_urls: {
      //a donde va el cliente una vez que la compra finaliza, poner url de railway
      success: "localhost:3000/payment-success",
      failure: "localhost:3000/payment-failed",
      // pending: "https://pf-front-end-grupo3.vercel.app/home",
    },
    auto_return: "approved",
  };

  try {
    let response = await mercadopago.preferences.create(preference);
    /* console.log("RESPONSEEEEEE", response); */
    return response;
  } catch (error) {
    console.log("ERRORRRRRRR", error);
  }
};

module.exports = postMP;
