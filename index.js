const express = require('express')
const app = express()
const port = 80
const path = require('path')

app.use('/dist', express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/pages/index.html`))
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))