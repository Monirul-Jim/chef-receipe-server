const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const data = require('./data/data.json')
const category = require('./data/category.json')

app.get('/', (req, res) => {
    res.send('the chef recipe ')
})
app.get('/data', (req, res) => {
    res.send(data)
})
app.get('/categories', (req, res) => {
    res.send(category)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    const selectedData = category.find(n => n._id === id)
    res.send(selectedData)
})
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const datas=data.find(n=>n.id==id)
    const categoryData = category.filter(n => parseInt(n.category_id) === id)
    res.send({categoryData,datas})
})
app.listen(port, (req, res) => {
    console.log('the chef recipe is loading');
})
