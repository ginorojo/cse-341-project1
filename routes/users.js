const router = require('express').Router();
const usersController = require('../controllers/users');

// #swagger.tags = ['Users']
router.get('/', usersController.getAll);
// #swagger.tags = ['Users']
// #swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
router.get('/:id', usersController.getSingle);
// #swagger.tags = ['Users']
// #swagger.parameters['body'] = {
// #swagger.in = 'body'
// #swagger.schema = {
//   firstName: 'Gino',
//   lastName: 'Rojo',
//   email: 'gino@email.com',
//   favoriteColor: 'blue',
//   birthday: '2000-01-01'
// }
// }
router.post('/', usersController.createUsers);
// #swagger.tags = ['Users']
// #swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
// #swagger.parameters['body'] = {
// #swagger.in = 'body'
// #swagger.schema = {
//   firstName: 'Gino',
//   lastName: 'Rojo',
//   email: 'gino@email.com',
//   favoriteColor: 'blue',
//   birthday: '2000-01-01'
// }
// }
router.put('/:id', usersController.updateUsers);
// #swagger.tags = ['Users']
// #swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
router.delete('/:id', usersController.deleteUsers);


module.exports = router;
