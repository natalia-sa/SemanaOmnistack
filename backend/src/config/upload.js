// o express nao entende os diversos formatos de dados. Precisamos indicar quais fomratos serão enviados

// instala-se a lib multer

const multer = require('multer');
const path = require('path');

// dizendo como o multer vai armazenar os arquivos
module.exports = {
    // onde serao gravados os arquivos
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..','uploads'),
        
        filename: (req, file, cb) => {
            const ext =  path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, name + '-' + Date.now() + ext);
        }
    }),
};