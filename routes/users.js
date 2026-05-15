const router = require('express').Router();
const mongodb = require('../data/database');

router.get('/', async (req, res) => {
  try {
    const result = await mongodb
      .getDatabase()
      .db('project1')
      .collection('users')
      .find();

    const users = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
