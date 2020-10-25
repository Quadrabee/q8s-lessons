const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cowsay = require('cowsay');

const TOKEN = process.env.TOKEN;

const authenticated = (req, res, next) => {
  if (req.headers.token !== TOKEN) {
    return res.send(401);
  }
  next();
}

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.get('/cowsay', authenticated, (req, res) => {
  res.send(cowsay.say({
    text: "I love cowsay!"
  }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
