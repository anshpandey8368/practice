const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const dbConnect = require('./config/database');
dbConnect();

const indexRoute = require('./routes/index');
app.use('/', indexRoute);


