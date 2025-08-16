const { Router } = require('express');
const getGroupByIdController = require('./controllers/get-group-by-id-controller.js');
const getGroupUsersController = require('./controllers/get-group-users-controller.js');
const getGroupTasksByStatusController = require('./controllers/get-group-tasks-by-status-controller.js');

const router = Router();

router.get('/:id', getGroupByIdController);
router.get('/:groupId/users', getGroupUsersController);
router.get('/:groupId/tasks/:status', getGroupTasksByStatusController);

module.exports = router;
