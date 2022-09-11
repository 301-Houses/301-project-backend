const houseModel = require("../../Models/House");

let seedData=async()=>{
    let firstHouse= new houseModel({
        imgURL : 'Scripture Reflections',
        ownerName:"Scripture Reflections of a Christian in the Marketplace - Old Testament: Laying Down Our Work, Family, and All That Matters Before Jesus", 
        houseAddress:'instock',
        email:"islam1@gmail.com",
        houseSize:150,
        numOfRoomse:6 ,
        isSold:false,
        price:1000,
       phoneNumber:"0781327360"
    
    })
    let secondHouse= new houseModel({
        imgURL : 'Scripture Reflections',
        ownerName:"Scripture Reflections of a Christian in the Marketplace - Old Testament: Laying Down Our Work, Family, and All That Matters Before Jesus", 
        houseAddress:'instock',
        email:"islam2@gmail.com",
        houseSize:150,
        numOfRoomse:6 ,
        isSold:false,
        price:1000,
        phoneNumber:"0781327360"
        
    })
    let thirdHouse= new houseModel({
        imgURL : 'Scripture Reflections',
        ownerName:"Scripture Reflections of a Christian in the Marketplace - Old Testament: Laying Down Our Work, Family, and All That Matters Before Jesus", 
        houseAddress:'instock',
        email:"islam3@gmail.com",
        houseSize:150,
        numOfRoomse:6 ,
        isSold:false,
        price:1000,
        phoneNumber:"0781327360"
        
    })
    
   
    await firstHouse.save() 
    await secondHouse.save()
    await thirdHouse.save()
      }
    

      module.exports=seedData