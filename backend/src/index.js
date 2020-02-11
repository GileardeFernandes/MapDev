const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('../src/routes');
const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://micaelfernandes:micaelfernandes@bdestudos-k8myy.mongodb.net/devradar?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true
});

app.listen(3332);