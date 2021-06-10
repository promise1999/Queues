const express = require('express');
const app = express();
const db = require('./queries')

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/save/stacks', db.createUser);


app.get('/', (request, response) => {
    response.json({message: "It works"});
});

app.listen(port, () => {
    console.log (`running on ${port}`);
})

/*

CRUD -create (save, post) Retrieve (get, fetch), Update modify, put), Delete (remove, purge, prune)

problem 1 - create a service with 2 end points -> save and retrieve (stack) LIFO
problem 2 - create a service with 2 endpoints -> save and retrieve (queue) FIFO

psuedocode - 
app.post /xyz (save) -
|_ stack (push)
    |_database insert into postgres
app.get /xyz (retrieve) - stack () 

*/
