require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');

const app = express();

const server = http.Server(app);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.port = process.env.PORT;

server.listen(server.port, console.log('Server is running on port ' + server.port));