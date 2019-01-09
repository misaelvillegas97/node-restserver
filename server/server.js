require('./config/config.js');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


// Parse application para form 'x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id;

    res.json({id});
});

app.post('/usuarios', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({persona:body});
    }

});
 
app.listen(process.env.PORT);