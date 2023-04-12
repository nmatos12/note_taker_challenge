require('dotenv').config();

const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log('Server listening on PORT %s', PORT));