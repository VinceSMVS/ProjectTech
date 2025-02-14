const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

//configuration
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



