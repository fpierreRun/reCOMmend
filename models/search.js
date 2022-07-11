const { Model, DataTypes } = require('sequelize');
const { User } = require('../../projects/modules/account_manager/models');

const sequelize = require('../config/connection');

//create user model

class search extends Model {}

//define table columns and config

search.init(
    {
        //define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        keyword: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
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
        modelName: 'keyword'
    },
);

    User.hasOne(search);

module.exports = keyword;