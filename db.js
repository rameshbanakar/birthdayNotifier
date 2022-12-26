const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDb = async() => {
 const conn=await  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    }).then(()=>console.log("connection success"))
};
module.exports= connectDb;