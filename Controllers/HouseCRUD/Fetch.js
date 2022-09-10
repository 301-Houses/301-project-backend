const houseModel = require("../../Models/House");
let handelFetch=(req,res)=>{
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
}
module.exports=handelFetch