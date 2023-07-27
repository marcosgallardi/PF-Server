const getUserById = require("../Controllers/getUserById");

const userById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = userById;
