const router = require('express').Router();
const usersController = require('../controllers/users');

router.get('/', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  //#swagger.tags = ['Users']
  //#swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
  usersController.getSingle(req, res);
});

router.post('/', (req, res) => {
  //#swagger.tags = ['Users']
  /* #swagger.parameters['body'] = {
        in: 'body',
        schema: {
          firstName: 'Gino',
          lastName: 'Rojo',
          email: 'gino@email.com',
          favoriteColor: 'blue',
          birthday: '2000-01-01'
        }
  } */
  usersController.createUsers(req, res);
});

router.put('/:id', (req, res) => {
  //#swagger.tags = ['Users']
  //#swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
  /* #swagger.parameters['body'] = {
        in: 'body',
        schema: {
          firstName: 'Gino',
          lastName: 'Rojo',
          email: 'gino@email.com',
          favoriteColor: 'blue',
          birthday: '2000-01-01'
        }
  } */
  usersController.updateUsers(req, res);
});

router.delete('/:id', (req, res) => {
  //#swagger.tags = ['Users']
  //#swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
  usersController.deleteUsers(req, res);
});


module.exports = router;
