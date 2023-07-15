const { User } = require("../db");

const getAllUsers = async () => {
  const users = await User.findAll();
  if (users.length > 0) return users;
  else throw Error("there are no users in the database");
};

module.exports = getAllUsers;
