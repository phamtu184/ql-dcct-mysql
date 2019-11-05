const express = require('express');
const router = express();
const multer  = require('multer');
const path = require('path');
const cloudinary = require('cloudinary');
const controller = require('../controllers/file.controller');
const auth = require('../middleware/authMidlleware');

module.exports = router;

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `D:/UploadFile`);
  },
  filename: function (req, file, cb) {
    let math = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (math.indexOf(file.mimetype) === -1) {
      let errorMess = `File ${file.originalname} không phù hợp. Chỉ cho phép tải file docx, doc hoặc pdf.`;
      return cb(errorMess, null);
    }
    cb(null, file.originalname) //Appending extension path.extname(file.originalname)
  }
})
cloudinary.config({ 
  cloud_name: 'ntwayd', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var upload = multer({ storage: storage });

router.get('/myFile', auth.stillLogin, controller.listFile);

router.get('/delFile/:id', controller.deleteFile);

router.get('/findFile', controller.findFile);

router.post('/myFile', upload.single('linkFile'), controller.postListFile);