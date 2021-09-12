const express = require('express')
const path = require('path')
const connection = require('../connection')


const router = express.Router()


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
  })


router.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname,'../templates/book.html'))
    
  })

router.post('/book', async (req, res)=>{

  console.log(req.body)
  var body = req.body
  var sql = `INSERT INTO bookings VALUES ( '${body.fname}', '${body.lname}', '${body.email}', '${body.phone}', '${body.date}', NOW())`

  await connection.query(sql,(err)=>{
    if (!err){
      res.send("Booked!")
    }
    else{
      console.log(err);
    }
  } )
  res.redirect('/')
  
})

router.get('/bookings', (req, res)=>{
  connection.query("SELECT * from bookings", (err,rows,fields)=>{
    if (!err){
      res.send(rows);
    }
    else{
      console.log(err);
    }
  })
})

router.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname,'../templates/order.html'))
  })

router.get('*', function(req, res){
    res.status(404).send('what???');
  });

  module.exports = router
  