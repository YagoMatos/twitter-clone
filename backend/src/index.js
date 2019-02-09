const  express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://twitter:yago1911@ds019058.mlab.com:19058/twitter-app-backend', 
    { 
        useNewUrlParser: true 
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(4000, () => {
    console.log('server started on port 4000');
});