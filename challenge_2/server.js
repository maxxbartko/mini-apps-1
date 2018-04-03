var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendfile(client/index.html)
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});