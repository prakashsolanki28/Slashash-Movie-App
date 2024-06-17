const axios = require('axios');

const OMDB_API_KEY = '3f6a41b8';

exports.searchMovies = async (req, res) => {
    const query = req.query.q;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
