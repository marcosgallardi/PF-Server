

const alertTicket = (io) => {
  const objetito = {
    nombre: "ediverto",
    apellido: "fitipuchi",
  };

  io.on("connection", (socket) => {
    socket.emit("prueba", objetito);
  });
};


module.exports = alertTicket;