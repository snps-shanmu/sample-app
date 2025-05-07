const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
      res.sendFile(__dirname + '/hello.html');
    });

    
app.get('/app', (req, res) => {
      res.sendFile(__dirname + '/app.html');
    });

app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });
    

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
