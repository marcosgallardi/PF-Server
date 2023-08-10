const { Dish } = require("../db");
const { Op } = require("sequelize");

const postDish = async ({
  name,
  description,
  type,
  subtype,
  disabled,
  available,
  calories,
  glutenfree,
  vegetarian,
  stock,
  dailyspecial,
  price,
  image,
}) => {
  const existingDish = await Dish.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });
  // console.log(
  //   "todo eso",
  //   name,
  //   description,
  //   type,
  //   subtype,
  //   disabled,
  //   available,
  //   stock,
  //   calories,
  //   glutenfree,
  //   vegetarian,
  //   dailyspecial,
  //   price,
  //   image
  // );
  if (existingDish) {
    throw new Error("El nombre del plato ya existe.");
  }
  const newDish = await Dish.create({
    name,
    description,
    type,
    subtype,
    disabled,
    available,
    calories,
    stock,
    glutenfree,
    vegetarian,
    dailyspecial,
    price,
    image,
  });

  return newDish;
};

module.exports = postDish;
