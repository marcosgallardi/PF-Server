const postMP = require("../Controllers/postMP");

const mpHandler = async (req, res) => {
  const {id, title, description,picture_url, unit_price, quantity } = req.body;
    console.log(req.body)
  try {
    const response = await postMP(id,title,picture_url, description, unit_price, quantity);
   
    return res.status(200).json({response})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 
};

module.exports = mpHandler;
