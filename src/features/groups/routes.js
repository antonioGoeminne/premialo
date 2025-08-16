const { Router } = require('express');
const getGroupByIdController = require('./controllers/get-group-by-id-controller.js');

const router = Router();

router.get('/:id', getGroupByIdController);

module.exports = router;
