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
            } = req.body;

            let imageFile = null;
      if (req.files && req.files.image) {
        imageFile = req.files.image;
      }


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
           imageFile) 

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
           disabled,
           alcohol,
           stock,
           price,
           } = req.body;

           let imageFile = null;
      if (req.files && req.files.image) {
        imageFile = req.files.image;
      }


        const drinkUP = await updateDrink(id,  name,
            volume,
           type,
           disabled,
           alcohol,
           stock,
           price,
           imageFile) 

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
            disabled,
           price,
           } = req.body;

           let imageFile = null;
      if (req.files && req.files.image) {
        imageFile = req.files.image;
      }


        const deserthUP = await updateDesert(id, name,
            stock,
            disabled,
           price,
           imageFile) 

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
            disabled,
            price,
        } = req.body;

            let imageFile = null;
            if (req.files && req.files.image) {
              imageFile = req.files.image;
            }

        const sideUP = await updateSide(id, name,
            type,
            available,
            disabled,
            price,
            imageFile) 

           res.status(200).json(sideUP)
    } catch (error) {
        res.status(200).json({ error: error.message });
    }

}


module.exports = {handlerDish, handlerDesert, handlerDrink, handlerSide};