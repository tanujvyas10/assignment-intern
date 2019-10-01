var mongoose=require("mongoose")
var employee=new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    father_name:{type:String},
    mother_name:{type:String},
    gender:{type:String},
    email:{type:String},
    address:{type:String},
    phone:{type:String},
    title:{type:String},
    salary:{type:Number},
    Marriage_status:{type:String}
   
})

module.exports=mongoose.model("Employee",employee)