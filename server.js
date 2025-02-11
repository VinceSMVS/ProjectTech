const express = require('express')
const app = express()
const path = require('path');


app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });

app.get('/about', (req, res) => {
    res.render("about")
})
app.get('/login', (req, res) => {
    res.render("login")
})

app.use(express.static('public'))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  })

app.listen(3000)


// Serve static files: Zoals CSS en afbeeldingen.