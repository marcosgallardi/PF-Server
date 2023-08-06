const { async } = require("@firebase/util");
const {
  postReservation,
  getReservation,
  getAllReservation,
  updateReservation,
  getReservationByUser,
  deleteReservation,
} = require("../Controllers/controllersReservation");
const e = require("express");

const handlersPostReser = async (req, res) => {
  try {
    const { date, time, decor, quantity, phoneNumber, zone, honoree } = req.body;
    const { id } = req.body;

    const newReser = await postReservation({
      id,
      date,
      time,
      decor,
      quantity,
      phoneNumber,
      zone,
      honoree,
    });

    res.status(200).json(newReser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetReser = async (req, res) => {
  try {
    const { date } = req.params;
    console.log(date, "date____________");
    const getReser = await getReservation({ date });
    res.status(200).json(getReser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetAllReser = async (req, res) => {
  try {
    const getReser = await getAllReservation();
    res.status(200).json(getReser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerUpReser = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time, decor, quantity, status, phoneNumber, zone, honoree } = req.body;

    const updateReser = await updateReservation({
      id,
      date,
      time,
      decor,
      quantity,
      status,
      phoneNumber,
      zone,
      honoree,
    });
    res.status(200).json(updateReser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerReserByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const reservByUser = await getReservationByUser({ id });
    res.status(200).json(reservByUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const handlerDeleteReser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteReser = await deleteReservation({ id });

    res.status(200).json(deleteReser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlersPostReser,
  handlerGetAllReser,
  handlerGetReser,
  handlerUpReser,
  handlerReserByUserId,
  handlerDeleteReser,
};
