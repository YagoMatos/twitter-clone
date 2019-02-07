const express = require('express');

const routes = express.Router();

const TweetController = require('./controller/TweetController');
const LikeController = require('./controller/LikeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweet', TweetController.store);

routes.post('/likes/:id', LikeController.store);

module.exports = routes;