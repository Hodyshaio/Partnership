const express = require('express');
const router = express.Router();

const { 
    getAllUsers,
    createUser,
    updateUser,
    deleteUser 
    } = require('./Controllers/users');

router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/:userID', updateUser);
router.delete('/:userID', deleteUser);

module.exports = router;