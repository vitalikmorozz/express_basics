require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');

// Connect to MongoDB using Mongoose and MongoDB Atlas
mongoose.connect(
    process.env.MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(`MongoDB connection failed! Error: ${err}`);
        else console.log('MongoDB connected successfully');
    }
);

// Mongoose deprecation warning fixes
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

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

server.use(logger);

// To properly parse form data
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api/user', usersApiRouter);
server.use('/web/user', usersWebRouter);

server.get('/', (req, res) => {
    res.send('Hello world');
    // res.sendStatus(200);
    // res.status(200).end();
    // res.sendFile(path.join(__dirname, '../', 'public/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
