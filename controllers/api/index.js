const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const searchRoutes = require('./search-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/search', searchRoutes);

module.exports = router;