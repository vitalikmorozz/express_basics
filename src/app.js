const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Import middleware
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

// Import routers
const usersApiRouter = require('./routes/api/user');
const usersWebRouter = require('./routes/web/user');

// PORT=4000 node src/app.js
const PORT = process.env.PORT || 3000;

const server = express();

// Configs
server.set('view engine', 'ejs');
server.use(expressLayouts);

// To properly parse form data
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api/user', usersApiRouter);
server.use('/web/user', usersWebRouter);

server.get('/', (req, res) => {
    res.send('Hello world');
    // res.status(200).send('Okay');
    // res.end();
    // res.sendFile(path.join(__dirname, '../', 'public/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
