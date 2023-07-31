const webHookMP = async(req, res) => {
const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken("TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523");

  mercadopago.payment.save(payment_data)
  .then(function(response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
    });
    console.log('ESTO ES EL REQ.BODY!!!!!!!!!!!!!!',response);
  })
  .catch(function(error) {
    res.status(response.status).send(error);
  });
  //res.status(200).send("ok");
};

module.exports = webHookMP;
