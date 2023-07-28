const {Ticket} = require('../db');

const postTicket = async ({ idsCompleteOrder,idUser }) => {
    const newTicket = await Ticket.create({ idUser,idsCompleteOrder});
  
    return newTicket.idPedido;
  };
  
  module.exports = postTicket;