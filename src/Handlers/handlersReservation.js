const { async } = require("@firebase/util");
const { postReservation, getReservation, getAllReservation } = require("../Controllers/controllersReservation")



const handlersPostReser = async (req, res) => {
try {
    const {
        date,
        time, 
        decor, 
        quantity, 
        confirmation, 
        phoneNumber, 
        zone, 
        honoree
    } = req.body
        const {id} = req.body


    const newReser = await postReservation({
        id,
        date, 
        time,
        decor, 
        quantity, 
        confirmation, 
        phoneNumber, 
        zone, 
        honoree,
        })

    res.status(200).json(newReser)
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

const handlerGetReser = async (req, res) =>
{
    try {
        const {eventDate} = req.params
        console.log(req.params);
        const getReser = await getReservation({eventDate});
        res.status(200).json(getReser)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
}

const handlerGetAllReser = async (req, res) =>
{
    try {
        const getReser = await getAllReservation();
        res.status(200).json(getReser)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
}



module.exports = {handlersPostReser, handlerGetAllReser, handlerGetReser};