const loki = require("lokijs");
const Chance = require("chance");
var chance = new Chance();

chance.mixin({
  employees: () => ({
    first: chance.first(),
    last: chance.last(),
    guid: chance.guid(),
  }),
});

// =======> code to generate test data... uncomment if needed
// const testSet = Array.from({length: 10}).map(x=>chance.test())
// console.log(testSet)

const employeesDataSeed = [
  {
    first: "Stella",
    last: "Ellis",
    guid: "d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8",
  },
  {
    first: "Gavin",
    last: "Schwartz",
    guid: "98fce8dd-7420-5dad-b315-101e1ebd18c0",
  },
  {
    first: "Derek",
    last: "Walker",
    guid: "efcda8fc-a1d0-5c20-92bb-9e96d4abcf08",
  },
  {
    first: "Della",
    last: "Wagner",
    guid: "50535380-f046-5d50-acf9-8285752777b6",
  },
  {
    first: "Rebecca",
    last: "Snyder",
    guid: "a658d36a-9c2a-5d2f-8945-c7051984b6bf",
  },
  {
    first: "Michael",
    last: "Tran",
    guid: "f0e6ab79-cce2-5f6a-b8b8-6991810bcb65",
  },
  {
    first: "Bradley",
    last: "Watts",
    guid: "1f2d7300-e3a9-55d9-9f3a-ebe9721b2cc1",
  },
  {
    first: "Lettie",
    last: "Sims",
    guid: "b6dfd9d9-d082-5a19-8597-ff915a7a7e2b",
  },
];

const reviewsDataSeed = [
  {
    from: "d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8",
    for: "98fce8dd-7420-5dad-b315-101e1ebd18c0",
    id: "9789d924-94eb-4977-a1a8-03302f5d0599",
    score: 4,
    comment: 'super awsome',
  },
  {
    from: "efcda8fc-a1d0-5c20-92bb-9e96d4abcf08",
    for: "d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8",
    id: "7d6a1437-02b3-4f42-acb3-ed251290ea5f",
    score: 5,
    comment: 'best PRs',
  },
  {
    from: "d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8",
    for: "efcda8fc-a1d0-5c20-92bb-9e96d4abcf08",
    id: "5e1adfd8-8133-4971-bce6-6201ed4afa13",
    score: 3,
    comment: 'bauss of observables',
      }
];

var db = new loki("db.json", {autosave: true, autosaveInterval: 5000, autoload: true});

let employees = db.addCollection("employees")
employees.insert(employeesDataSeed);

let reviews = db.addCollection("reviews")
reviews.insert(reviewsDataSeed);


db.saveDatabase();


module.exports = {
employees,
reviews,
db,
chance,
}
