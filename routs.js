const express = require('express');
const router = express.Router();
const postcontroller = require('./postcontroller');
router.get("/",postcontroller.GetVal)



module.exports = router;