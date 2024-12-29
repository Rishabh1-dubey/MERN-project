import mongoose from "mongoose"
// import dotenv from "dotenv"



const uri ="mongodb+srv://renio067778:rishabh06@cluster0.n9bky.mongodb.net/"

// dotenv.config({
//     path:"../.env"
// })
const mongooseConnection =()=> {
   

    mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology:true}).then(()=>{
        console.log("mongoose data connected successfully")
    }).catch((error)=>{
        console.log("mongoose in not connected successfully",error);
        
    })
}

export default mongooseConnection