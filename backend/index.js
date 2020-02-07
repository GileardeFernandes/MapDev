const express  = require('express');

const app = express();

app.get('/', (request, response)=>{

  return  response.json({  messagem: 'testendo app'});
});

app.listen(3332);