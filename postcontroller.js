const sql = require('mssql');
const express = require('express');
const router = express.Router();
const config = require('./config');
var SqlString = require('sqlstring');
var GetVal = GetVal = (req,res) =>{
    try{
        res.send("hello from controller");
    }catch{

    }
   
   }
var GetDBVal = GetDBVal = (req,res) =>{

    try{
     
    sql.connect(config.config, function(err){
        if (err) console.log(err);
        let sqlRequest = new sql.Request();
        let sqlQuery = "select * from tblCountry";
        sqlRequest.query(sqlQuery, function(err,data){
            if(err) console.log(err)

            res.send(data);
           
           
        });
    
        });
   
  
       // res.send(config);
    }catch{
        res.status(500).json(error);
    }
   
   }

var InsertDBVal = InsertDBVal = (req,res) => {
    try{
     
        sql.connect(config.config, function(err){
            if (err) console.log(err);
            let sqlRequest = new sql.Request();
            let sqlQuery = SqlString.format(`select * from tblCountry where CountryID = ?`,[req.params.CountryID]);
            sqlRequest.query(sqlQuery, req.params.id ,function(err,data){
                if(err) console.log(err)
    
                res.send(data);
               
               
            });
        
            });
       
      
           // res.send(config);
        }catch{
            res.status(500).json(error);
        }
       

   }

router.get('/',GetVal);
router.get('/display',GetDBVal);
router.get('/display1/:id',InsertDBVal);
module.exports = router;