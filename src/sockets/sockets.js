const {io} = require("../app")


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