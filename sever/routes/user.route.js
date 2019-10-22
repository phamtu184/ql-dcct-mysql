var express = require('express');
var router = express();
var controller = require('../controllers/user.controller');
const auth = require('../middleware/authMidlleware');
var multer  = require('multer');
const path = require('path');
var cloudinary = require('cloudinary');

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

module.exports = router;

router.get('/login', controller.userLogin);

router.get('/signup', auth.stillLogin, auth.permission, controller.userSignup);

router.get('/userlist', auth.permission, controller.userList);

router.get('/logout', controller.userLogout);

router.get('/deletegv', controller.deletegv);

router.post('/login', controller.postUserLogin);

router.post('/signup', controller.postUserSignup);

router.post('/userlist', auth.permission, controller.userDelete);

// router.get('/login', controller.userLogin);

// router.get('/signup', auth.stillLogin, auth.permission, controller.userSignup);

// router.get('/profile/:id', auth.stillLogin, controller.userProfile);

// router.get('/userlist', auth.permission, controller.userList);

// router.get('/logout', controller.userLogout);

// router.get('/delFile/:id', controller.deleteFile);

// router.post('/login', controller.postUserLogin);

// router.post('/signup', auth.register, controller.postUserSignup);

// router.post('/profile/:id',upload.single('linkFile'), controller.postFile);

// router.post('/userlist', auth.permission, controller.userDelete);