const getAllDeserts = require("../Controllers/getAllDeserts");
const getByName = require("../Controllers/getByName");

const desert = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const deserts = await getByName(name);
      res.status(200).json(deserts);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  } else {
    try {
      const deserts = await getAllDeserts();
      res.status(200).json(deserts);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  }
};

module.exports = desert;
