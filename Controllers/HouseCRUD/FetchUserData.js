const houseModel = require("../../Models/House");
let handelFetchUser=(req,res)=>{
   email=req.params.email
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
}
module.exports=handelFetchUser