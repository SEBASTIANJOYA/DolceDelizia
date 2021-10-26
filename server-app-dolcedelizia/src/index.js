import express from 'express';
import Routes from './routes/index.js';

//Inicializacion
const app = express();

//Pueerto por el que va salir
app.set('port',8080);

//Middleware
//Intermediario se encarga de haver un proceso entre cada una de las 
//llamadas del cliente y el servidor
app.use(express.json());

//Routes
app.get('/',(req,resp) => {
    resp.send("Wellcome ! ");
});
app.use('/api',Routes);

//Middleware
//Intermediario se encarga de haver un proceso entre cada una de las 
//llamadas del cliente y el servidor
app.use(express.json());
//Running
app.listen(app.get('port'),() => {
	console.log(`server listening on port ${app.get("port")}`);

});