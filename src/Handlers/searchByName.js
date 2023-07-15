const getByName = require("../Controllers/getByName");

const search = async (req, res) => {
    const {name}= req.query;
  try {
    const paquete = await getByName(name);
    res.status(200).json(paquete);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = search;