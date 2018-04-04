const express = require('express'),
  app = express()

app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

app.listen(3000, () => console.log('Aww yeah, loving that port 3000!'))