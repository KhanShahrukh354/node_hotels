const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/hotels'       // hotels is database name

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

