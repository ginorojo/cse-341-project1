const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const buildUser = (body) => ({
  username: body.username,
  name: body.name,
  email: body.email,
  ipaddress: body.ipaddress
});

const hasAllUserFields = (user) =>
  user.username && user.name && user.email && user.ipaddress;

const getAll = async (req, res) => {
  //#swagger.tags['Users]
  const result = await mongodb.getDatabase().db('project1').collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
    //#swagger.tags['Users]
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db('project1')
    .collection('users')
    .find({ _id: userId });

  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users[0]);
  });
};

const createUsers = async (req, res) => {
    //#swagger.tags['Users]
  const user = buildUser(req.body);

  if (!hasAllUserFields(user)) {
    res.status(400).json('Please provide email, username, name and ipaddress.');
    return;
  }

  const response = await mongodb.getDatabase().db('project1').collection('users').insertOne(user);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateUsers = async (req, res) => {
    //#swagger.tags['Users]
  const userId = new ObjectId(req.params.id);
  const user = buildUser(req.body);

  if (!hasAllUserFields(user)) {
    res.status(400).json('Please provide email, username, name and ipaddress.');
    return;
  }

  const response = await mongodb
    .getDatabase()
    .db('project1')
    .collection('users')
    .replaceOne({ _id: userId }, user);

  if (response.matchedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
};

const deleteUsers = async (req, res) => {
    //#swagger.tags['Users]
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db('project1')
    .collection('users')
    .deleteOne({ _id: userId }, true);

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createUsers,
  updateUsers,
  deleteUsers
};
