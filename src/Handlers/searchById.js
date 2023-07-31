const getById = require('../Controllers/getById')
const searchById = async (req, res) => {
    const {id}= req.params;
  try {
    const search = await getById(id);

  
    res.status(200).json(search);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = searchById;