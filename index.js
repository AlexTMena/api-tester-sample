const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const post = require('./routes/posts');
const bodyParser = require('body-parser');


require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

mongoose.connect(process.env.DB).then( () => {
    console.log('Connected to database')
}, err => {
    console.log('Failed to connect to database')
    console.error(err)
})

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', post)

app.use((err,req,res,next) => {
    console.log(err.message)
    res.status(500).send({
        error: {
            message: err.message,
            stack: err.stack,
        }
    })
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})