const express = require('express')
const app = express()
const path = require('path');
const port = 3000;
require('dotenv').config();

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.URI;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extendend: true })) //dit is middelware om te zorgen dat ik informatie van forms kan ophalen.


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
app.post('/', (req, res) => {
  const username = req.body.username;
  res.redirect(`/welcome?username=${username}`);
});

//Error handling
app.use((req, res) => {
  res.status(404).render('pages/404');
});

//Server 
app.listen(port, () => {
  console.log(`port ${port} is actief`)
})

