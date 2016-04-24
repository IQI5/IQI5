var mysql = require("mysql");
var musicDB = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  port : "3306",
  database : "musicMelody"
});

musicDB.connect(
  function (err) {
  if(err){
    console.log("Error");
    return;
  }
  console.log("Already connected");
}
);

function insertData (info) {
  var  addSql = 'INSERT INTO QI5Melody (Id, UserName, Melody) VALUES (?, ?, ?, ?, ?);';

  musicDB.query(userAddSql,info,function (err,result) {
    if(err){
      console.log("Error" + err.message);
      return;
    }
    console.log(result);
  });
}


function selectAll () {
  musicDB.query("SELECT * FROM userinfo",function (err,result) {
  if(err){
    console.log("Error" + err.message);
    return;
  }
  return result;
});
}

