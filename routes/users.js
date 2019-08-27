var express = require('express');
var router = express.Router();
const Employee=require("../Database/employee")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/newEmp",function(req,res,next){
 
// res.send("dsd")
// console.log("reafed")
  res.send("neswEmp")
})
router.post("/enter",function(req,res,next){
  // res.send("dsd")
 // alert("sds",req.body)

  Employee.create({
      first_name:req.body.first,
      last_name:req.body.last,
      email:req.body.email,
      gender:req.body.gender,
      address:req.body.address,
      phone:req.body.phone,
      title:req.body.title,
      salary:req.body.salary,
      Marriage_status:req.body.status
  },function(err,newData){
    if(err)
       res.send(err)
  
  console.log("data SAGED",newData)

  res.redirect("/")
      })
  })

  router.get("/:id/update",function(req,res,next){
    Employee.findById(req.params.id,(err,data)=>{
      if(err){
        res.send("Data not found");
      }

      console.log("data to update",data)
     res.render("newEmp",{data:data})

    })

  })
  
  router.put("/makeChange/:id",function(req,res,next){
    var obj={
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      gender:req.body.gender,
      email:req.body.email,
      address:req.body.address,
      phone:req.body.phone,
      title:req.body.title,
      salary:req.body.salary,
      Marriage_status:req.body.Marriage_status

    }
    Employee.findByIdAndUpdate(req.params.id,obj,function(err,updatedData){
      if(err)
      {  console.log("data not updated")
          res.redirect("/")
      }
      else{

          console.log("New updated data",updatedData)
          res.redirect("/");
      }
  })

  })

router.delete("/:id/delete",function(req,res,next){
  Employee.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
        console.log(err)
    }
    else{
        res.redirect("/")
    }
})

})

module.exports = router;
