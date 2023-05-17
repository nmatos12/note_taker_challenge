require('dotenv').config();
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log('Server listening on PORT %s', PORT));