exports.view = function(req, res){
    res.render('login',{page_title:"Metro Survey - Login"});
};

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
            if(err) console.log("Error Selecting : %s ",err );
            console.table(result);
            res.render('users',{page_title:"Users ACIFM",data:result});
        });
    });
};

exports.validate_user = (req, res)=>{
    let query = 'SELECT * FROM tbUsers WHERE uname = ?'
    let uname = req.body.uname;
    let upass = req.body.upass;

    req.getConnection((err, connection)=>{
        if(err) console.log("Connection Error")
        connection.query(query, [uname], (err, rows)=>{ 
            if(err) throw err;
            if(rows.length > 0){
                if(upass == rows[0].upass){
                res.redirect('/surveys');
                console.table(rows);
                }  else {
                    console.log("Nothing matches")
                    res.redirect('/');
                }
            } else {
                console.log("Nothing matches")
                res.redirect('/');
            }
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

exports.delete_user = (req,res)=>{
        
    let id = req.params.id;
    let query = "DELETE FROM tbUsers WHERE id = ?"
    req.getConnection((err, connection)=>{
        
        connection.query(query, [id], (err, rows)=>
        {           
            if(err)
                 console.log("Error deleting : %s ",err );
            
            res.redirect('/surveys');
            console.log("Row deleted");
        });
        
    });
};

