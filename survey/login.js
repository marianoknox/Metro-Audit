exports.createTableUsers = (req, res)=>{
    let query = 'CREATE TABLE tbUsers (id int AUTO_INCREMENT, uname VARCHAR(255), upass VARCHAR (255), firstname VARCHAR (255), lastname VARCHAR (255), access VARCHAR (255), designation VARCHAR (255), PRIMARY KEY(id))'

    req.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query(query, (err, rows)=>{
            if(err) throw err;
            res.send(rows);
            console.log('Users table created');
        });
    });
};

exports.list = (req, res)=>{
    let query = 'SELECT * FROM tbUsers'

    req.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query(query, (err, result)=>{
            if(err) throw err;
            console.table(result);
            res.send(result);
        });
    });
};

exports.validate_user = (req, res)=>{
    let query = 'SELECT uname, upass FROM tbUsers WHERE unmae = ? AND upass = ?'
    let input = JSON.parse(JSON.stringify(req.body))

    req.getConnection((err, connection)=>{
        let data = {
            uname : input.uname,
            upass : input.upass
        }
        connection.query(query, data, (err, rows)=>{ 
            if(err) throw err;
            res.send(rows);
            console.table(rows);
        });       
    });
};

exports.add_user = (req, res)=>{
    let query = 'INSERT INTO tbUsers SET ?'    
    let input = JSON.parse(JSON.stringify(req.body));
    let data = {
        uname : input.uname,
        upass : input.upass,
        firstname : input.firstname,
        lastname : input.lastname,
        access : input.access,
        designation : input.designation
    }

    req.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query(query, data, (err, result)=>{
            if(err) throw err;
            res.send(result);
            console.table(result);
        });
    });

};

