const houseModel = require("../../Models/House");
let handelCreate= async(req,res)=>{
    let{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber,ispremium,status}=req.body;
    await houseModel.create({
        imgURL: imgURL,         
        ownerName:ownerName,
        houseAddress :houseAddress,
        houseSize :houseSize,
        numOfRoomse:numOfRoomse,
        isSold:isSold,
        price:price,
        email:email,
        phoneNumber:phoneNumber,
        ispremium:ispremium,
        status:status
    })
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
  module.exports=handelCreate