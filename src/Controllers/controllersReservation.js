
const {User, Reservation} = require("../db")


const getReservation = async ({eventDate})=>{
    let getByDate = await Reservation.findOne({
        where:{
            eventDate
        }
    })
    if(!getByDate) throw Error("No hay Reservacion para esa fecha");
    else return getByDate
};


const getAllReservation = async ()=>{
    let getByDate = await Reservation.findAll()
    if(!getByDate) throw Error("No hay Reservacion");
    else return getByDate
};

const postReservation = async ({ id, eventDate, decor,  quantity, confirmation, phoneNumber, zone, honoree})=>{
    let exist = await Reservation.findOne({
        where: {
           eventDate
        }
    });

    if (exist){
        throw Error("Fecha ocupada")
    }

    let user = await User.findOne({
        where:{
            id
        }
    })

    console.log(user);
    let newReservation = await Reservation.create({
        UserId: user.id,
        eventDate, 
        decor, 
        quantity, 
        confirmation, 
        phoneNumber, 
        zone, 
        honoree,
        name: user.name, 
        lastName: user.lastName
    }
    
      );

      return newReservation
};

module.exports = {getAllReservation, getReservation, postReservation}