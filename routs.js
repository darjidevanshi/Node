//const express = require('express');
//const router = express.Router();
var controllers = [];

//const postcontroller = require('./postcontroller');

//router.get("/",postcontroller.GetVal);
//router.get("/about",postcontroller.GetDBVal);

controllers.push(require('./postcontroller'));


module.exports = controllers;