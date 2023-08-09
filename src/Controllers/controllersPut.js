const { Drink, Dish, Side, Desert, User } = require("../db");
const uploadImage = require("../config/cloudinary");

const updateDish = async ({
  id,
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
  imageFile,
}) => {
  let update = await Dish.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Plato no encontrado");
  }

  if (name) update.name = name;
  if (description) update.description = description;
  if (type) update.type = type;
  if (stock) update.stock = stock;
  if (subtype) update.subtype = subtype;
  if (disabled !== undefined) update.disabled = disabled;
  if (available !== undefined) update.available = available;
  if (calories !== undefined) update.calories = calories;
  if (glutenfree !== undefined) update.glutenfree = glutenfree;
  if (vegetarian !== undefined) update.vegetarian = vegetarian;
  if (dailyspecial !== undefined) update.dailyspecial = dailyspecial;
  if (price !== undefined) update.price = price;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  console.log(update);
  return update;
};

const updateDrink = async ({
  id,
  name,
  volume,
  category,
  type,

  alcohol,
  stock,
  available,
  disabled,
  price,
  imageFile,
}) => {
  let update = await Drink.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Bebida no encontrado");
  }

  if (name) update.name = name;
  if (volume) update.volume = volume;
  if (category) update.category = category;
  if (type) update.type = type;
  if (stock !== undefined) update.stock = stock;
  if (disabled !== undefined) update.disabled = disabled;
  if (alcohol !== undefined) update.alcohol = alcohol;
  if (available !== undefined) update.available = available;
  if (price !== undefined) update.price = price;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  //   console.log(update);
  return update;
};

const updateDesert = async ({ id, name, stock, disabled, price, imageFile }) => {
  let update = await Desert.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Postre no encontrado");
  }

  if (name) update.name = name;
  if (stock) update.stock = stock;
  if (disabled !== undefined) update.disabled = disabled;
  if (price !== undefined) update.price = price;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  //   console.log(update);
  return update;
};

const updateSide = async ({ id, name, type, disabled, available, price, imageFile }) => {
  let update = await Side.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Acompañante no encontrado");
  }

  if (name) update.name = name;
  if (type) update.type = type;
  if (disabled !== undefined) update.disabled = disabled;
  if (available !== undefined) update.available = available;
  if (price !== undefined) update.price = price;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  //   console.log(update);
  return update;
};

const updateUser = async ({ id, name, lastName, email, password, birthDate, phoneNumber, imageFile, role }) => {
  let update = await User.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Usuario no encontrado");
  }

  if (name) update.name = name;
  if (lastName) update.lastName = lastName;
  if (email) update.email = email;
  if (password) update.password = password;
  if (birthDate) update.birthDate = birthDate;
  if (phoneNumber) update.phoneNumber = phoneNumber;
  if (role) update.role = role;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  //   console.log(update);
  return update;
};

module.exports = { updateDish, updateDesert, updateDrink, updateSide, updateUser };
