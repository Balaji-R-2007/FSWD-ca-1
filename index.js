const express=require('express');
const app=express();
const PORT=2000;
app.get('/',(req,res)=>{
    res.send('hi');
});

app.post('/signup',(req,res)=>{
    if(!req.username){
        res.send('username cannot be empty')
        
    }
    if(!req.email){
        res.send('Email cannot be empty')
        
    }
    if(!req.password || password.length<8 && password.length>16){
        res.send('password length must be greaterthan 8 and lessthan or equal to 16')
    }
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})