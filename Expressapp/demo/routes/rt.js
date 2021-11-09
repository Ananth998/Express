var express = require('express');
var router = express.Router();
var Sequelize =require('sequelize');
const sequelize = new Sequelize('employee', 'root', 'Madhavam@2004', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  async function start(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
  start();
  module.exports=router;
