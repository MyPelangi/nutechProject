require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const Routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`server berhasil running di port ${PORT}`);
})
