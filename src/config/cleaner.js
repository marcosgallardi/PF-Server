const fs = require('fs');
const path = require('path');


const cleaner = async () => {
    const uploadFolderPath = path.join(__dirname, '..', '..', 'uploads')
    return(
        fs.readdir(uploadFolderPath, (err, files) => {
          if(err) {
            console.error('Error al leer los archivos: '), err;
          }else {
            files.forEach((file) => {
              const filePath = path.join(uploadFolderPath, file);
              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error('Error al eliminar el archivo: '), err;
                } else {
                  console.log(`Archivo ${filePath} eliminado con éxito`)
                }
              })
            })
          }
        })
    )
}


module.exports=cleaner;