const express = require('express'),
  app = express();
  

app.get('/', (req, res) => res.sendfile('client/index.html'));
app.listen(3000, () => console.log('Listening on 3000'));

app.use(express.static('client'));

app.post('/', (req, res) => {
  res.send('ok');
});

// app.get(/^(.+)$/, (req, res) => {
//   console.log('static file request: ' + req.params);
//   res.sendfile(__dirname + req.params[0]);
// });