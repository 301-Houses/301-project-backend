const houseModel = require("../../Models/House");

let seedData=async()=>{
    let firstHouse= new houseModel({
        imgURL : 'https://wallpaperaccess.com/full/3572596.jpg',
        ownerName:"monther", 
        houseAddress:'instock',
        email:"test2@gmail.com",
        houseSize:150,
        numOfRoomse:4 ,
        isSold:false,
        price:2000,
       phoneNumber:"0654612345",
       ispremium: false
    })
    let secondHouse= new houseModel({
        imgURL : 'https://wallpaperaccess.com/full/3060228.jpg',
        ownerName:"monther", 
        houseAddress:'instock',
        email:"test2@gmail.com",
        houseSize:150,
        numOfRoomse:3 ,
        isSold:false,
        price:2000,
        phoneNumber:"0654612345",
        ispremium : false
        
    })
    let thirdHouse= new houseModel({
        imgURL : 'https://wallpaperaccess.com/full/3572808.jpg',
        ownerName:"monther", 
        houseAddress:'instock',
        email:"test2@gmail.com",
        houseSize:150,
        numOfRoomse:6 ,
        isSold:false,
        price:2000,
        phoneNumber:"0654612345",
        ispremium:false
    })
    
   
    await firstHouse.save() 
    await secondHouse.save()
    await thirdHouse.save()
      }
    

      module.exports=seedData