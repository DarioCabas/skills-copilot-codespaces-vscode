// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.comment_list);
router.post('/', commentController.comment_create); // Assuming you meant to create a comment with this route
router.get('/:id/delete', commentController.comment_delete);

// Export the router
module.exports = router;
