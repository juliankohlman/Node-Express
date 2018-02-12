const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;


app.use(bodyParser.json());
const users = [];
let userId = 0;

app.use('/', (req, res, next) => {
  console.log('Req type:', req.method);
  next();
})

app.get('/', (req, res, next) => {
  res.send('Hello word');
  next();
})

///// user paths

app.get('/users', (req, res) => {
  res.send(users.join('-'));
})

app.get('/users/:userId', (req, res) => {
  res.send(users[req.params.userId] + "" || "User id does not exist");
});

app.post('/users', (req, res) => {
  userId ++;
  users.push(userId)
  res.send(userId + "");
});



app.listen(PORT, () => {
  console.log('App is listening on port 3030!');
})


