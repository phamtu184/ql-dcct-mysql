var express = require('express');
var router = express();
var controller = require('../controllers/file.controller');
const auth = require('../middleware/authMidlleware');
var multer  = require('multer');
const path = require('path');
var cloudinary = require('cloudinary');

module.exports = router;

var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
var upload = multer({ storage: storage });

cloudinary.config({ 
  cloud_name: 'ntwayd', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get('/myFile', auth.stillLogin, controller.listFile);