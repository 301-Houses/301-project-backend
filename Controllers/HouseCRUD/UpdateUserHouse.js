const houseModel = require("../../Models/House");
let handelUserUpdate=(req,res)=>{
    let id=req.params.id
    let email=req.params.email
    let{imgURL,ownerName,houseAddress,houseSize,numOfRoomse,isSold,price,phoneNumber,status}=req.body;
    console.log(req.body);
    houseModel.findByIdAndUpdate(id,{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber,status},(err,result)=>{
  
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
  module.exports= handelUserUpdate