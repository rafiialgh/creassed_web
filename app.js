const expressLayouts = require('express-ejs-layouts')
const express = require('express')

const app = express()
const port = 3001

// setup ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static("public"));
app.use(express.static("public/assets"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Creassed Co.',
    layout: 'layouts/main-layout'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about',
    layout: 'layouts/main-layout'
  })
})

app.get('/collections', (req, res) => {
  res.render('collections', {
    title: 'Collections',
    layout: 'layouts/main-layout',
    // utils: 'public/index'
  })
})

app.use(function (req, res) {
  res.status(404).send('error');
});

app.listen(port, () => {
  console.log(`Creassed Web | listening at http://localhost:${port}`);
})