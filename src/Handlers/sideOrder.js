const getSideOrder = require("../Controllers/getSideOrder");

const sideOrder = async (req, res) => {
  try {
    const sideOrder = await getSideOrder();

    res.status(200).json(sideOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = sideOrder;
