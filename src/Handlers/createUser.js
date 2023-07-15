const postUser = require("../Controllers/postUser");

const createUser = async (req, res) => {
  const { name, lastName, email, password, birthDate, phoneNumber } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const newUser = await postUser(name, lastName, email, password, birthDate, phoneNumber);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createUser;
