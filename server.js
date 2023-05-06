const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();


const routes = require('./routes/ToDoroutes');
const app = express();
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())

mongoose.
    connect("mongodb://127.0.0.1:27017",
        {
            dbName: "backend",
        }).then(() => {
            console.log("data base conected")
        }).catch((e) => console.log(e));

app.use(routes);

app.listen(PORT, () => console.log(`listenning on :${PORT}`))