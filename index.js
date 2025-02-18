const express=require('express');
const app=express();
const PORT=2000;
app.get('/',(req,res)=>{
    res.send('hi');
});
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})