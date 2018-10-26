const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const cakes = require('./routes/cakes.js')
const students = require('./routes/students.js')

app.use(bodyParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req,res,next) => {
  res.send('🍰')
})

app.use('/cakes', cakes)
app.use('/students', students)

// error handling
app.use(notFound)
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl })
}

function notFound(err,req,res,next) {
  res.status(404).send(err)
}


app.listen(port,() => console.log(`port ${port}`))
