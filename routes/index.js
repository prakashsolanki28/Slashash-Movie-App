const express = require('express');
const router = express.Router();

const searchRoutes = require('./searchRoutes');
const favouriteRoutes = require('./favouriteRoutes');

router.use(searchRoutes);
router.use(favouriteRoutes);

module.exports = router;
