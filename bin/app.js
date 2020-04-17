
const express = require('express');
const mongoose = require('mongoose');



const Dinos = require('../src/models/Dinos');

const standard = require('../src/routes/standard.route');
const dino = require('../src/routes/dino.route');



const app = express();
const port = 3000;

mongoose.connect('Sua connection String :)' , {

    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex: true

});


app.use(express.json());
app.use(standard);
app.use(dino);
app.listen(port);