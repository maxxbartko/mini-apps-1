var express = require('express');
var app = express();
app.get('/', (req, res) =>  res.send('heya earth'));
app.listen(3000, () => console.log(`Listening on 3000`));

// app.post('user/add', (req, res) => {
//   res.send('OK');
// });

// app.get(/^(.+)$/, (req, res) => {
//   console.log('static file request: ' + req.params);
//   res.sendfile(__dirname + req.params[0]);
// });