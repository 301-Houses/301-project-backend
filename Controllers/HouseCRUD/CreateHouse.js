const houseModel = require("../../Models/House");
let handelCreate= async(req,res)=>{
    let{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber}=req.body;
    await houseModel.create({
        imgURL: imgURL,
        ownerName:ownerName,
        houseAddress :houseAddress,
        houseSize :houseSize,
        numOfRoomse:numOfRoomse,
        isSold:isSold,
        price:price,
        email:email,
        phoneNumber:phoneNumber
    })
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
  module.exports=handelCreate