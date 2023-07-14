const getAllDeserts = require("../Controllers/getAllDeserts");

const desert = async (req, res) => {
  try {
    const deserts = await getAllDeserts();
    res.status(200).json(deserts);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = desert;
