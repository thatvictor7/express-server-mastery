const express = require('express')
const router = express.Router()
const cakes = require('../cakes.json')

router.get('/', (req,res, next) => {
  res.json({ cakes })
})

router.get('/:id', (req,res,next) => {
  const id = req.params.id
  const filtered = cakes.filter(cake => {
    return cake.id == id
  })
  res.json({ cake: filtered[0]})
})

router.post('/', (req,res,next) => {
  let body = req.body
  cakes.push(body)
  res.json({cake: body})
})

router.put('/:id', (req, res) =>{
  const body = req.body;
  const id = req.params.id;

  for(let i = 0; i < cakes.length; i++){
    if(id == cakes[i].id){
      cakes[i] = body;
    }
  }
  res.json({ cake: body })
})

router.delete('/:id', (req, res, next)=>{
  let id = parseInt(req.params.id)
  let deleted = cakes.splice(id - 1, 1)
  res.json({ deleted: deleted })
})


module.exports = router
