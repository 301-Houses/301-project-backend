const mongoose=require('mongoose')
mongoose.connect('mongodb://teamproject301:0000@ac-p33uldq-shard-00-00.liz90b2.mongodb.net:27017,ac-p33uldq-shard-00-01.liz90b2.mongodb.net:27017,ac-p33uldq-shard-00-02.liz90b2.mongodb.net:27017/?ssl=true&replicaSet=atlas-7lh4q2-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}) ;  
// ispremium,lon,lat,
const houseSchema = new mongoose.Schema({
  ispremium:{
type:Boolean,
required:true
  },
    imgURL: {
        type: String,
        required: true,
      },
      ownerName: {
        type: String,
        required: true,
      },
      houseAddress: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      houseSize: {
        type: Number,
        required: true,
      },

      numOfRoomse: {
        type: Number,
        required: true,
      },
      isSold: {
        type: Boolean,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    poster_date: {
        type: Date,
        default: () =>
          new Date().toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
      }, 
      
  });
  let house=mongoose.model('house',houseSchema)

  module.exports= house
  