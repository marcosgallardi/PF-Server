const comunication = ( status )=>{
    io.on("connect", (socket) => {
        console.log("consolelog del id de socket!!!!!!!!!!!!!!!!!",socket.id);
        socket.on("authenticate", (token) => {
          try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            io.emit("ticketCreated", status);
          } catch (error) {
            throw error.message
          }
        });
      });
}

module.exports = comunication;