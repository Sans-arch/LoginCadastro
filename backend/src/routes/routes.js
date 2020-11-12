const express = require('express');
const Cadastro = require ('../controllers/Cadastro');
const Login = require ('../controllers/login');
const router = express.Router();

router.post('/cadastro', Cadastro.cadastro);
router.post('/login', Login.login);

module.exports = router;