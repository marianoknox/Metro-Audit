
/*
 * Connection test.
 * Create db if not found
 */

exports.index = function(req, res){
    req.getConnection((err, connection)=>{
      if(err){
        console.log("MySQL Connection Error");
      }
      console.log("Connected successfully");
    });
  };
  
  