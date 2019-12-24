const express = require('express');
const router = express();
const controller = require('../controllers/data.controller');
const auth = require('../middleware/authMidlleware');

module.exports = router;

router.get('/updateData', auth.permissionQtv, controller.getData);

//router.delete('/updateData', auth.permissionQtv, controller.delKhoa);

router.post('/updateData', auth.permissionQtv, controller.postData);
