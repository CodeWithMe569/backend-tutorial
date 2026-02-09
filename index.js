const express = require('express');

// route
const users = require('./routes/users')

const app = express();

const PORT = 8080;

app.use(express.json());

app.use("/users", users);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server error");
})

app.listen(PORT);