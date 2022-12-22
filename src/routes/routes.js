const { Router } = require('express');

const userController = require('../controllers/UserController');
const TokenController = require("../controllers/TokenController");
const loginRequired = require("../middlewares/loginRequired");

const router = new Router();



router.post("/tokens/", TokenController.store);
router.post('/users', userController.store);
router.put('/users/:id', loginRequired, userController.update);
router.delete('/users/:id', loginRequired, userController.delete);

module.exports = router;
