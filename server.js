const express = require('express')
const app = express()
const path = require('path');
const port = 3000;
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extendend: true })) 

//mongoDB setup
async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected")
    const db = client.db("sample_mflix");
    return db; 
    const coll = db.collection("movies");
    const cursor = coll.find();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
run().catch(console.dir);

//Get routes
app.get('/', (req, res) => {
  res.render("pages/index")
})
app.get('/about', (req, res) => {
    res.render("pages/about")
})
app.get('/login', (req, res) => {
    res.render("pages/login", { username: "test" })
})
app.get('/register', (req, res) => {
  res.render("pages/register")
})
app.get('/welcome', (req, res) => {
  const username = req.query.username;
  res.render("pages/welcome", { username: username })
})

//Post routes
app.post('/', async (req, res) => {
  const username = req.body.username;
  res.redirect(`/welcome?username=${username}`);
  const db = await run(); 
  const collection = db.collection('biepdiebapo'); 
  const dataToInsert = {username: username};
  await collection.insertOne(dataToInsert); 
  console.log('Form data inserted:', dataToInsert);
});

//Error handling
app.use((req, res) => {
  res.status(404).render('pages/404');
});

//Server 
app.listen(port, () => {
  console.log(`port ${port} is actief`)
})

