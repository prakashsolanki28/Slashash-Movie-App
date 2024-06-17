const express = require('express');
const router = express.Router();
const favouriteController = require('../controllers/favouriteController');

router.post('/favourite', favouriteController.addFavourite);
router.get('/favourites', favouriteController.getFavourites);
router.delete('/favourites/:id', favouriteController.deleteFavourite);

module.exports = router;
