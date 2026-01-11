require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const Routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', Routes);
// Bagian ini diubah:
// Export app untuk Vercel
module.exports = app;

// app.listen hanya dijalankan jika kita sedang di mode development (lokal)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
