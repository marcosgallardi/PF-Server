
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

const postReservation = async ({ id, date,time, decor,  quantity, confirmation, phoneNumber, zone, honoree})=>{
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

const updateReservation = async ({id, date,time, decor,  quantity, status, confirmation, phoneNumber, zone, honoree}) =>{
    let reser = await Reservation.findOne({
        where: {
            id
        }
    });

    if(!reser){
        throw new Error("No existe esa reservacion");
    }

    if(date) reser.date = date;
    if(time) reser.time = time;
    if(decor) reser.decor = decor;
    if(quantity) reser.quantity = quantity
    if(status) reser.status = status;
    if(confirmation) reser.confirmation = confirmation;
    if(phoneNumber) reser.phoneNumber = phoneNumber;
    if(zone) reser.zone = zone;
    if(honoree) reser.honoree = honoree;

    await reser.save();

    return reser;
}

module.exports = {getAllReservation, getReservation, postReservation, updateReservation}