var express = require('express');
var router = express.Router();
const Employee=require("../Database/employee")

/* GET home page. */
router.get('/', function(req, res, next) {
  Employee.find({},function(err,data){
    if(err){
      res.send("data not found")
      
    }

    res.render('index', { data:data});
  })


});

module.exports = router;
