const express = require('express');

const port = 5000;
const cors = require('cors');




const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
let db;
const dbName = "transactiondb"

client.connect().then(() => {

  db = client.db(dbName)

}).catch((e) => {
  console.log(e)
})

// const transactionController = require('./controllers/transactions');


// mongoose.connect('mongodb://localhost:27017/transactionsDB', {
//   useNewUrlParser: true
// }).then(() => {
//   console.log("MongoDB connected")
// }).catch((e) => {
//   console.log(e)
// })

const app = express();
app.use(cors());

app.use(express.json())


app.post('/', async (req, res) => {
  const requestedTransaction = req.body

  const transaction = await db.collection('transactions').insertOne(requestedTransaction)
  
  res.send(transaction);
})

app.get('/', async (req, res) => {
  //   //mongodb here
  // res.json(transactions);

  const result = await db.collection('transactions').find({}).toArray()
  
  res.send(result)
})

app.listen(port, () => {
  console.log("server started")
});



