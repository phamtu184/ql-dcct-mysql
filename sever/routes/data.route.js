var express = require('express');
var router = express();
var controller = require('../controllers/data.controller');
const auth = require('../middleware/authMidlleware');

module.exports = router;

router.get('/updateData', auth.permissionQtv, controller.getData);

router.post('/updateData', auth.permissionQtv, controller.postData);