const { Ticket } = require("../db");
const { JWT_SECRET_KEY } = process.env;
const io = require("socket.io")(5000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

//const {alertTicket} = require("../Sockets/socket");

const postTicket = async ({ idUser, idsCompleteOrder }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder });
  console.log(idUser, idsCompleteOrder, "LLEGAN????????????????");
  console.log("ticket del NEWTICKET-------------------------------", newTicket);
  //alertTicket();
  io.on("connect", (socket) => {
    socket.on("authenticate", (token) => {
      try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        console.log(socket.id);
      } catch (error) {}
    });
  });
  return newTicket;
};

module.exports = postTicket;
