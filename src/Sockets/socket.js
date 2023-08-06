/*const { Server } = require("socket.io");
const { JWT_SECRET_KEY } = process.env;


function initializeSocket(app) {
  const io = new Server(app, {
    cors: {
      origin: "http://localhost:3000", // Permite todas las solicitudes desde cualquier origen
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
      allowedHeaders: "Content-Type,Authorization",
    },
  });

  return io;
}

const alertTicket = (io) => {
  const objetito = {
    nombre: "albertito",
    apellido: "fitipuchi",
  };

  io.on("connection", (socket) => {
    socket.on("authenticate", (token) => {
      try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        socket.emit("prueba", objetito);
        console.log('Token válido, usuario autenticado:', decoded);
      } catch (error) {
        console.error("Error al verificar el token:", error.message);
      }
    });
   
  });
  
};

module.exports = { initializeSocket, alertTicket };
*/