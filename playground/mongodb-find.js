//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //       _id: new ObjectID('58c19875a44ad514785e3d9d')
  //     })
  //       .toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find()
  //   .count().then((count) => {
  //     console.log(`Todos count: ${count}`);
      
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

db.collection('Users')
  .find({name: 'Tse'})
  .toArray()
  .then(
    (list) => {
      console.log('List of Tse:');
      console.log(JSON.stringify(list, undefined,2));
    },
    (err) => {
      console.log('Unable to find requested list');
    });

  //db.close();
});