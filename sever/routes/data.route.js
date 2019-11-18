const express = require('express');
const router = express();
const controller = require('../controllers/data.controller');
const auth = require('../middleware/authMidlleware');

module.exports = router;

router.get('/updateData', auth.permissionQtv, controller.getData);

router.post('/updateData', auth.permissionQtv, controller.postData);

router.get('/viewData', auth.permissionQtv, controller.viewData);