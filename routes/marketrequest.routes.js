const express = require('express')
const router = express.Router()

const marketRequestController = require('../controllers/marketRequest.controller')

router.get('/',marketRequestController.findAll)
router.post('/',marketRequestController.create)
router.get('/:nodeId',marketRequestController.find)
router.put('/:nodeId',marketRequestController.update)
router.delete('/:nodeId',marketRequestController.delete)

module.exports = router