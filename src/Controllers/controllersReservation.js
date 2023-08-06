
const {User, Reservation} = require("../db")


//esto deberia ser getReservationByDate o byTime, reveer
const getReservation = async ({date})=>{
    let getByDate = await Reservation.findOne({
        where:{
            date
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

const postReservation = async ({ id, date,time, decor,  quantity, status, phoneNumber, zone, honoree})=>{
    /* let exist = await Reservation.findOne({
        where: {
           eventDate
        }
    }); */

    /* if (exist){
        throw Error("Fecha ocupada")
    } */

    let user = await User.findOne({
        where:{
            id
        }
    })

    console.log(user);
    let newReservation = await Reservation.create({
        UserId: user.id,
        date,
        time, 
        decor, 
        quantity, 
        status, 
        phoneNumber, 
        zone, 
        honoree,
        name: user.name, 
        lastName: ""
    }
    
      );

      return newReservation
};

module.exports = {getAllReservation, getReservation, postReservation}