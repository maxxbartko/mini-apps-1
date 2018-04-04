const express = require('express'),
  app = express(),
  $ = require('jQuery');


app.get('/', (req, res) => res.sendFile('client/index.html'));
app.listen(3000, () => console.log('Listening on 3000'));

app.use(express.static('client'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.post('/', (req, res) => {
  let $json = $('#json :submit').val();
  console.log($json);
  res.send($json);
});

// app.get(/^(.+)$/, (req, res) => {
//   console.log('static file request: ' + req.params);
//   res.sendfile(__dirname + req.params[0]);
// });