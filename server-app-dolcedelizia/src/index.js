const app = require('../src/config/server');
require('../src/app/routes/routes')(app);


var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : '127.0.0.1',
    database : 'DolceDelizia',
    user : 'root',
    password : 'Sebas1997',
});

conexion.connect((err) => {
    if (err) throw err
        console.log('Connect to Database ');
});

// starting the server
app.listen(app.get('port'), () => {
   console.log('Server listen on port', app.get('port'));
 });
 