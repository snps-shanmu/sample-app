const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
      res.sendFile(__dirname + '/hello1.html');
      console.log('This is Hello Page');
    });

    
app.get('/app', (req, res) => {
      res.sendFile(__dirname + '/app.html');
    console.log('This is App Page');
    });

app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    console.log('This is Index Page');
    });
    

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
