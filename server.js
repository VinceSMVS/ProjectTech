const express = require('express')
const app = express()
const path = require('path');
const port = 3000;


app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render("pages/index")
})

app.get('/about', (req, res) => {
    res.render("pages/about")
})
app.get('/login', (req, res) => {
    res.render("pages/login")
})

app.use((req, res) => {
  res.status(404).render('pages/404');
});

app.listen(port, () => {
  console.log(`port ${port} is actief`)
})



