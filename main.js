const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
