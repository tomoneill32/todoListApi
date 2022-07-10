var express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);