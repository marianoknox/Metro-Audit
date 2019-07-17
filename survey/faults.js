exports.list = (req, res)=>{
    let query = 'SELECT * FROM tbFaults ORDER BY id DESC';

    req.getConnection((err,connection)=>{
        connection.query(query,(err,rows)=>
        {             
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('faults',{page_title:"Metro Survey",data:rows});
            console.table(rows);
           });
           if (err)
                console.log("Connection Error : ", err);
    });
};

exports.add = (req, res)=>{
    //Fill Parameters
    const line = ['Red', 'Green', 'Gold', 'Blue']
    const section = ['Entrance', 'Subway or Overbridge', 'Concourse', 'Public Facilities', 'Elevators and Escalators', 'Platform']

    let query = "SELECT station, line FROM tbStation"
    req.getConnection((err, connection)=>{
        if (err) throw err
        connection.query(query, (err, rows)=>{
            if (err) throw err

            res.render('add_survey',{data:rows, line, section,  page_title:"Metro Survey - Add",});
        })
    })
};

exports.save = (req,res)=>{
    let query = 'INSERT INTO tbFaults SET ?'
    let input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection((err, connection)=>{  

    let data = {    
        line    : input.line,        
        station : input.station,
        section : input.section,
        faultDate : input.faultDate,
        empName : input.empName,
        empNo : input.empNo,
        faultDescription : input.faultDescription,
        faultStatus  : input.faultStatus   
    };        
        connection.query(query, data, (err, rows)=>
        {
            if (err)
                console.log("Error inserting : %s ",err );
            
            res.redirect('/faults');
            console.table(input);         
        });      
    });
};

exports.save_api = (req,res)=>{
    let query = 'INSERT INTO tbFaults SET ?'
    let input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection((err, connection)=>{  

    let data = {    
        line    : input.line,        
        station : input.station,
        section : input.section,
        faultDate : input.faultDate,
        empName : input.empName,
        empNo : input.empNo,
        faultDescription : input.faultDescription,
        faultStatus  : input.faultStatus   
    };        
        connection.query(query, data, (err, rows)=>
        {
            if (err)
                console.log("Error inserting : %s ",err );
            
            console.log("Data successfully inserted")        
        });      
    });
};

exports.delete_fault = (req,res)=>{
        
    let id = req.params.id;
    let query = "DELETE FROM tbFaults WHERE id = ?"
    req.getConnection((err, connection)=>{
        
        connection.query(query, [id], (err, rows)=>
        {           
            if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/faults');
            console.log("Row deleted");
        });
        
    });
};

