const { Router } = require('express');
const createTaksController = require('./controllers/create-task-controller');
const updateTaskController = require('./controllers/update-task-controller');

const router = Router();

router.post('/', createTaksController);
router.put('/:id', updateTaskController);

module.exports = router;
