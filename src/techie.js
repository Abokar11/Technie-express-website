const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
// using path.join and dirname for  files in public folder
app.use(express.static(path.join(__dirname, '../public')))
// Registering partials
hbs.registerPartials(__dirname+ '../../views/partials')
// setting the view engine
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

// Middleware for routing
app.get('/', (req,res) => {
    res.render('home');
})
app.get('/about', (req,res) => {
    res.render('about');
})
app.get('/contact', (req,res) => {
    res.render('contact');
})
app.get('/reachUs', (req,res) => {
    res.render('reachUs');
})

app.listen(3000, () => {
    console.log('Server is listening at port number 3000');
})