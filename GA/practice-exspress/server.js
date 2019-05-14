const express = require('express');
const app = express();

// below allows cleint to make get request -- to then be servered
app.get('/', function(req, res) {
    res.send('<h1>PARTY</h1>');
})

const Fruits = ['apple', 'mango', 'cherry', 'pear'];

app.get('/Fruits', function(req, res) {
    res.send(Fruits);
})




app.listen(3000, () => {
    console.log('this server is working');
})