const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6436062",
    password: "m8tWC1GALm",
    database: "sql6436062",
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
  