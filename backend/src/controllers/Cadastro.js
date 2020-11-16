const Usuario = require('../models/usuario');
const status = require('http-status');
const bcrypt = require('bcrypt');
const base64 = require('base-64')

exports.cadastro = (req, res, next) => {
    const id = req.body.id;
    Usuario.findByPk(id)
    .then(usuario => {
        if (usuario) {
            res.send({mensagem:"E-mail já existente, tente inserir outro."});
        } else {
            const nome = req.body.nome;
            const telefone = req.body.telefone;
            const ativo = req.body.ativo;
            bcrypt.hash(req.body.senha,10, (err, hash) =>{
                if(err){
                    return res.status(500).send({mensagem: err})
                }else{
                    Usuario.create({
                        id: id,
                        nome: nome,
                        senha: hash,
                        telefone: telefone,
                        ativo: ativo,
                    })
                    res.status(status.OK).send({mensagem: 'Usuario Cadastrado com sucesso'});
                }
            })
        }
    })
    .catch(error => next(error));  
}