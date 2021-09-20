const express = require('express');
const app = express();
const port = 3000;

app.get('/f8', function(req, res) {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send('Xin chao');
})
app.listen(port, function(req, res) {
    console.log('ok')
})