var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');

/* GET users listing. */
router.get('/', users.list)
    .get('/detail/:id(\\d+)', users.detail)
    .get('/formUpdate/:id', users.formUpdate)
    .post('/create', users.create)
    .delete('/:id', users.delete);

module.exports = router;
