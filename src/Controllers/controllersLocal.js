const { Local } = require("../db");
const uploadImage = require("../config/cloudinary");
const { Op } = require("sequelize");

const getLocal = async () => {
  let localg = await Local.findAll();

  if (!localg) {
    throw Error("No hay imagenes del local");
  }

  return localg;
};

const getLocalById = async ({ id }) => {
  let localg = await Local.findOne({
    where: {
      id,
    },
  });

  if (!localg) {
    throw Error("Imagen del local no encontrada");
  }

  return localg;
};

const updateLocal = async ({ id, name, disabled, imageFile }) => {
  let update = await Local.findOne({
    where: {
      id,
    },
  });

  if (!update) {
    throw Error("Imagen del local no encontrada");
  }

  if (name) update.name = name;
  if (disabled !== undefined) update.disabled = disabled;
  if (imageFile) {
    const result = await uploadImage(imageFile.tempFilePath);
    update.image = result.secure_url;
  }

  await update.save();
  /* console.log(update); */
  return update;
};

const postLocal = async ({ name, disabled, image }) => {
  // console.log(name, "NAMEEEE");
  const exists = await Local.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });

  if (exists) {
    throw Error("Ya existe la imagen");
  }
  const newLocal = await Local.create({
    name,
    disabled,
    image,
  });

  return newLocal;
};

const deleteLocal = async ({ id }) => {
  const localDele = await Local.findOne({ where: { id } });

  if (!localDele) {
    throw Error("Imagen no existe");
  }
  await localDele.destroy();

  return "Imagen Borrado";
};

module.exports = { getLocal, getLocalById, updateLocal, postLocal, deleteLocal };
