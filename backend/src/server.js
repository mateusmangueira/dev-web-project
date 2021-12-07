const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
 
const app = express();
 
const server = http.Server(app);

mongoose.connect('mongodb+srv://mateus:123321@dev-web-db.doriq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(server.port = 3333, console.log('Server is running on port ' + server.port));