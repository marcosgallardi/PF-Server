const webHookMP = async(req, res) => {
  console.log('ESTO ES EL REQ.BODY!!!!!!!!!!!!!!',req.body);
  res.status(200).send("ok");
};

module.exports = webHookMP;
