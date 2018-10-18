const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('${__dirname}/../react-client/dist'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve('${__dirname}/../react-client/dist/index.html'));
});

app.listen(PORT, () => {
   console.log('Servidor rodando cuzao, você pode acessar pela porta 8080. Link: http://localhost:8080/');
});
