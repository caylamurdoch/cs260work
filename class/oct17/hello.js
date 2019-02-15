const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hi Ben!'))

app.listen(port, () => console.log(`Starting on port ${port}!`))
