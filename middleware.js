const express=require('express');
const app=express();


/////Implement middleware
const requestfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Pls Enter the Age!")
    }
    else if(req.query.age<18){
        res.send("You are not Eligible")
    }
    else{
        next();
    }
    
}

app.use(requestfilter);


app.get('/',(req,res)=>{
    res.send("Main Page");
})



app.get('/home',(req,res)=>{
    res.send("Home Page")
})

app.listen(8000);


//  middleware functionality is modified the request and response