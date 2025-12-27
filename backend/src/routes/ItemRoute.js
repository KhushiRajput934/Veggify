const express = require('express')
const router = express.Router()

const ItemController = require('../controllers/itemController')

router.get('/all-items', ItemController.getAllItems);

router.get('/items', ItemController.getSearchedItem)
router.get('/items/:id', ItemController.getSingleItem)

router.post('/items', ItemController.addItem)

module.exports = router