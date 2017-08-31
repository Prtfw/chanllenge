const express = require("express");
const parser = require("body-parser");
const morgan = require("morgan");
const db = require('./database.js')


const PORT = 3008;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/assign', function (req, res) {
  const reviewFor = db.employees.findOne(
    {'$and': [{'last':req.body.for.split(',')[0]}, {'first':req.body.for.split(', ')[1]}]}
  )
  const reviewFrom = db.employees.findOne(
    {'$and': [{'last':req.body.from.split(',')[0]}, {'first':req.body.from.split(', ')[1]}]}
  )

  const toAssign = db.reviews.findOne(
    {'$and': [{'for': reviewFor.guid}, {'from':reviewFrom.guid}]}
  )
  toAssign ? null : db.reviews.insert({id: db.chance.guid(), for: reviewFor.guid, from: reviewFrom.guid})

  // Loki currently does not support Upsert or findAndUpdate
  db.db.saveDatabase();
})

app.post('/submitReview/:id', function (req, res) {
  const toUpdate = db.reviews.findOne({id: req.params.id})
  toUpdate.score = req.body.score
  toUpdate.comment = req.body.comment
  db.reviews.update(toUpdate)
  db.db.saveDatabase();
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/employees', function (req, res) {
  res.send(db.employees.find({}))
})

app.get('/employee/:guid', function (req, res) {  // not actually being used but could be hookedup in the next iteration
  res.send(db.employees.find({guid: req.params.guid}))
})

app.get('/reviews/', function (req, res) {
  res.send(db.reviews.find({}))
})

app.get('/review/:id', function (req, res) {  // not actually being used but could be hookedup in the next iteration
  res.send(db.reviews.find({id: req.params.id}))
})

app.listen(PORT, () => console.log("server up on " + PORT));

// currently the DB does not persist after server restart. But this can be easily solved by saving to a JSON file and reloading from the file.
// did not realize this when I decided to try out Loki.
