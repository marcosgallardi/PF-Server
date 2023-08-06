const { Ticket } = require("../db");
/*const { JWT_SECRET_KEY } = process.env;
const io = require("socket.io")(5000, {
 cors: {
   origin: ["http://localhost:3000"],
  },
});

io.on("connect", (socket) => {
  console.log("consolelog del id de socket!!!!!!!!!!!!!!!!!",socket.id);
  socket.on("authenticate", (token) => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
      throw error.message
    }
  });
});*/

//const {alertTicket} = require("../Sockets/socket");

const postTicket = async ({ idUser, idsCompleteOrder,totalPrice }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder,totalPrice });
  console.log(idUser, idsCompleteOrder, "LLEGAN????????????????");
  console.log("ticket del NEWTICKET-------------------------------", newTicket);
 
  //io.emit("ticketCreated",newTicket.status)
  return newTicket;
};

module.exports = postTicket;
