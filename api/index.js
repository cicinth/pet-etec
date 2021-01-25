const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(bodyParser.json());


require('./controllers/pet')(app);


app.get('/', (req , res) => {
    res.send('Opa meu mel!');
});

app.listen(80);

