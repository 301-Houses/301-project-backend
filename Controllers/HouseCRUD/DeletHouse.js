const houseModel = require("../../Models/House");
let deleteHandler=(req,res)=>{
    let id=req.params.id
    let email=req.params.email
    houseModel.deleteOne({_id:id},(err,result)=>{
        houseModel.find({email:email},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            
            res.send(result);
        }
    })
  
    })
    }
    module.exports=deleteHandler