
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('bootcamp_tht', 'secret', 'jOdznoyH6swQB9sTGdLUeeSrtejWkcw', {
host: 'sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com',
dialect:'mysql'
});

export const User = sequelize.define('users', {
    username: {
    type: DataTypes.STRING,
    allowNull: false, primaryKey: true
    },
    password: {
    type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
        },
    role: {
        type: DataTypes.STRING
        }
}, {
    timestamps: false
});