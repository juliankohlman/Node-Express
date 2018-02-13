const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;


app.use(bodyParser.json());
// create a users array
const users = [];
let userId = 0;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/users/:name/:id', (req, res) => {
  users.push({name: req.params.name, id: req.params.id})
  res.send(users);
});

app.get('/users', (req, res) => {
  res.send(users);
})

app.get('/users/:id', (req, res) => {
  res.send(users.filter(user => user.id === req.params.id));
});

app.get('/search', (req, res) => {

})

app.delete('/users/:id', (req, res) => {
  res.send(users.filter(user => user.id !== req.params.id));
})

app.listen(PORT, () => {
  console.log('App is listening on port 3030!');
})


