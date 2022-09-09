const houseModel = require("../../Models/House");
let handelupdate=(req,res)=>{
    let id=req.params.id
    let{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber}=req.body;
    console.log(req.body);
    houseModel.findByIdAndUpdate(id,{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber},(err,result)=>{
  
        if(err) {
            console.log(err);
        }
        else {
            houseModel.find({email:email},(err,result)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                  console.log(result)
                    res.send(result);
                    
                }
            })
        }
    })
  
  }
  module.exports= handelupdate