const express = require('express');
const app = express();
const db = require('./queries')

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//app.post('/', dbcreateUser);
//app.post('/', db.stack);

app.get('/', (request, responce) => {
    responce.json({message: "It works"});
});

app.listen(port, () => {
    console.log (`running on ${port}`);
})