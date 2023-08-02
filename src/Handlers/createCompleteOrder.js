const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const getUserIdFromDatabase = require("../functions/getUserIdByEmail");
const axios = require("axios");

let mpresponse = null;

const webHookMP = async (req, res) => {
  const { id } = req.body.data;
  try {
    mpresponse = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
      },
    });
    console.log("MPRESPONSE!!!!!!!!!!!________", mpresponse.data.status);
    res.status(200).send("ok"); // Return a value to indicate successful completion
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const createCompleteOrder = async (req, res) => {
  const { order } = req.body;
  try {
    // Use Promise.all to run both functions in parallel and wait for their results
    const [webHookResult, userId] = await Promise.all([webHookMP(req, res), getUserId(req.user)]);

    if (mpresponse !== undefined) {
      const newCompleteOrder = await postCompleteOrder({ order, userId });
      return res.status(201).json(newCompleteOrder);
    } else {
      // Handle error from webhook if needed
      return res.status(500).json({ error: "Error en webhook" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserId = async (user) => {
  if (user.source === "firebase") {
    return await getUserIdFromDatabase(user.email);
  } else if (user.source === "database") {
    return user.userId;
  } else {
    throw new Error("Error al obtener el usuario");
  }
};

module.exports = createCompleteOrder;

// let mpresponse = null;

// const webHookMP = async (req, res) => {
//   const { id } = req.body.data;
//   try {
//     mpresponse = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
//       headers: {
//         Authorization: `Bearer TEST-840963076660337-072117-1b995a17b690f7df7a5adf4428a413ac-639906523`,
//       },
//     });
//     // console.log('CONSTANTE COPADAAAAAAAAAAAAA',mpResponse.data.status)
//     // return mpresponse.data.status;
//   } catch (error) {
//     console.error("Error:", error.message);
//   }

//   res.status(200).send("ok");
// };

// ///////////////////////////---------------------------//////////////////////////////////////////////////
// const createCompleteOrder = async (req, res) => {
//   const { order } = req.body;
//   console.log(mpresponse.data.status, "MPRESPONSE!!!!!!!!!!!!!!!!!!!!!!!");
//   try {
//     let userId = "";

//     if (req.user.source === "firebase") {
//       userId = await getUserIdFromDatabase(req.user.email);
//     } else if (req.user.source === "database") {
//       userId = req.user.userId;
//     } else {
//       res.status(400).json({ error: "Error al obtener el usuario" });
//     }

//     const newCompleteOrder = await postCompleteOrder({ order, userId });

//     return res.status(201).json(newCompleteOrder);
//   } catch (error) {
//     return res.status(200).json({ error: error.message });
//   }
// };

// module.exports = createCompleteOrder;
// module.exports = webHookMP;
