var express = require('express');
var router = express.Router();
const userController = require('../app/controllers/user_controller');

/* GET home page. */
router.get('/', userController.author_list);

module.exports = router;
