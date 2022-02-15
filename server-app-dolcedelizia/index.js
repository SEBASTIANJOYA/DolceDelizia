
const jwt= require("jsonwebtoken");
var mysql = require('mysql');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//database connection
const app = express();

//Se usa para poder acceder a la API desde un navegador
app.use(cors());

app.use(express.static('public'));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
/*
app.use(require('./routes/user'));
app.use(require('./routes/product'));
app.use(require('./routes/stock'));
app.use(require('./routes/detailBill'));
app.use(require('./routes/bill'));
*/

//Se define el puerto por el que va a correr el servidor
app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
  console.log(`Server listen to port ${app.get('port')}`)
})



var db= mysql.createConnection({
    host : 'localhost',
    database : 'dolceDelicia',
    user : 'root',
    password : 'root',
});

db.connect((err) => {
    if (err){
        
    } 
    else{
        console.log("Base de datos conectada")
    }
});

app.post("/registerClient",(req, res) => {

    const user= req.body.user;
    const password=req.body.password;
    const cedula= req.body.cedula;
    const surname=req.body.surname;
    const second_surname=req.body.second_surname;
    const first_name=req.body.first_name;
    const second_name=req.body.second_name;
    const date_birth=req.body.date_birth;
    console.log("hola"+date_birth);
    const direction=req.body.direction;
    const telephone_number=req.body.telephone_number;
    const type_user=req.body.type_user;
    const email="dmfkld";

    db.query(
        "INSERT INTO Usuario (identificacion,Id_tipo,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,usuario,contraseña,direccion,telefono,email) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
        [cedula,type_user,first_name,second_name,surname,second_surname,user,password,direction,telephone_number,email],
        (err, result) => {

            console.log(err);
        }
    );

});
/*
const verifyJWT= (req, res, next) => {

    const token= req.headers["x-access-token"];

    if(!token){
        res.send("No tiene token!")
    }
    else{

        jwt.verify(token,"mySecretKey",(err,user)=>{
            if(err){
                res.send("Token invalido");
            }
            req.user=user;
            next();
        })

    }
}
*/
app.post("/login",(req,res)=>{

    const user= req.body.user;
    const password= req.body.password;


    db.query(

        "SELECT * from Usuario where usuario=? AND contraseña=?;",
        [user,password],
        (err,result)=>{
            
            
           if(err){
               res.send({err:err});
           }
           
           if(result.length>0){

                
                /*
               const accessToken=jwt.sign({type:result[0].Id_tipo,user:user},"mySecretKey",{
                   expiresIn:300,
               });*/
               res.json({
                   auth:true,
                   user:user,
                   typeuser:result[0].Id_tipo,
                   //token:accessToken,
               })
               //res.send(result);
           }
           else{
               res.json({auth:false,message:"Credenciales incorrectas"});
           }
        }       
    );

});

