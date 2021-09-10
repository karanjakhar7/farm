const express = require('express')
const path = require('path')
const farmRoute = require('./routes/farm')
const connection = require('./connection')


const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname,'static')))
app.use('/', farmRoute)


app.listen(process.env.PORT || port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
