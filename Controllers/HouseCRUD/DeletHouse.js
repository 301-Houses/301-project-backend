const houseModel = require("../../Models/House");
let deleteHandler=(req,res)=>{
    let id=req.params.id
    houseModel.deleteOne({_id:id},(err,result)=>{
        houseModel.find({},(err,result)=>{
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