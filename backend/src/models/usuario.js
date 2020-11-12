const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Usuario = sequelize.define("users", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(200)
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(13),
    },

    senha: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: false
    }
});

module.exports = Usuario;