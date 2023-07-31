const webHookMP = async(req, res) => {
  
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
