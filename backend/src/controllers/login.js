const Usuario = require('../models/usuario');
const status = require('http-status');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {

    const id = req.body.id
    Usuario.findByPk(id)
    .then(usuario => {
        if (usuario) {
            const senha = req.body.senha;
            bcrypt.compare(senha, usuario.senha,(err, result )=>{
                if(err){
                    res.status(status.NOT_FOUND).send();
                }
                if(result){
                    res.status(status.OK).send({mensagem: 'Autenticado com sucesso.', nome: usuario.nome, email: usuario.id, telefone: usuario.telefone});
                }else{
                    res.send({mensagem: "Senha ou e-mail incorretos, tente novamente."});
                }
            })
        } else {
            res.send({mensagem:"E-mail ou senha incorretos, tente novamente."});
        }
    })
    .catch(error => next(error));
}