const mongoose=require('mongoose');

require('dotenv').config();
const mongoURL=process.env.MongoDB_URL_Local;    // hotels is database name
//const mongoURL=process.env.MongoDB_URL_Online

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongoDB server');
});
db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server');
});
db.on('error',(err)=>{
    console.log('connection error mongoDB server',err);
});

