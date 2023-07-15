const getAllusers = require("../Controllers/getAllUsers");

const users = async (req, res) => {
  try {
    const users = await getAllusers();
    res.status(200).json(users);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = users;
