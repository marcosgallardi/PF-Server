const { Side } = require("../db");

const getAllSides = async () => {
  const sides = await Side.findAll();
  if (sides.length > 0) return sides;
  else throw Error("No sides found");
};

module.exports = getAllSides;
