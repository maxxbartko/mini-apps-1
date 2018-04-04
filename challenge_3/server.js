const express = require('express'),
  app = express()

// app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`))
app.use(express.static('public'))

app.listen(3000, () => console.log('Aww yeah, loving that port 3000!'))