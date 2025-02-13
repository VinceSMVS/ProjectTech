const express = require('express')
const app = express()
const path = require('path');


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
app.get('/form', (req, res) => {
  res.render("pages/form")
})


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  })

app.listen(3000, () => {
  console.log('server is actief')
})


