const Usuario = require('../models/usuario');
const status = require('http-status');
const bcrypt = require('bcrypt');
const base64 = require('base-64')

exports.buscar = (req, res, next) => {

    const id = req.body.id
    Usuario.findByPk(id)
    .then(usuario => {
        if (usuario) {
                    res.status(status.OK).send({mensagem: 'Autenticado com sucesso.',
                     nome: usuario.nome,
                     email: usuario.id, 
                     telefone: usuario.telefone
                    });
        } else {
            res.send({mensagem:"E-mail ou senha incorretos, tente novamente."});
        }
    })
    .catch(error => next(error));
}