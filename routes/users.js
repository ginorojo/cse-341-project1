const router = require('express').Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/', usersController.createUsers);
router.put('/:id', usersController.updateUsers);
router.delete('/:id', usersController.deleteUsers);


module.exports = router;
