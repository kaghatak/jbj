const express = require('express')
const router = express.Router()

//GetAll
router.get('/', (req,res) => {
    res.send("Hello World")
})

//GetOne
router.get('/:id', (req,res) => {
    res.send(req.params.id)
    
})

//Create
router.post('/', (req,res) => {
    
})

//updte
router.patch('/', (req,res) => {
    
})

module.exports = router
