const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
const app = express();


//? DATABASE CONNECTION
mongoose.connect( process.env.DB_URL , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


//? IMPORT ROUTES
const postsRouter = require('./routes/posts');


//? MIDDLEWEARS
app.use(express.json());
app.use(bodyParser.json());

app.use('/posts', postsRouter); 


//? ROUTES
app.get('/', (req, res) => {
    res.send('We are on home route');
});


//? APP RUNNING
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
}); 