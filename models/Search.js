const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//create user model

class Search extends Model {}

//define table columns and config

Search.init(
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


module.exports = Search;