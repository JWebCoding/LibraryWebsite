const express = require('express');
const app = express();
const library = require('./routes.js');
const bodyParser=require('body-parser');
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
  console.log("last");
});

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
  console.log("first");
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}.`);
});



