const express = require('express');

const app = express();

app.post('/', (req, res) => {
res.send
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running On Port $(PORT)`));