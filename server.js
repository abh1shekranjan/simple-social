const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));