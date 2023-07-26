const {updateDish, updateDesert, updateDrink, updateSide} = require("../Controllers/controllersPut");




const handlerDish = async(req, res)=>{

    try {
        const {id} = req.params;
        const { name,
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
            image} = req.body;


        const dishUP = await updateDish(id, name,
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
           image) 

           res.status(200).json(dishUP)
    } catch (error) {
        res.status(200).json({ error: error.message });
    }

}

const handlerDrink = async(req, res)=>{

    try {
        const {id} = req.params;
        const {  name,
            volume,
           type,
           alcohol,
           stock,
           price,
           image} = req.body;


        const drinkUP = await updateDrink(id,  name,
            volume,
           type,
           alcohol,
           stock,
           price,
           image) 

           res.status(200).json(drinkUP)
    } catch (error) {
        res.status(200).json({ error: error.message });
    }

}  

const handlerDesert = async(req, res)=>{

    try {
        const {id} = req.params;
        const { name,
            stock,
           price,
           image} = req.body;


        const deserthUP = await updateDesert(id, name,
            stock,
           price,
           image) 

           res.status(200).json(deserthUP)
    } catch (error) {
        res.status(200).json({ error: error.message });
    }

} 


const handlerSide = async(req, res)=>{

    try {
        const {id} = req.params;
        const { name,
            type,
            available,
            price,
            image} = req.body;


        const sideUP = await updateSide(id, name,
            type,
            available,
            price,
            image) 

           res.status(200).json(sideUP)
    } catch (error) {
        res.status(200).json({ error: error.message });
    }

}


module.exports = {handlerDish, handlerDesert, handlerDrink, handlerSide};