import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js"
import cors from "cors"
import userRoute from "./Route/User.Route.js"

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT || 4000;
const URL=process.env.MongoDBURL;

//connect to mongoDB
/*try{
    mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Connect to MongoDB");
}catch(error){
  console.log("Error",error)
}
*/
mongoose.connect("mongodb://localhost:27017/bookstore")

//Defining route
app.use("/book",bookRoute);
app.use("/user", userRoute);


app.listen(PORT,()=>{
  console.log(`server is running ${PORT}`)
})