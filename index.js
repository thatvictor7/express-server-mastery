const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const cakesRoute = require('./routes/cakes')
const studentsRoute = require('./routes/students')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req,res,next) => {
  res.send('🍰')
})

app.use('/cakes', cakesRoute)
app.use('/students', studentsRoute)

// error handling
app.use(notFound)
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl })
}

function notFound(req,res,next) {
  res.status(404).send(err)
}


app.listen(port,() => console.log(`port ${port}`))
