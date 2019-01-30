require('./config/config.js');
require('./routes/usuarios.js');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

// Parse application para form 'x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Express use rutas para usuario
app.use(require('./routes/usuarios.js'));



app.get('/', (req, res) => {
  res.send('Hello World')
});
 
// Conexión a base de datos MONGODB
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true } , (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT );