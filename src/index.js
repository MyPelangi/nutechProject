require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const Routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', Routes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
