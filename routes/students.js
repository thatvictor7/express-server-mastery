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

router.put('/:id', (req, res) =>{
  const body = req.body;
  const id = req.params.id;

  for(let i = 0; i < students.length; i++){
    if(id == students[i].id){
      students[i] = body;
    }
  }
  res.json({ student: body })
})

router.delete('/:id', (req, res, next)=>{
  let id = parseInt(req.params.id)
  let deleted = students.splice(id - 1, 1)
  res.json({ deleted: deleted })
})



module.exports = router
