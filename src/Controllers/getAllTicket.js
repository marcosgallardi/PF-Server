const { Ticket } = require("../db");

const getAllTicket = async () => {
  try {
    const tickets = await Ticket.findAll();

    // Ajustar la hora local de createdAt en cada ticket al obtener los datos
    const adjustedTickets = tickets.map((ticket) => {
      const [hours, minutes] = ticket.createdAt.split(":");
      let adjustedHours = parseInt(hours, 10) - 2;

      // Manejar las horas negativas
      if (adjustedHours < 0) {
        adjustedHours += 24; // Agregar 24 horas para obtener la hora ajustada positiva
      }

      const adjustedTime = `${String(adjustedHours).padStart(2, "0")}:${minutes}`;
      console.log(adjustedTime);
      return {
        ...ticket.toJSON(),
        adjustedCreatedAt: adjustedTime,
      };
    });

    if (adjustedTickets.length > 0) {
      console.log(adjustedTickets);
      return adjustedTickets;
    } else {
      throw new Error("There are no tickets in the database");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getAllTicket;
