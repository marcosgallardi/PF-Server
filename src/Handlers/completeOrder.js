const getCompleteOrder = require("../Controllers/getCompleteOrder");

const completeOrder = async (req, res) => {
  try {
    const completeOrder = await getCompleteOrder();

    res.status(200).json(completeOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = completeOrder;
