const postMP = require("../Controllers/postMP");

const mpHandler = async (req, res) => {
  const { title, unit_price, quantity } = req.body;
    console.log(req.body)
  try {
    const response = await postMP(title, unit_price, quantity);
   
    return res.status(200).json({response})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 
};

module.exports = mpHandler;
