require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


// |---------------
// | Get Routes
// |---------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + "/views/portfolio.html");
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Port is running at ${port}`));