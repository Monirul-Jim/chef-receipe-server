const express=require('express')
const app=express()
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('the chef recipe ')
})
app.listen(port,(req,res)=>{
    console.log('the chef recipe is loading');
})