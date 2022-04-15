const express = require('express');
const cors= require('cors');
const postrouter = require('./routs');
var bodyparser=require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors())
/*const myownmiddleware = (req,res,next) =>{
    console.log("middleware applied");
next();
};*/
//app.use(myownmiddleware);
//app.use(morgan("dev"));

app.use(require('./routs'));

//app.get('/about',postrouter);
app.listen(8000);