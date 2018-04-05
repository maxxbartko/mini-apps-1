const express = require('express'),
  app = express()

app.use(express.static('public'))

app.listen(1337, () => console.log('Aww yeah, loving that port 1337!'))