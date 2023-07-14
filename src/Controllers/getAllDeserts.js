const { Desert } = require("../db");

const getAllDeserts = async () => {
  const deserts = await Desert.findAll();
  if (deserts.length > 0) return deserts;
  else throw Error("No deserts found");
};

module.exports = getAllDeserts;
