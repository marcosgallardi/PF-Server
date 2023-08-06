const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getUserIdFromDatabase = require('../../functions/getUserIdByEmail')

const admin = require("firebase-admin");

const { JWT_SECRET_KEY } = process.env;

const createJWTRouter = Router();

createJWTRouter.post("/", async (req, res) => {
  const { firebaseToken } = req.body;
  try {

    // Verificar el token de acceso de Firebase para obtener la información del usuario
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken)

    const user = await getUserIdFromDatabase(decodedToken.email)

    const userRole = user.role
   /*  console.log("________DECODED TOKEN__________", decodedToken); */
    // El token es válido, puedes proceder a generar el JWT personalizado
    const customToken = jwt.sign(
      { userId: decodedToken.uid, source: "firebase", role: userRole, id: user.id },
      JWT_SECRET_KEY,
      { expiresIn: "8h" }
    );
    // console.log("________CUSTOM TOKEN__________", customToken);
    // Devolver el nuevo token JWT personalizado al frontend
    res.json({ success: true, token: customToken });

  } catch (error) {
    // El token es inválido o ha expirado
    console.error("Error al verificar el token de Firebase:", error);
    return res.status(403).json({ success: false, message: "Token de acceso inválido" });
  };
});

module.exports = createJWTRouter;
