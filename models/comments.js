const { Model, DataTypes } = require('sequelize');
const { User } = require('../../projects/modules/account_manager/models');

const sequelize = require('../config/connection');


class comments extends Model {}

//define table columns and config

comments.init(
    {
        //define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [100]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user', key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    },
);


module.exports = comments;