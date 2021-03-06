const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Get all users and post user at api/users
router
    .route('/').get(getAllUsers).post(createUser);

// Get, put and delete routes at api/users/:id
router
    .route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// set up routes for add and remove friend
router
    .route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;