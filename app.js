const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const sub = require('./js/emailRoute/emailRoute')
app.use(express.static('/'));

app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/js',express.static(path.join(__dirname, '/js')));
app.use('/css',express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.use('/sub',sub)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})