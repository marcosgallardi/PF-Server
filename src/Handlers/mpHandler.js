const postMP = require("../Controllers/postMP");

const mpHandler = async (req, res) => {
  const { title, description, unit_price, quantity } = req.body;
  console.log(title, description, unit_price, quantity)
  try {
    const response = await postMP(title, description, unit_price, quantity);
    console.log(response)
    res.json({
      id: response.body.id,
      init_point: response.body.init_point
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 
};

module.exports = mpHandler;
