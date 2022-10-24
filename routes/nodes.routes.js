const express = require('express')
const router = express.Router()

const nodesController = require('../controllers/nodes.controller')

router.get('/',nodesController.findAll)
router.post('/',nodesController.create)
router.get('/:nodeId',nodesController.find)
router.put('/:nodeId',nodesController.update)
router.delete('/:nodeId',nodesController.delete)

module.exports = router