const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET_KEY } = process.env;

const admin = require("firebase-admin");

// Configura la inicialización de Firebase Admin con las credenciales de servicio de Firebase
const serviceAccount = require("./config/serviceAccount");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


// Función para obtener el email del usuario desde Firebase por el userId
async function getUserDataFromFirebase(userId) {
  try {
    const userRecord = await admin.auth().getUser(userId);

    // Extraer el email del usuario
    const { email } = userRecord;

    return email ;
  } catch (error) {
    console.log('Error al obtener los datos del usuario desde Firebase:', error.message);
    throw error;
  }
}

// Middleware de autenticación con JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(req.headers);
    // Verificar si el encabezado de autorización está presente y tiene el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Token no proporcionado' });
    }
  
    // Extraer el token del encabezado de autorización
    const token = authHeader.split(' ')[1];

    console.log("TOKEN", token);
  
    jwt.verify(token, JWT_SECRET_KEY, async (err, user) => {
      if (err) {
        console.log("ERROR_______:",err);
        return res.status(403).json({ success: false, message: "Token inválido" });
      }
      console.log("USER__VERIFY___", user);

        // Verificar si la propiedad "source" está presente en el objeto del usuario
      if (!user.source || (user.source !== "firebase" && user.source !== "database")) {
        return res.status(403).json({ success: false, message: "Token con fuente desconocida" });
      }

      const source = user.source;
      console.log("SOURCE", source);

      if (source === "firebase") {
        // Es un token de Firebase
        // Obtener los datos del usuario desde Firebase
        const userId = user.userId;
        const email = await getUserDataFromFirebase(userId);
        req.user = { ...user, email }; // Agregar el email a los datos del usuario en el objeto de solicitud
      } else if (source === 'database') {
          // Es un token de la base de datos
          // No es necesario hacer nada adicional, ya que los datos del usuario ya están en el payload del token
        req.user = user;
      } else {
        // Fuente desconocida o no especificada
        return res.status(403).json({ success: false, message: "Token con fuente desconocida" });
      }

      console.log("MIDDLEWARE___", req.user);

      next();
    });
  }
  

  module.exports = authenticateToken;