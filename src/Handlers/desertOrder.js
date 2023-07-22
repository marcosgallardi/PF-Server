const getDesertOrder = require("../Controllers/getDesertOrder");

const desertOrder = async (req, res) => {
  try {
    const desertOrder = await getDesertOrder();

    res.status(200).json(desertOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = desertOrder;
