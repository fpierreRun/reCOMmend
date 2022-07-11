const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//create user model

class User extends Model {}

//define table columns and config

User.init(
    {
        //define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8]
            }
        }
    },
    {
        //table configs go here (https://sequelize.org/v5/manual/models-definition.html#configuration)
        //pass in imported sequelize connection(direct connection to database)
        sequelize,
        //dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        //don't pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        //make it so model name stays lowercase in database
        modelName: 'user'
    },
);

module.exports = User;