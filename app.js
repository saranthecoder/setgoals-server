const express =require('express');
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://saranthecodder:saransaran@cluster0.hz2ibvp.mongodb.net/hackathon?retryWrites=true&w=majority';
const cors = require('cors');
const app = express();
const UserRouter=require('./routes/userroutes')

app.use(cors());


mongoose.connect(mongoDB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(() => {
  console.log("DataBase connected...");
})
.catch((err) => {
  console.log("ERROR in connecting !" + err);
});

app.use(express.json());
app.use(UserRouter);

app.listen(8080,()=>{
    console.log("Server is running...")

});