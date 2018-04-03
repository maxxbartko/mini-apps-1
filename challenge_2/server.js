var express = require('express');
var app = express();

app.get('/', (req, res) => res.sendfile('client/index.html'));
app.listen(3000, () => console.log('Listening on 3000'));

app.use(express.static('client'));

app.post('user/add', (req, res) => {
  res.send('OK');
});

app.get(/^(.+)$/, (req, res) => {
  console.log('static file request: ' + req.params);
  res.sendfile(__dirname + req.params[0]);
});