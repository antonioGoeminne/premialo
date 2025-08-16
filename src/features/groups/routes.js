const { Router } = require('express');
const getGroupByIdController = require('./controllers/get-group-by-id-controller.js');
const getGroupUsersController = require('./controllers/get-group-users-controller.js');
const getGroupTasksByStatusController = require('./controllers/get-group-tasks-by-status-controller.js');
const createGroupController = require('./controllers/create-group-controller.js');
const joinGroupController = require('./controllers/join-group-controller.js');

const router = Router();

router.post('/', createGroupController);
router.post('/join/:shareCode', joinGroupController);
router.get('/:id', getGroupByIdController);
router.get('/:groupId/users', getGroupUsersController);
router.get('/:groupId/tasks/:status', getGroupTasksByStatusController);

module.exports = router;
