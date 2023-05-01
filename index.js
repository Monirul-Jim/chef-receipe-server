const express=require('express')
const app=express()
const port = process.env.PORT || 5000;
const cors=require('cors')

app.use(cors())

const data=require('./data/data.json')

app.get('/',(req,res)=>{
    res.send('the chef recipe ')
})
app.get('/data',(req,res)=>{
    res.send(data)
})
app.listen(port,(req,res)=>{
    console.log('the chef recipe is loading');
})