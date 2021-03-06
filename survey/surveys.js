exports.testCon = (req, res)=>{
    req.getConnection((err, connection)=>{
        if(err) { console.log("Connection Error") 
        } else {console.log("Connected successfully") }   
    });
};

exports.createTableStations = (req, res)=>{
    let query = 'CREATE TABLE tbStationsResults(id int AUTO_INCREMENT, station VARCHAR(255), auditor VARCHAR(255), result VARCHAR(255), remarks VARCHAR(255), status VARCHAR(255), PRIMARY KEY(id))';

    req.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(query,(err, result)=>{
            if(err) throw err;
            console.log(result);
        });
    });
};

exports.list = (req, res)=>{
    let query = 'SELECT * FROM tbStationsResults ORDER BY id DESC';

    req.getConnection((err,connection)=>{
        connection.query(query,(err,rows)=>
        {             
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('surveys',{page_title:"Metro Survey",data:rows});
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

function fillStation(req){
    let query = "SELECT station FROM tbStation"
    req.getConnection((err, connection)=>{
        if (err) throw err
        connection.query(query, (err, rows)=>{
            if (err) throw err
            return rows
        })
    })
}

exports.edit = (req, res)=>{   
    var id = req.params.id;   
    req.getConnection((err,connection)=>{ 
        connection.query('SELECT * FROM tbStationsResults WHERE id = ?',[id],(err,rows)=>
        {           
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_survey',{page_title:"Metro Survey - Edit",data:rows});           
        });      
    }); 
};
  
/*Save the survey*/
exports.save = (req,res)=>{
let query = 'INSERT INTO tbStationsResults SET ?'
let input = JSON.parse(JSON.stringify(req.body));

    req.getConnection((err, connection)=>{  

    let data = {    
        line    : input.line,        
        station : input.station,
        auditor : input.auditor,
        result  : input.result,
        remarks : input.remarks,
        status  : input.status   
    };        
        connection.query(query, data, (err, rows)=>
        {
            if (err)
              console.log("Error inserting : %s ",err );
         
            res.redirect('/surveys');
            console.table(input);         
        });      
    });
};

exports.saveDetails = (req,res)=>{
let query = 'INSERT INTO tbStationsResults SET ?'
let input = JSON.parse(JSON.stringify(req.body));

    req.getConnection((err, connection)=>{  

    let data = {    
        surveyNo: input.surveyNo,
        quesNo  : input.questionNo,
        grade   : input.grade,
        remarks : input.remarks   
    };        
        connection.query(query, data, (err, rows)=>
        {
            if (err)
              console.log("Error inserting : %s ",err );
         
            res.redirect('/surveys');
            console.table(input);         
        });      
    });
};
  
exports.save_edit = (req,res)=>{
    let query = "UPDATE tbStationsResults SET ? WHERE id = ? "
    let input = JSON.parse(JSON.stringify(req.body));
    let id = req.params.id;
    
    req.getConnection((err, connection)=> {
        
    let data = {
            
        line    : input.line,
        station : input.station,
        auditor : input.auditor,
        result  : input.result,
        remarks : input.remarks,
        status  : input.status    
    };     
        connection.query(query, [data, id], (err, rows)=>
        {
            if (err)
              console.log("Error Updating : %s ",err );
         
            res.redirect('/surveys');             
        });
    });
};
  
  
exports.delete_survey = (req,res)=>{
        
    let id = req.params.id;
    let query = "DELETE FROM tbStationsResults WHERE id = ?"
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


