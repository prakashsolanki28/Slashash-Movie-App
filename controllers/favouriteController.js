const db = require('../config/dbConfig');

exports.addFavourite = (req, res) => {
    const { title, year, type, poster } = req.body;
    const sql = 'INSERT INTO favourites (title, year, type, poster) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, year, type, poster], (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send('Favourite added successfully');
    });
};

exports.getFavourites = (req, res) => {
    const sql = 'SELECT * FROM favourites';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(results);
    });
};


exports.deleteFavourite = async (req, res) => {
    const favouriteId = req.params.id;

    try {
        const deleteQuery = 'DELETE FROM favourites WHERE id = ?';
        await db.query(deleteQuery, [favouriteId]);
        res.sendStatus(200); 
    } catch (error) {
        console.error('Error deleting favourite:', error);
        res.status(500).json({ error: 'Failed to delete favourite' });
    }
};