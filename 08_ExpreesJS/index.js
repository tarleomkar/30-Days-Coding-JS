const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me!</h1>')
});

app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/jsonexample', (req, res) => {
    res.json([
        {
            firstName: 'Hello',
            lastName: 'Tarle'
        },
        {
            firstLetter: 'O'
        }
    ])
});

app.listen(3000, () => {
    console.log("Server is running");
});