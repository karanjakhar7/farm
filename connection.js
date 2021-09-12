const mysql = require('mysql2')

const creds = 'mysql://bd380eb29071a9:50d7e178@us-cdbr-east-04.cleardb.com/heroku_2ab9c61aa83d2aa?reconnect=true'

// const connection = mysql.createConnection({
//     host: "sql6.freemysqlhosting.net",
//     user: "sql6436062",
//     password: "m8tWC1GALm",
//     database: "sql6436062",
//     multipleStatements: true,
//     port: 3306
//   });

const connection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bd380eb29071a9",
  password: "50d7e178",
  database: "heroku_2ab9c61aa83d2aa",
  multipleStatements: true,
  port: 3306
});
  
  connection.connect((err)=>{
    if(!err)
    {
      console.log('Connected');
    }
    else{
      console.log("Connection Failed");
    }
  })

module.exports = connection
  