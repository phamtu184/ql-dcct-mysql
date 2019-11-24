const express = require('express');
const router = express();
const controller = require('../controllers/user.controller');
const auth = require('../middleware/authMidlleware');

module.exports = router;

router.get('/login', controller.userLogin);

router.get('/signup', auth.stillLogin, auth.permissionQtv, controller.userSignup);

router.get('/userlist', auth.permissionQtv, controller.userList);

router.get('/logout', controller.userLogout);

router.get('/deletegv/:idgv', auth.permissionQtv, controller.deletegv);

router.get('/changeuser', auth.permissionQtv, controller.changeUser);

router.post('/login', controller.postUserLogin);

router.post('/signup', controller.postUserSignup);

router.post('/changeuser', auth.permissionQtv, controller.postChangeUser);

router.post('/userlist', auth.permissionQtv, controller.userChangeRole);