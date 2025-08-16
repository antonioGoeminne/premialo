const { Router } = require('express');
const getGroupByIdController = require('./controllers/get-group-by-id-controller.js');
const getGroupUsersController = require('./controllers/get-group-users-controller.js');

const router = Router();

router.get('/:id', getGroupByIdController);
router.get('/:groupId/users', getGroupUsersController);

module.exports = router;
