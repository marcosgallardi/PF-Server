const {app} = require("../app")
const { Server } = require('socket.io');

const io = new Server(app, {
  cors: {
    origin: ["http://localhost:3000"],
   },
 });

const comunication = ( status )=>{
    io.on("connect", (socket) => {
        console.log("consolelog del id de socket!!!!!!!!!!!!!!!!!",socket.id);
        socket.on("authenticate", (token) => {
          try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            
          } catch (error) {
            throw error.message
          }
          io.emit("ticketCreated", status);
        });

      });
}

module.exports = comunication;