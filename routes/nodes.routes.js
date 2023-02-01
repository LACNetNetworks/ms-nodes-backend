const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth");
const nodesController = require('../controllers/nodes.controller')

router.get('/',nodesController.findAll)
router.get('/portal',nodesController.findAllPortal)
router.post('/',auth,nodesController.create)
router.get('/:nodeId',auth,nodesController.find)
router.put('/:nodeId',auth,nodesController.update)
router.delete('/:nodeId',auth,nodesController.delete)

module.exports = router