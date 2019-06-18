exports.createTableUsers = (req, res)=>{
    let query = 'CREATE TABLE tbUsers id int AUTO_INCREMENT, uname VARCHAR(255), upass VARCHAR (255), firstname VARCHAR (255), lastname VARCHAR (255), access VARCHAR (255), designation VARCHAR (255)'

    req.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query(query, (err, rows)=>{
            if(err) throw err;
            res.send(rows);
        });
    });
};

exports.validate_user = (req, res)=>{
    let query = 'SELECT uname, upass FROM tbUsers WHERE unmae = ? AND upass = ?'
    let input = JSON.parse(JSON.stringify(req.body))

    req.getConnection((err, connection)=>{
        let data = {
            uname = input.uname,
            upass = input.upass
        }
        connection.query(query, (err, rows)=>{ 
            if(err) throw err;
            res.send(rows);
            console.table(rows);
        });       
    });
};

