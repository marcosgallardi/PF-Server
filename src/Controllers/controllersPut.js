const {Drink, Dish, Side, Desert} = require("../db");
const uploadImage = require("../config/cloudinary");

const updateDish = async ( id, name,
    description,
   type,
   subtype,
   disabled,
   available,
   calories,
   glutenfree,
   vegetarian,
   dailyspecial,
   price,
   imageFile) => {

    let update = await Dish.findOne({
        where:{
            id
        } });

        if (!update) {
           throw Error('Plato no encontrado');
          }
      

        if (name) update.name = name;
    if (description) update.description = description;
    if (type) update.type = type;
    if (subtype) update.subtype = subtype;
    if (disabled !== undefined) update.disabled = disabled;
    if (available !== undefined) update.available = available;
    if (calories !== undefined)update.calories = calories;
    if (glutenfree !== undefined) update.glutenfree = glutenfree;
    if (vegetarian !== undefined) update.vegetarian = vegetarian;
    if (dailyspecial !== undefined) update.dailyspecial = dailyspecial;
    if (price !== undefined) update.price = price;
    if (imageFile){
        const result = await uploadImage(imageFile.tempFilePath);
        update.image = result.secure_url;
     } 

          await update.save();
          console.log(update);
        return update;
}

const updateDrink = async ( id, name,
    volume,
   type,
   alcohol,
   stock,
   disabled,
   price,
   imageFile) => {

    let update = await Drink.findOne({
        where:{
            id
        } });

        if (!update) {
           throw Error('Plato no encontrado');
          }
      

    if (name) update.name = name;
    if (volume) update.volume = volume;
    if (type) update.type = type;
    if (stock) update.stock = stock;
    if (disabled !== undefined) update.disabled = disabled;
    if (alcohol!== undefined) update.alcohol = alcohol;
    if (price !== undefined) update.price = price;
    if (imageFile){
        const result = await uploadImage(imageFile.tempFilePath);
        update.image = result.secure_url;
     } 

          await update.save();
          console.log(update);
        return update;
}

const updateDesert = async ( id, name,
    stock,
    disabled,
   price,
   imageFile) => {

    let update = await Desert.findOne({
        where:{
            id
        } });

        if (!update) {
           throw Error('Plato no encontrado');
          }
      

        if (name) update.name = name;
    if (stock) update.stock = stock;
    if (disabled !== undefined) update.disabled = disabled;
    if (price !== undefined) update.price = price;
    if (imageFile){
        const result = await uploadImage(imageFile.tempFilePath);
        update.image = result.secure_url;
     } 

          await update.save();
          console.log(update);
        return update;
}

const updateSide = async ( id, name,
   type,
   disabled,
   available,
   price,
   imageFile) => {

    let update = await Side.findOne({
        where:{
            id
        } });

        if (!update) {
           throw Error('Plato no encontrado');
          }
      

    if (name) update.name = name;
    if (type) update.type = type;
    if (disabled !== undefined) update.disabled = disabled;
    if (available !== undefined) update.available = available;
    if (price !== undefined) update.price = price;
    if (imageFile){
        const result = await uploadImage(imageFile.tempFilePath);
        update.image = result.secure_url;
     } 

          await update.save();
          console.log(update);
        return update;
}



module.exports= {updateDish, updateDesert, updateDrink, updateSide};