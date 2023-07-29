const { getLocal, getLocalById, updateLocal, postLocal, deleteLocal } = require("../Controllers/controllersLocal");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");


const handlerGetLocal = async (req, res) =>{
    try {
        let localGet = await getLocal();

        res.status(200).json(localGet)
    } catch (error) {
        res.status(400).json({error: error.mesage})
    }
};

const handlerGetLocalById = async (req, res) =>{
    try {
        let {id} = req.params
        let localGet = await getLocalById(id);

        res.status(200).json(localGet)
    } catch (error) {
        res.status(400).json({error: error.mesage})
    }
};

const handlerUpLocal = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, disabled } = req.body;
  
      let imageFile = null;
      if (req.files && req.files.image) {
        imageFile = req.files.image;
      }
  
      const upLocal = await updateLocal(id, name, disabled, imageFile);
  
      res.status(200).json(upLocal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
  const handlerPostLocal = async (req, res) => {
    const { name, disabled } = req.body;
  
    try {
      const result = await uploadImage(req.files.image.tempFilePath);
      const imageURL = result.secure_url;
  
      if (req.files) {
        if (imageURL) {
          cleaner();
        }
      } else imageURL = null;
      const localImg = { name, disabled, image: imageURL };
      const newLocal = await postLocal(localImg);
  
     res.status(201).json(newLocal);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const handlerDeleLocal = async (req, res) =>{
    try {
        const {id} = req.params
        const localDele = await deleteLocal(id);

        res.status(201).json(localDele);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };


  module.exports = { handlerDeleLocal, handlerGetLocal, handlerGetLocalById, handlerPostLocal, handlerUpLocal};
  
  