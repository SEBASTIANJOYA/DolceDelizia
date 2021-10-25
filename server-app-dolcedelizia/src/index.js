import express from 'express';
const app = express();
app.set('port',8080);

app.listen(app.get('port'),() => {
	console.log(`server listening on port ${app.get("port")}`);

});