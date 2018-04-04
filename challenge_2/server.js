const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  convert = require('./helpers.js');

app.get('/', (req, res) => res.sendfile('client/index.html'));

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  let parsed = convert.JSONtoCSV(req.body);
  res.send(parsed);
});

app.listen(3000, () => console.log('Listening on 3000'));

// app.get(/^(.+)$/, (req, res) => {
//   console.log('static file request: ' + req.params);
//   res.sendfile(__dirname + req.params[0]);
// });