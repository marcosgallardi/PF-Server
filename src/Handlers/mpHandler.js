const postMP = require("../Controllers/postMP");
const getUserIdFromDatabase = require("../functions/getUserIdByEmail");

const mpHandler = async (req, res) => {
  const { title, unit_price, quantity } = req.body;
  // console.log(req.body)

  try {
    // let userId = "";

    // if (req.user.source === "firebase") {
    //   userId = await getUserIdFromDatabase(req.user.email);
    // } else if (req.user.source === "database") {
    //   userId = req.user.userId;
    // } else {
    //   res.status(400).json({ error: "Error al obtener el usuario" });
    // }

    const response = await postMP(title, unit_price, quantity);
    /* console.log("RESPONSE!!!!!!!!!!!!!!!!!!!!", response); */
    return res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = mpHandler;
