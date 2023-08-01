const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const admin = require("firebase-admin");

const { JWT_SECRET_KEY } = process.env;

const createJWTRouter = Router();

createJWTRouter.post("/", (req, res) => {
  const { firebaseToken } = req.body;

  // Verificar el token de acceso de Firebase para obtener la información del usuario
  admin
    .auth()
    .verifyIdToken(firebaseToken)
    .then((decodedToken) => {
      // El token es válido, puedes proceder a generar el JWT personalizado
      const customToken = jwt.sign(
        { userId: decodedToken.uid, source: "firebase" },
        JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      console.log("________CUSTOM TOKEN__________", customToken);
      // Devolver el nuevo token JWT personalizado al frontend
      res.json({ success: true, token: customToken });
    })
    .catch((error) => {
      // El token es inválido o ha expirado
      console.error("Error al verificar el token de Firebase:", error);
      return res
        .status(403)
        .json({ success: false, message: "Token de acceso inválido" });
    });
});

module.exports = createJWTRouter;
