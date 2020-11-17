const express = require('express');
const Cadastro = require ('../controllers/Cadastro');
const Login = require ('../controllers/login');
const router = express.Router();

router.post('/cadastro', Cadastro.cadastro);
router.post('/login', Login.login);

router.post('/userGetInfo', (req, res) => {
    const { cookie } = req.body; // roney@szsolucoes.com.br:123 // GFGDGWRedfjsdhgihwseurh3h437442374y3u==
    const value = base64.decode(cookie);
    const email = value
   

    return email
})

module.exports = router;