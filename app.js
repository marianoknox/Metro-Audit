
/**
 * Basic CRUD
 * API Auth is not included
 */

const express = require('express');
//const routes = require('./routes'); //For view
const http = require('http');
const path = require('path');
//load route
const surveys = require('./survey/surveys');
const faults = require('./survey/faults');
const login = require('./survey/login');
const index = require('./survey/index');
const customers = require('./routes/customers')
const app = express();
//const bodyParser = require('body-parser');

const connection  = require('express-myconnection'); 
const mysql = require('mysql');


// all REST environments
app.set('port', process.env.PORT || 4300);
//Use this view later
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.logger('dev'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false }))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    
    connection(mysql,{
        
        host: 'us-cdbr-iron-east-02.cleardb.net', //'localhost or IP',
        user: 'b83c06f62f60df',
        password : '75ff4066',
        //port : 3306, //port mysql
        database:'heroku_726e94efd6de4c5'

        // host: 'localhost', //'localhost or IP',
        // user: 'root',
        // password : '',
        // //port : 3306, //port mysql
        // database:'dbaudit'

    },'pool') //or single

);

//samples
//app.get('/', customers.list);
app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id',customers.save_edit);

//For Survey
app.get('/surveys', surveys.list);
app.get('/surveys/add', surveys.add);
app.get('/surveys/testCon', surveys.testCon);
app.get('/surveys/createTableStations', surveys.createTableStations);
app.get('/surveys/edit/:id', surveys.edit);
app.post('/surveys/save', surveys.save);
app.get('/surveys/delete/:id', surveys.delete_survey);
app.post('/surveys/save_edit/:id',surveys.save_edit);

//For login
app.get('/login/createTableUsers', login.createTableUsers);
app.post('/validate_user', login.validate_user);
app.put('/login/add_user', login.add_user);
app.get('/login/list', login.list);
app.get('/login/delete/:id', login.delete_user);
app.get('/', login.view);

//For Fault
app.get('/faults', faults.list);
app.get('/faults/add', faults.add);
app.post('/faults/save', faults.save);
app.post('/faults/save_api', faults.save_api);

http.createServer(app).listen(app.get('port'), ()=>{
  console.log('Express server listening on port ' + app.get('port'));
});
