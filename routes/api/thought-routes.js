const router = require('express').Router();
const { getAllThoughts, getThoughtById, updateThought, addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// Get routes for thoughts
router
    .route('/').get(getAllThoughts).post(addThought);

// Get, put, and delete routes for thoughts
router
    .route('/:id').get(getThoughtById).put(updateThought).delete(removeThought);

// delete a thought and add a reaction routes
router
    .route('/:thoughtId/reactions').put(addReaction)


// delete reactions
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;