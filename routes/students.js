const express = require('express')
const router = express.Router()
let students = require('../students.json')

router.get('/', (req,res, next) => {
  res.json({ students })
})

router.get('/:id', (req,res,next) => {
  const id = req.params.id
  const filtered = students.filter(student => {
    return student.id == id
  })
  res.json({ student: filtered[0]})
})

router.post('/', (req,res,next) => {
  let body = req.body
  students.push(body)
  res.json({student: body})
})

router.put('/:id', (req, res, next) =>{
  let body = req.body
  let id = req.params.id

  const mapped = students.map(student => {
    if (student.id == id){

      return body
    } else {
      return student
    }
  })
  characters = mapped

  res.json({ student: body })
})


module.exports = router
