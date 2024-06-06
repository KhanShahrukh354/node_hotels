const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hii my name is shahrukh Saifi")
})

const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
const studentRoutes=require('./routes/studentRoutes');
                                                        
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);
app.use('/student',studentRoutes);
    1
// POST ROUTE to add person

// app.post('/person',async(req,res)=>{          
//     try{
//         const data=req.body;
//         const newPerson =new Person(data);
//         const response=await newPerson.save();
//         console.log('data saved successfully');
//         res.status(200).json(response);
//     }
//     catch(err){ 
//         console. log(err);
//         res.status(500).json({error: 'Internal server Error'});
//     }
// })
// app.get('/person',async(req,res)=>{
//     try{
//        const data=await Person.find();
//        console.log('data fetched successfully');
//        res.status(200).json(data);
//         }catch(err){
//             console.log(err);
//             res.status(500).json({error: 'Internal server Error'});
//         }
//  })
// app.get('/person/:workType',async(req,res)=>{
//     try{
//         const workType=req.params.workType;
//         if(workType=='chef' || workType=='manager' || workType=='waiter'){
//             const response=await Person.find({work : workType});
//             console.log('data fetched successfully');
//             res.status(200).json(response);
//         }else{
//             res.status(404).json({error: 'Invalid work type'});
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     }
// })

//   app.post('/menu',async(req,res)=>{
//     try{
//         const data=req.body;
//         const newMenuItem= new menuItem(data);
//         const response=await newMenuItem.save();
//         console.log("Data saved successfully");
//         res.status(200).json(response);
//     } catch(err){ 
//         console. log(err);
//         res.status(500).json({error: 'Internal server Error'});
//     }
//   })

//   app.get('/menu',async(req,res)=>{
//     try{
//         const data=await menuItem.find();
//         console.log('data fetched successfully');
//         res.status(200).json(data);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal server Error'});
//     }
//   })

 
  

// app.get('/cart',(req,res)=>{
//     res.send("Add some items to your cart ")
// })
// app.get('/customisedCostumer',(req,res)=>{
//         var custumisedCost={
//             name : 'Shahrukh Khan',
//             age: '21',
//             isStudent:true,
//             country:'India'
//         }
//         const json=JSON.stringify(custumisedCost)
//         res.send(json)
// }) 
// //app.get()

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('server is listening on port 3000');
})