const app=require('express')();
const cors=require('cors')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
 
const exerciseRouter=require('./routes/exercise');
const userRouter=require('./routes/users')
require('dotenv').config();

const port=process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('mongoose database connected Successfully')
})
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log(`Server Running on: ${port}`);
})